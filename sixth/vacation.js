function solve(input) {
    let vacationMoney = Number(input[0]);
    let moneyNow = Number(input[1]);
    let spendSave = "";
    let spend = 0;
    let money = 0;
    let index = 2;
    let days = 0;
    while (moneyNow < vacationMoney) {
        spendSave = input[index++];
        if (spendSave === "spend") {
            money = Number(input[index++]);
            if (money > moneyNow) {
                moneyNow = 0;
            } else {
            moneyNow -= money;
            }
            spend++;
            days++;
        } else {
            money = Number(input[index++]);
            moneyNow += money;
            days++;
            spend = 0;
        }
        if (spend >= 5) {
            break;
        }

    }
    if (moneyNow >= vacationMoney) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${days}`)
    }
}
solve(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
;