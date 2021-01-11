function solve(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalMoney = 0;
    for(let i = 1; i <= days; i++) {
        let money = 0;
        for(let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                money += 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                money += 1.25;
            } else {
                money += 1;
            }
        }
        console.log(`Day: ${i} - ${money.toFixed(2)} leva`);
        totalMoney += money;
    }
    console.log(`Total: ${totalMoney.toFixed(2)} leva`);
}
solve(['2', '5']);