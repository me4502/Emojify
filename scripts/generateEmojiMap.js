const lib = require('emojilib');
const fs = require('fs-extra');
const data = require('unicode-emoji-json');

async function main() {
    const emojiData = Object.keys(data).reduce((obj, emojiKey) => {
        const emoji = data[emojiKey];
        emoji.keywords = lib[emojiKey];
        obj[emojiKey] = emoji.keywords.reduce((a, b) => {
            a.push(...b.split('-'));
            return a;
        }, []);
        obj[emojiKey].push(emoji.slug);
        obj[emojiKey].push(...emoji.slug.split('_'));
        obj[emojiKey] = [...new Set(obj[emojiKey].filter(
            w =>
                w !== 'and' &&
                w !== 'in' &&
                w !== 'with' &&
                w !== 'of' &&
                w !== 'a'
        ))];
        return obj;
    }, {});

    await fs.writeFile(`src/emojiMap.json`, JSON.stringify(emojiData));
}

main().catch(e => console.error(e));
