function solve (input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let index = 2;
    let cake = width * length;
    let isOver = false;
    let peace = input[index++];
    let sum = 0;
    while (peace !== "STOP") {
        peace = Number(peace);
        sum += peace;
        if (sum > cake) {
            isOver = true;
            break;
        }
        peace = input[index++];
    }

    if (isOver) {
        console.log(`No more cake left! You need ${sum - cake} pieces more.`);
    } else {
        console.log(`${cake - sum} pieces are left.`);
    }
}
solve(["10",
"2",
"2",
"4",
"6",
"STOP"]);