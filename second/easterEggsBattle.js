function solve(input) {
    let firstPlayersEggs = Number(input[0]);
    let secondPlayersEggs = Number(input[1]);
    let index = 2;
    let status = input[index++];

    while (status !== "End of battle") {
        if (status === "one") {
            secondPlayersEggs--;
        } else {
            firstPlayersEggs--;
        }

        if (firstPlayersEggs === 0 || secondPlayersEggs === 0) {
            break;
        }
        status = input[index++];
    }

    if (status === "End of battle") {
        console.log(`Player one has ${firstPlayersEggs} eggs left.`);
        console.log(`Player two has ${secondPlayersEggs} eggs left.`);
    }

    if (firstPlayersEggs === 0) {
        console.log(`Player one is out of eggs. Player two has ${secondPlayersEggs} eggs left.`);
    } else if (secondPlayersEggs === 0) {
        console.log(`Player two is out of eggs. Player one has ${firstPlayersEggs} eggs left.`);
    }
}
solve(["6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"]);