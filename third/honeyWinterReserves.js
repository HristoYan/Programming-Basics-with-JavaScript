function solve(input) {
    let honeyNeeded = Number(input[0]);
    let index = 1;
    let inputLine = input[index++];
    let totalHoney = 0;
    while (inputLine !== "Winter has come") {
        let beeName = inputLine;
        let honeyForSix = 0
        for (let i = 1; i <= 6; i++) {
            let honeyIncome = Number(input[index++]);
            honeyForSix += honeyIncome;
        }
        if (honeyForSix < 0) {
            console.log(`${beeName} was banished for gluttony`);
        }
        totalHoney += honeyForSix;
        if (totalHoney >= honeyNeeded) {
            break;
        }
        inputLine = input[index++];
    }
    if (honeyNeeded <= totalHoney) {
        console.log(`Well done! Honey surplus ${(totalHoney - honeyNeeded).toFixed(2)}.`);
    } else {
        console.log(`Hard Winter! Honey needed ${(honeyNeeded - totalHoney).toFixed(2)}.`);
    }
}
 solve(["1000",
     "Maya",
     "50",
     "10.5",
     "19.5",
     "30",
     "100",
     "100",
     "Winter has come"]);
