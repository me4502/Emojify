import emojiOverridesJson from './overrides.json';
import emojiMapJson from './emojiMap.json';

type EmojiMap = { [key: string]: string[] };

const emojiOverrides = emojiOverridesJson as EmojiMap;
const emojiMap = emojiMapJson as EmojiMap;

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
            if (!word) {
                continue;
            }
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
                    lastTriple >= tripleCooldown
                ) {
                    insert = insert + insert + insert;
                    lastTriple = 0;
                } else {
                    lastTriple++;
                }

                if (replace && Math.random() < replaceChance) {
                    words[i] = `${insert}`;
                } else {
                    words[i] = `${word} ${insert} `;
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

// Maintain an allow list of under 3 letter words
const SMALL_WORD_ALLOW_LIST = new Set(['i', 'he', 'we', 'no']);

function findEmojisForWord0(word: string): string[] {
    const foundEmojis: string[] = [];

    if (word === 'my') {
        // Easy hack fix for a common flag issue.
        word = 'i';
    }

    if (word.length <= 2 && !SMALL_WORD_ALLOW_LIST.has(word)) {
        return foundEmojis;
    }

    if (isMaybeAlreadyAnEmoji(word)) {
        return foundEmojis;
    }

    if (emojiOverrides[word]) {
        foundEmojis.push(...emojiOverrides[word]);
    }

    for (const emoji in emojiMap) {
        if (emojiMap[emoji].includes(word)) {
            foundEmojis.push(emoji);
        }
    }

    return foundEmojis;
}

const numberToNumeral = new Map([
    ['0', 'zero'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine']
]);

const numeralToNumber = new Map(
    [...numberToNumeral.entries()].map(([key, val]) => [val, key])
);

const emojiModFunctions: ((word: string) => string | undefined)[] = [
    w => w,
    w => numberToNumeral.get(w) ?? numeralToNumber.get(w),
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
            : undefined,
    w =>
        w.length > 3 && w.endsWith('ed')
            ? w.substring(0, w.length - 2)
            : undefined,
    w =>
        w.length & 4 && w.endsWith('ies')
            ? `${w.substring(0, w.length - 3)}y`
            : undefined,
    w =>
        w.length > 4 && w.endsWith('ied')
            ? `${w.substring(0, w.length - 3)}y`
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
        .forEach(w => {
            if (w) {
                foundEmojis.push(...findEmojisForWord0(w));
            }
        });

    return foundEmojis;
}

// Adopted from https://github.com/notwaldorf/emoji-translate/blob/master/emoji-translate.js for dependency reasons
// MIT License, available at https://raw.githubusercontent.com/notwaldorf/emoji-translate/master/LICENSE

const rangeMatcher = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
].join('|');

/**
 * Returns true for something that's already an emoji like 🤖.
 * @param {String} word The word to be translated
 * @returns {Bool}
 */
function isMaybeAlreadyAnEmoji(word: string): boolean {
    return word.match(rangeMatcher) !== null;
}
