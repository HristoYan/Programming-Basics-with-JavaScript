function solve(examHours, examMins, arrivalHours, arrivalMins) {

    examHours = Number(examHours);
    examMins = Number(examMins);
    arrivalHours = Number(arrivalHours);
    arrivalMins = Number(arrivalMins);
    let examTime = examHours * 60 + examMins;
    let arrivalTime = arrivalHours * 60 + arrivalMins;
    
    if (examTime >= arrivalTime) {
        if ((examTime - arrivalTime) > 30) {
            console.log("Early");
            if ((examTime - arrivalTime) >= 60) {
                if (((examTime - arrivalTime) % 60) < 10) {

                    console.log(`${Math.floor((examTime - arrivalTime) / 60)}:0${(examTime - arrivalTime) % 60} hours before the start`);
                } else {
                    console.log(`${Math.floor((examTime - arrivalTime) / 60)}:${(examTime - arrivalTime) % 60} hours before the start`);
                }
            } else {
                console.log(`${(examTime - arrivalTime) % 60} minutes before the start`);
            }

        } else {
            console.log("On time");
            if (examTime != arrivalTime) {
                console.log(`${examTime - arrivalTime} minutes before the start`);
            }
        }

    } else {
        console.log("Late");
        if ((arrivalTime - examTime) >= 60) {
            if (((arrivalTime - examTime) % 60) < 10) {

                console.log(`${Math.floor((arrivalTime - examTime) / 60)}:0${(arrivalTime - examTime) % 60} hours after the start`);
            } else {
                console.log(`${Math.floor((arrivalTime - examTime) / 60)}:${(arrivalTime - examTime) % 60} hours after the start`);
            }
        } else {
            console.log(`${(arrivalTime - examTime) % 60} minutes after the start`);
        }
    }

}
solve("9",
"00",
"10",
"30")
;