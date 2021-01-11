function solve(input) {
    let days = Number(input[0]);
    let daysWin = 0;
    let index = 1;
    let allMoney = 0;

    for(let i = 1; i <= days; i++){
        let sport = input[index++];
        let money = 0;
        let win = 0;
        let lose = 0;
        while(sport !== "Finish") {
            let status = input[index++];
            if(status === "win") {
                money += 20;
                win++;
            } else {
                lose++;
            }
            
            sport = input[index++];
        }
        if(win > lose) {
            money *= 1.1;
            daysWin++;
        }        
        allMoney += money;

    }
    if(daysWin > days / 2) {
        allMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    }

}
solve(["3",
       "darts",
       "lose",
       "handball",
       "lose",
       "judo",
       "win",
       "Finish",
       "snooker",
       "lose",
       "swimming",
       "lose",
       "squash",
       "lose",
       "table tennis",
       "win",
       "Finish",
       "volleyball",
       "win",
       "basketball",
       "win",
       "Finish"]);
