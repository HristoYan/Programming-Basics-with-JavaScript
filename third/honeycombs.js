function solve(beeCount, flouerCount) {
    beeCount = Number(beeCount);
    flouerCount = Number(flouerCount);
    let allhoney = beeCount * flouerCount * 0.21;
    let honeyCombs = Math.floor(allhoney / 100);
    let leftOvers = allhoney - (honeyCombs * 100);
    console.log(`${honeyCombs} honeycombs filled.`);
    console.log(`${leftOvers.toFixed(2)} grams of honey left.`);
}
solve("11",
    "120");