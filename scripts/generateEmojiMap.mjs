import fs from 'node:fs/promises';

import lib from 'emojilib' assert { type: 'json' };
import data from 'unicode-emoji-json' assert { type: 'json' };
import overrides from './overrides.json' assert { type: 'json' };

const BANNED_WORDS = new Set(['', 'and', 'in', 'with', 'of', 'a']);

const cleanWord = word => {
    return word
        .toLowerCase()
        .replaceAll('’', "'")
        .replaceAll('“', '')
        .replaceAll('”', '');
};

const emojiData = Object.keys(data).reduce((obj, emojiKey) => {
    const emoji = data[emojiKey];
    emoji.keywords = lib[emojiKey] || [];
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
    words.push(emoji.name);
    words.push(...emoji.slug.split('_'));
    words = [
        ...new Set(
            words.map(w => cleanWord(w)).filter(w => !BANNED_WORDS.has(w))
        ),
    ];
    words.forEach(word => {
        if (!obj[word]) {
            obj[word] = [];
        }
        obj[word].push(emojiKey);
    });
    return obj;
}, {});

Object.entries(overrides).forEach(([word, emojis]) => {
    if (!emojiData[word]) {
        emojiData[word] = [];
    }
    emojiData[word].push(...emojis);
});

for (const word of Object.keys(emojiData)) {
    emojiData[word] = [...new Set(emojiData[word])].sort();
}

await fs.writeFile(
    `src/emojiMap.json`,
    JSON.stringify(emojiData, Object.keys(emojiData).sort(), 0)
);
