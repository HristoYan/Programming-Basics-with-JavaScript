function result(record, distance, timeForMeter){
    record = Number(record);
    distance = Number(distance);
    timeForMeter = Number(timeForMeter);

    let newTime = distance * timeForMeter;
    let drag = Math.floor(distance / 15) * 12.5;
    newTime = newTime + drag;

    if (newTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${newTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(newTime - record).toFixed(2)} seconds slower.`);
    }
}
result("10464",
"1500",
"20")
;