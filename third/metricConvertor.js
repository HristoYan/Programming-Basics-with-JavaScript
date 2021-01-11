function solve(num, input, output) {

    num = Number(num);
    if (input === mm) {
        num = num * 1000;
    } else if (input === sm) {
        num = num * 100;
    }

    if (output === mm) {
        num = num / 1000;
    } else if (output === sm) {
        num = num / 100;
    }

    console.log(num);
}

solve("12", "mm", "m");