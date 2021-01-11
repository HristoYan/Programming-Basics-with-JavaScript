function solve (recordInSec, distanceInM, timeForMeter) {
    recordInSec = Number(recordInSec);
    distanceInM = Number(distanceInM);
    timeForMeter = Number(timeForMeter);

    let deley = Math.floor(distanceInM / 50) * 30;
    let time = (distanceInM * timeForMeter) + deley;
    
    if (time < recordInSec) {
        console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(time - recordInSec).toFixed(2)} seconds slower.`);
    }
}
solve(1377,
    389,
    3);