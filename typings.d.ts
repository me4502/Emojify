declare module 'emojilib' {
    type EmojiMap = { [key: string]: string[] };

    const lib: EmojiMap;
    export = lib;
}
