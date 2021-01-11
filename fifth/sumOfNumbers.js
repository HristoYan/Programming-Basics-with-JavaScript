function solve(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + Number(num[i]);

    }
    console.log(`The sum of the digits is:${sum}`);
}
solve("564891");