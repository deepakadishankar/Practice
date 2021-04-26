let sentence = "tnheouteohu"

let counter = 0;

let wordStarted = false;
for (let index = sentence.length - 1; index >= 0; index--) {
    let letter = sentence[index]
    if (!wordStarted) {
        if (letter !== " ") {
            wordStarted = true
        }
    } 

    if (wordStarted) {
        if(letter === " ") break
        else counter++
    }
}

console.log(counter);
