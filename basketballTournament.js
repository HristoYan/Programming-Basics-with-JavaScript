function solve(input) {

    let index = 0;
    let tournamentName = input[index++];
    let allMatches = 0;
    let desiWin = 0;
    let desiLost = 0;
    while (tournamentName !== "End of tournaments") {
        let matchNum = Number(input[index++]);
        allMatches += matchNum;
        for(let i = 1; i <= matchNum; i++) {
            let desisTeam = Number(input[index++]);
            let otherTeam = Number(input[index++]);

            if (desisTeam > otherTeam) {
                desiWin++;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${desisTeam - otherTeam} points.`);
            } else {
                desiLost++;
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${otherTeam - desisTeam} points.`);
            }
        }

        tournamentName = input[index++];
    }
    console.log(`${(desiWin / allMatches * 100).toFixed(2)}% matches win`);
    console.log(`${(desiLost / allMatches * 100).toFixed(2)}% matches lost`);
}
// solve(["Dunkers",
//     "2",
//     "75",
//     "65",
//     "56",
//     "73",
//     "Fire Girls",
//     "3", 
//     "67",
//     "34",
//     "83",
//     "98",
//     "66",
//     "45",
//     "End of tournaments"]);
solve(['Ballers',
    '3',
    '87',
    '63',
    '56',
    '65',
    '75',
    '64',
    'Sharks',
    '4',
    '64',
    '76',
    '65',
    '86',
    '68',
    '99',
    '45',
    '78',
    'End of tournaments']);