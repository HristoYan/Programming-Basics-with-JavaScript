function solve(input) {
    let index = 3;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let higth = Number(input[2]);
    let volume = width * length * higth;
    let sum = 0;
    let num = input[index++];
    while (sum <= volume) {
        if (num === "Done") {

            break;
        }
        num = Number(num);
        sum += num;
        num = input[index++];
    }
    if (sum < volume) {
        console.log(`${volume - sum} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${sum - volume} Cubic meters more.`);
    }
}
solve(["10",
"1",
"2",
"4",
"6",
"Done"]);