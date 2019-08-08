import translate from 'moji-translate';

export function emojify(inputText: string): string {
  const lines = inputText.split(/\n/);
  const outputLines = [];
  const missingWords = [];
  for (const line of lines) {
    const words = line.split(' ');
    let lastTriple = 1000;
    for (const i in words) {
      const word = words[i];
      const cleanedWord = cleanWord(word);
      let emoji = emojifyWord(cleanedWord);
      if (emoji) {
        if (Math.random() > 0.95 && lastTriple > 3) {
          emoji = emoji + emoji + emoji;
          lastTriple = 0;
        } else {
          lastTriple++;
        }
        words[i] = word + ' ' + emoji + ' ';
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

function emojifyWord(word: string): string | undefined {
  let emoji = translate.getEmojiForWord(word);
  if (!emoji) {
    // Do some custom overrides
    if (word.endsWith("'s")) {
      const e = translate.getEmojiForWord(word.substring(0, word.length - 2));
      if (e) {
        return e;
      }
    }
    if (word.endsWith("'")) {
      const e = translate.getEmojiForWord(
        word.substring(0, word.length - 1) + 'g'
      );
      if (e) {
        return e;
      }
    }
    if (word.includes('-')) {
      let modifiedWord = word;
      while (modifiedWord.includes('-')) {
        modifiedWord = modifiedWord.split('-', 2)[1];
        const e = translate.getEmojiForWord(modifiedWord);
        if (e) {
          return e;
        }
      }
    }

    // Specific words
    if (word === 'yell' || word === 'yelling') {
      return '🤬';
    }
    if (word === 'tell') {
      return '🗣';
    }
  }
  if (word === emoji) {
    return undefined;
  }
  return emoji;
}
