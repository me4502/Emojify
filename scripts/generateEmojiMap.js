const { lib } = require('emojilib');
const fs = require('fs-extra');

async function main() {
    const emojiData = Object.keys(lib).reduce((obj, emojiKey) => {
        const emoji = lib[emojiKey];
        obj[emoji.char] = emoji.keywords.reduce((a, b) => {
            a.push(...b.split('-'));
            return a;
        }, []);
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
    }, {});

    await fs.writeFile(`src/emojiMap.json`, JSON.stringify(emojiData));
}

main().catch(e => console.error(e));
