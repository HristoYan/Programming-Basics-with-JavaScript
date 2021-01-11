function solve(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let magiqueNum = Number(input[2]);
    let count = 0;
    let rightCombo = false;
    for(let i = firstNum; i <= lastNum; i++) {
        for(let j = firstNum; j <= lastNum; j++) {
            count++;
            if(i + j === magiqueNum) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magiqueNum})`);
                rightCombo = true;
                break;
            }
        }
        if(rightCombo) {
            break;
        }
    }
    if(!rightCombo) {
        console.log(`${count} combinations - neither equals ${magiqueNum}`)
    }

}
solve(["88", 
"888", 
"2000"]);
