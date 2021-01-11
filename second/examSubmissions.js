function solve(students, tasks) {
    students = Number(students);
    tasks = Number(tasks);
    let solveCount = Math.ceil(tasks * 2.8);
    solveCount *= students; 
    let extraSolve = Math.floor(tasks / 3) * students;
    let totalSolve = (solveCount + extraSolve);
    let memmory = Math.ceil(totalSolve / 10) * 5 ;
    console.log(`${memmory} KB needed`);
    console.log(`${totalSolve} submissions`);
}
solve("11", "7");