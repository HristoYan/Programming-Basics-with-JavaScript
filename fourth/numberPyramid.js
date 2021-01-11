function solve(input) {
    let num = Number(input[0]);
    let current = 1;
    let isBiger = false;
    let print = '';

    for (let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            if(current > num) {
                isBiger = true;
                break;
            }
            print += current + " ";
            current++;
        }
        console.log(print);
        print = "";
        if (isBiger) {
            break;
        }
    }
}
solve(["12"]);