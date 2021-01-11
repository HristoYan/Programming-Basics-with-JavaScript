function solve(input) {
    let goal = 10000;
    let index = 0;
    let steps = 0;
    let sum = 0;
    while (sum < goal) {
        steps = input[index++];
        if (steps === "Going home") {
            steps = Number(input[index++]);
            sum += steps;
            break;
        }
        steps = Number(steps);
        sum += steps;
        
        
    }
    if (sum >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${sum - goal} steps over the goal!`);
    } else {
        console.log(`${goal - sum} more steps to reach goal.`);
    }

}
solve(["1500",
"300",
"2500",
"3000",
"Going home",
"200"]);