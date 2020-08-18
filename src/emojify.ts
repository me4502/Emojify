import translate from 'moji-translate';
import { lib } from 'emojilib';
import * as emojiOverridesJson from './overrides.json';

type EmojiMap = { [key: string]: string[] };

const emojiOverrides = emojiOverridesJson as EmojiMap;

let _emojiMap: EmojiMap | undefined = undefined;

function getEmojiMap(): EmojiMap {
    if (_emojiMap) {
        return _emojiMap;
    }
    _emojiMap = Object.keys(lib).reduce((obj, emojiKey) => {
        const emoji = lib[emojiKey];
        obj[emoji.char] = emoji.keywords.reduce((a, b) => {
            a.push(...b.split('-'));
            return a;
        }, [] as string[]);
        obj[emoji.char].push(emojiKey);
        obj[emoji.char].push(...emojiKey.split('_'));
        obj[emoji.char] = obj[emoji.char].filter(
            w =>
                w !== 'and' &&
                w !== 'in' &&
                w !== 'with' &&
                w !== 'of' &&
                w !== 'a'
        );
        return obj;
    }, {} as EmojiMap);

    for (const override in emojiOverrides) {
        _emojiMap[override] = (_emojiMap[override] ?? []).concat(
            emojiOverrides[override]
        );
    }

    return _emojiMap!;
}

interface EmojifyOptions {
    replace?: boolean;
    /* Chance of replacing words with emojis when replace is enabled. 1 means always 0 means never. */
    replaceChance?: number;
    tripleCooldown?: number;
    tripleChance?: number;
    multimojiChance?: number;
}

export function emojify(
    inputText: string,
    {
        replace = false,
        replaceChance = 1,
        tripleCooldown = 3,
        tripleChance = 0.05,
        multimojiChance = 0.1
    }: EmojifyOptions = {}
): string {
    const lines = inputText.split(/\n/);
    const outputLines = [];
    const missingWords = [];

    for (const line of lines) {
        const words = line.split(' ');
        let lastTriple = 99999;

        for (const i in words) {
            const word = words[i];
            const cleanedWord = cleanWord(word);
            let emojis = findEmojisForWord(cleanedWord);

            if (emojis.length > 0) {
                function grabEmoji(): string {
                    const emojiIndex = Math.floor(
                        Math.random() * emojis.length
                    );
                    const emoji = emojis[emojiIndex];
                    emojis.splice(emojiIndex, 1);
                    return emoji;
                }

                const emoji = grabEmoji();

                let insert = emoji;

                while (Math.random() < multimojiChance && emojis.length > 1) {
                    insert += grabEmoji();
                }

                if (
                    Math.random() < tripleChance &&
                    lastTriple > tripleCooldown
                ) {
                    insert = insert + insert + insert;
                    lastTriple = 0;
                } else {
                    lastTriple++;
                }

                if (replace && Math.random() < replaceChance) {
                    words[i] = insert;
                } else {
                    words[i] = word + ' ' + insert + ' ';
                }
            } else {
                missingWords.push(cleanedWord);
            }
        }
        outputLines.push(words.join(' '));
    }
    return outputLines.join('\n');
}

function cleanWord(word: string): string {
    word = word
        .trim()
        .replace('?', '')
        .replace('!', '')
        .replace(',', '')
        .replace(':', '')
        .replace('"', '')
        .replace('"', '')
        .replace('.', '');
    return word.toLowerCase();
}

function findEmojisForWord0(word: string): string[] {
    const foundEmojis: string[] = [];

    if (word === 'my') {
        // Easy hack fix for a common flag issue.
        word = 'i';
    }

    // Maintain a whitelist of <3 letter words
    if (
        word.length <= 2 &&
        word !== 'i' &&
        word !== 'he' &&
        word !== 'we' &&
        word !== 'no'
    ) {
        return foundEmojis;
    }

    if (translate.isMaybeAlreadyAnEmoji(word)) {
        return foundEmojis;
    }

    if (emojiOverrides[word]) {
        foundEmojis.push(...emojiOverrides[word]);
    }

    const emojiMap = getEmojiMap();

    for (let emoji in emojiMap) {
        if (emojiMap[emoji].includes(word)) {
            foundEmojis.push(emoji);
        }
    }

    return foundEmojis;
}

const emojiModFunctions: ((word: string) => string | undefined)[] = [
    w => w,
    w => (w.length > 1 ? `${w}s` : undefined),
    w => (w.length > 1 ? `${w}ing` : undefined),
    w => (w.length > 1 ? `${w}ed` : undefined),
    w => (w.endsWith("'s") ? w.substring(0, w.length - 2) : undefined),
    w => (w.endsWith("'") ? `${w.substring(0, w.length - 1)}g` : undefined),
    w =>
        w.length > 2 && w.endsWith('s')
            ? w.substring(0, w.length - 1)
            : undefined,
    w => (w.endsWith('ing') ? w.substring(0, w.length - 3) : undefined),
    w => (w.endsWith('ing') ? `${w.substring(0, w.length - 3)}e` : undefined),
    w =>
        w.length > 5 && w.endsWith('ing')
            ? w.substring(0, w.length - 4)
            : undefined,
    w => (w.endsWith('er') ? w.substring(0, w.length - 2) : undefined),
    w => (w.endsWith('er') ? `${w.substring(0, w.length - 2)}e` : undefined),
    w =>
        w.length > 4 && w.endsWith('er')
            ? w.substring(0, w.length - 3)
            : undefined
];

function findEmojisForWord(word: string): string[] {
    const foundEmojis: string[] = [];

    // Try the word, and various permutations.
    word = word.trim().toLowerCase();

    // Split hyphenated words
    if (word.includes('-')) {
        word.split('-')
            .map(findEmojisForWord)
            .forEach(words => foundEmojis.push(...words));
    }

    // Run it for each functor
    emojiModFunctions
        .map(func => func(word))
        .filter(w => w)
        .forEach(w => foundEmojis.push(...findEmojisForWord0(w!)));

    return foundEmojis;
}
