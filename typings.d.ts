declare module 'moji-translate' {
    export function getEmojiForWord(word: string): string;

    export function isMaybeAlreadyAnEmoji(word: string): boolean;
}

declare module 'emojilib' {
    type EmojiMap = { [key: string]: string[] };
    
    const lib: EmojiMap;
    export = lib;
}
