function solve(input) {
    let eggs = Number(input[0]);
    let index = 1;
    let status = input[index++];
    let notEnough = false;
    let soldEggs = 0;
    while (status !== "Close") {
        let num = Number(input[index++]);
        if (status === "Buy") {
            soldEggs += num;
            if (num > eggs) {
                notEnough = true;
                break;                
            }
            eggs -= num;
        } else {
            eggs += num;
        }

        status = input[index++];
    }

    if (notEnough) {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${eggs}.`);
    } 
    if (status === "Close") {
        console.log("Store is closed!");
        console.log(`${soldEggs} eggs sold.`);
    }
}
solve(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"]);