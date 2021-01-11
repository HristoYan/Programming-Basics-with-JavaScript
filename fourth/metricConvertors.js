function result(num, input, output) {
num = Number(num);


if (input === "mm") {
    num = num / 1000;
} else if (input === "cm") {
    num = num / 100;
} else {
    num = num;
}

if (output === "mm") {
    num = num * 1000;
} else if (output === "cm") {
    num = num * 100;
} else {
    num = num;
}
console.log(num.toFixed(3))

}

result("45", "cm", "mm");