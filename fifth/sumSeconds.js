function solve(first, second, third) {

    first = Number(first);
    second = Number(second);
    third = Number(third);
    let min = 0;
    let sec = 0;
    totalTime = first + second + third;
    totalMin = Math.floor(totalTime / 60);
    totalSec = totalTime % 60;
    if (totalSec < 9) {
        console.log(`${totalMin}:0${totalSec}`);
    } else {
        console.log(`${totalMin}:${totalSec}`);
    }
}

solve("35", "45", "44");