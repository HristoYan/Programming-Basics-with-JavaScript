function solve(text) {

    let length = text.length;
    let space = 1;
    for (let i = 0; i < length; i++) {
        if (text[i] === " ") {
            space++;
        }
    }
    if (space > 10) {
        console.log(`The message is too long to be send!Has ${space} words.`);
    } else {
        console.log("The message was send successfully!")
    }
}
solve("This message has ten words and you can send it! Or if you will you can not!");