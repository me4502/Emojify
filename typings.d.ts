declare module 'moji-translate' {
    export function getEmojiForWord(word: string): string;

    export function isMaybeAlreadyAnEmoji(word: string): boolean;
}

declare module 'emojilib' {
    export interface EmojiLibEntry {
        keywords: string[];
        char: string;
        category: string;
    }

    export const lib: {[key: string]: EmojiLibEntry};
}
