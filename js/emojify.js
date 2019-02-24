const translate = require('moji-translate');

export function emojify() {
    const textArea = document.querySelector("#text_input");
    const inputText = textArea.value;
    const lines = inputText.split(/\n/);
    const outputLines = [];
    const missingWords = [];
    for (const line of lines) {
        const words = line.split(" ");
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
                words[i] = word + " " + emoji + " ";
            } else {
                missingWords.push(cleanedWord);
            }
        }
        outputLines.push(words.join(" "));
    }
    const textOutput = document.querySelector("#text_output");
    textOutput.value = outputLines.join("\n");
    textOutput.hidden = false;
    M.textareaAutoResize(textOutput);

    console.log("The following words were missing emojis :( " + missingWords.join(","));
}

function cleanWord(word) {
    word = word.trim()
        .replace("?", "")
        .replace("!", "")
        .replace(",", "")
        .replace("\"", "")
        .replace(".", "");
    return word.toLowerCase();
}

function emojifyWord(word) {
    let emoji = translate.getEmojiForWord(word);
    if (!emoji) {
        // Do some custom overrides
        if (word.endsWith("'s") && translate.getEmojiForWord(word.substring(0, word.length - 2))) {
            return translate.getEmojiForWord(word.substring(0, word.length - 2));
        }
        if (word.endsWith("'") && translate.getEmojiForWord(word.substring(0, word.length - 1) + "g")) {
            return translate.getEmojiForWord(word.substring(0, word.length - 1) + "g");
        }

        // Specific words
        if (word === 'yell' || word === 'yelling') {
            return "🤬";
        }
        if (word === 'tell') {
            return "🗣";
        }
    }
    if (word === emoji) {
        return undefined;
    }
    return emoji;
}