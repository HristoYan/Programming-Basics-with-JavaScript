function result(hour, min) {

    hour = Number(hour);
    min = Number(min);
    let mins = min + 15;
    if (mins > 59) {
        hour = hour + 1;
        mins = min - 45;
    }

    if (hour > 23) {
        hour = 0;
    }

    if (mins < 10) {
        console.log(`${hour}:0${mins}`);
    } else {
        console.log(`${hour}:${mins}`);
    }
}
result("12", "49");