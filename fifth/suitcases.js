function solve(input) {
    let trunkapacity = Number(input[0]);
    let index = 1;
    let counter = 0;
    isFull = false;
    let command = input[index++];
    while(command !== "End") {
        let volume = Number(command);
        
        
        if ((counter +1) % 3 === 0) {
            volume *= 1.1;
        }

        trunkapacity -= volume;
        if (trunkapacity < 0) {
            isFull = true;
            break;
        }
        counter++;
        command = input[index++];
    }

    if (isFull) {
        console.log("No more space!");
    } else {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${counter} suitcases loaded.`)
}
solve(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"]);