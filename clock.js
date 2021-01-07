function solve() {
    let hoursEnd = 23;
    let minutesEnd = 59;

    for (let i = 0; i <= hoursEnd; i++) {
        for (let j = 0; j <=minutesEnd; j++) {
            console.log(`${i}:${j}`);
        }
    }
}
solve();