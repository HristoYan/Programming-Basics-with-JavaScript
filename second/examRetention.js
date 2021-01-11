function solve(students, seasons) {
    students = Number(students);
    seasons = Number(seasons);
    let studentsLeft1 = 0;
    let studentsLeft2 = 0;
    
    for(let i = 1; i <= seasons; i++) {
        studentsLeft1 = Math.ceil(students * 0.9);
        studentsLeft2 = Math.ceil(studentsLeft1 * 0.9);
        students = Math.ceil(studentsLeft2 * 0.8);

        if (i % 3 === 0) {
            students += Math.ceil(students * 0.15);
        } else {
            students += Math.ceil(students * 0.05);
        }
    }
    console.log(`Students: ${students}`);
}
solve("2000", "5");