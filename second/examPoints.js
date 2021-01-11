function solve(tasks, points, tipe) {

    points = Number(points);
    let num = 0;

    switch (tasks) {
        case "1":
        if (tipe === "Basics") {
            num = points * 0.08;
            num *= 0.8;
        } else if (tipe === "Fundamentals") {
            num = points * 0.11;
        } else {
            num = points * 0.14;
            num *= 1.2;
        }
            break;
        case "2":
            if (tipe === "Basics") {
                num = points * 0.09;
            } else if (tipe === "Fundamentals") {
                num = points * 0.11;
            } else {
                num = points * 0.14;
                num *= 1.2;
            }
            break;
        case "3":
            if (tipe === "Basics") {
                num = points * 0.09;
            } else if (tipe === "Fundamentals") {
                num = points * 0.12;
            } else {
                num = points * 0.15;
                num *= 1.2;
            }
            break;
        case "4":
            if (tipe === "Basics") {
                num = points * 0.10;
            } else if (tipe === "Fundamentals") {
                num = points * 0.13;
            } else {
                num = points * 0.16;
                num *= 1.2;
            }
            break;
    }
    console.log(`Total points: ${num.toFixed(2)}`);
}
solve("1", "100", "Basics");