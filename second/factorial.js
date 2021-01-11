function solve (num) {
    num = Number(num);
    let total = 1;
    for (let i = 1; i <= num; i++) {
        
        total *= i;

    }
    console.log(total);
}
solve("4");