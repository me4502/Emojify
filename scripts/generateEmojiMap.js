import fs from 'node:fs/promises';

import lib from 'emojilib' with { type: 'json' };
import data from 'unicode-emoji-json' with { type: 'json' };
import overrides from './overrides.json' with { type: 'json' };
import { byTitle } from 'emoji-platform-data';
import { pascalCase } from 'change-case';

const BANNED_WORDS = new Set([
    '',
    'a',
    'and',
    'at',
    'be',
    'in',
    'is',
    'it',
    'of',
    'on',
    'the',
    'to',
    'with',
]);

const cleanWord = word => {
    return word
        .toLowerCase()
        .replaceAll('’', "'")
        .replaceAll('“', '')
        .replaceAll('”', '')
        .replaceAll('\u00A0', ' ')
        .replaceAll('\u00D7', 'x')
        .replaceAll('\u2212', '-');
};

const normaliseEmojiName = name => {
    return pascalCase(name).replaceAll(' ', '');
};

/**
 *
 * @param {import('emoji-platform-data').EmojiPlatformData} extraData
 * @returns
 */
const extractExtraKeywords = extraData => {
    if (!extraData) {
        return [];
    }

    const extraKeywords = [
        ...(extraData.emojipedia?.alsoKnownAs ?? []),
        extraData.emojipedia?.appleName,
        ...(extraData.fluemoji?.keywords ?? []),
        ...(extraData.gemoji?.names ?? []),
        ...(extraData.gemoji?.tags ?? []),
        ...(extraData.twemoji?.keywords ?? []),
    ];

    return extraKeywords.filter(Boolean);
};

const emojiData = Object.keys(data).reduce((obj, emojiKey) => {
    const emoji = data[emojiKey];

    const extraData =
        byTitle[normaliseEmojiName(emoji.slug)] ??
        byTitle[normaliseEmojiName(emoji.name)];

    emoji.keywords = lib[emojiKey] || [];

    const extraKeywords = extractExtraKeywords(extraData);
    if (extraKeywords.length > 0) {
        emoji.keywords.push(...extraKeywords);
    }

    let words = emoji.keywords.reduce((a, b) => {
        if (b.includes('-')) {
            a.push(...b.split('-'));
        }
        if (b.includes('_')) {
            a.push(...b.split('_'));
        } else {
            a.push(b);
        }
        return a;
    }, []);
    words.push(emoji.name, ...emoji.slug.split('_'));
    words = [
        ...new Set(
            words.map(w => cleanWord(w)).filter(w => !BANNED_WORDS.has(w))
        ),
    ];
    for (const word of words) {
        if (!obj[word]) {
            obj[word] = [];
        }
        obj[word].push(emojiKey);
    }
    return obj;
}, {});

for (const [word, emojis] of Object.entries(overrides)) {
    if (!emojiData[word]) {
        emojiData[word] = [];
    }
    emojiData[word].push(...emojis);
}

for (const word of Object.keys(emojiData)) {
    emojiData[word] = [...new Set(emojiData[word])].toSorted();
}

await fs.writeFile(
    `src/emojiMap.json`,
    JSON.stringify(emojiData, Object.keys(emojiData).toSorted(), 0)
);
