import 'babel-polyfill'

const translate = require('moji-translate');

export function emojify() {
    const textArea = document.querySelector("#text_input");
    const inputText = textArea.value;
    const words = inputText.split(" ");
    let lastTriple = 1000;
    for (const i in words) {
        const word = words[i];
        let emoji = translate.getEmojiForWord(cleanWord(word));
        if (emoji) {
            if (Math.random() > 0.95 && lastTriple > 3) {
                emoji = emoji + emoji + emoji;
                lastTriple = 0;
            } else {
                lastTriple ++;
            }
            words[i] = word + " " + emoji + " ";
        }
    }
    const textOutput = document.querySelector("#text_output");
    textOutput.value = words.join(" ");
    textOutput.hidden = false;
    M.textareaAutoResize(textOutput);
}

function cleanWord(word) {
    return word.trim()
        .replace("?", "")
        .replace("!", "")
        .replace(".", "");
}