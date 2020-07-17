import {lib} from 'emojilib';
import translate from 'moji-translate';
import * as emojiOverridesJson from './overrides.json';

const emojiOverrides = emojiOverridesJson as {[key: string]: string[]};

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
    multimojiChance = 0.1,
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
          const emojiIndex = Math.floor(Math.random() * emojis.length);
          const emoji = emojis[emojiIndex];
          emojis.splice(emojiIndex, 1);
          return emoji;
        }

        const emoji = grabEmoji();

        let insert = emoji;

        while (Math.random() < multimojiChance && emojis.length > 1) {
          insert += grabEmoji();
        }

        if (Math.random() < tripleChance && lastTriple > tripleCooldown) {
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

  if (word === 'a' || word === 'is' || word === 'it') {
    return foundEmojis;
  }

  if (translate.isMaybeAlreadyAnEmoji(word)) {
    return foundEmojis;
  }

  if (emojiOverrides[word]) {
    foundEmojis.push(...emojiOverrides[word]);
  }

  for (let emoji in lib) {
    if (
      word === emoji ||
      word + '_face' === emoji ||
      word === lib[emoji].char ||
      word === lib[emoji].category ||
      lib[emoji].keywords.includes(word)
    ) {
      if (word.length < 3 && lib[emoji].category === 'flags') {
        // Ignore tiny flags.
        continue;
      }
      foundEmojis.push(lib[emoji].char);
    }
  }

  return foundEmojis;
}

const emojiModFunctions: ((word: string) => string | undefined)[] = [
  (w) => w,
  (w) => (w.length > 1 ? `${w}s` : undefined),
  (w) => (w.length > 1 ? `${w}ing` : undefined),
  (w) => (w.length > 1 ? `${w}ed` : undefined),
  (w) => (w.endsWith("'s") ? w.substring(0, w.length - 2) : undefined),
  (w) => (w.endsWith("'") ? `${w.substring(0, w.length - 1)}g` : undefined),
  (w) =>
    w.length > 2 && w.endsWith('s') ? w.substring(0, w.length - 1) : undefined,
  (w) => (w.endsWith('ing') ? w.substring(0, w.length - 3) : undefined),
  (w) => (w.endsWith('ing') ? `${w.substring(0, w.length - 3)}e` : undefined),
  (w) =>
    w.length > 5 && w.endsWith('ing')
      ? w.substring(0, w.length - 4)
      : undefined,
];

function findEmojisForWord(word: string): string[] {
  const foundEmojis: string[] = [];

  // Try the word, and various permutations.
  word = word.trim().toLowerCase();

  // Split hyphenated words
  if (word.includes('-')) {
    word
      .split('-')
      .map(findEmojisForWord)
      .forEach((words) => foundEmojis.push(...words));
  }

  // Run it for each functor
  emojiModFunctions
    .map((func) => func(word))
    .filter((w) => w)
    .forEach((w) => foundEmojis.push(...findEmojisForWord0(w!)));

  return foundEmojis;
}
