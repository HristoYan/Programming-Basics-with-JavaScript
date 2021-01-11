function solve(studentsCount, tasksCount, trainerEnergy) {
    studentsCount = Number(studentsCount);
    tasksCount = Number(tasksCount);
    trainerEnergy = Number(trainerEnergy);
    let tranerWin = false;
    let problems = 0;
    let questionsAsked = 0;
    while (trainerEnergy > 0) {
        trainerEnergy += tasksCount * 2;
        studentsCount -= tasksCount;
        trainerEnergy -= studentsCount * 2 * 3;
        problems += tasksCount;
        questionsAsked += studentsCount * 2;

        if (studentsCount < 10) {
            tranerWin = true;
            break;
        } else {
            studentsCount += Math.floor(studentsCount / 10);
        }

    }

    if (tranerWin) {
        console.log("The students are too few!");
        console.log(`Problems solved: ${problems}`);
    } else {
        console.log("The trainer is too tired!");
        console.log(`Questions asked: ${questionsAsked}`);
    }
}
solve("20", "1", "100");