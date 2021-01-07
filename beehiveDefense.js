function solve(beeCount, bearHealth, bearAttack) {
    beeCount = Number(beeCount);
    bearHealth = Number(bearHealth);
    bearAttack = Number(bearAttack);
    let beeLost = false;
    
    while (bearHealth > 0) {
        beeCount -= bearAttack;
        if (beeCount < 100) {
            beeLost = true;
            if (beeCount < 0) {
                beeCount = 0;
            }
            break;
        }
        bearHealth -= (beeCount * 5);

    }

    // taka mi dava samo 80/100;
    // while (beeCount > 100) {
    //     beeCount -= bearAttack;
    //     if (beeCount < 100) {
    //         if (beeCount <= 0) {
    //             beeCount = 0;
    //         }
    //         break;
    //     }
    //     bearHealth -= (beeCount * 5);
    //     if (bearHealth <= 0) {
    //         beeWon = true;
    //         break;
    //     }
        
    // }

    if (!beeLost) {
        console.log(`Beehive won! Bees left ${beeCount}.`);
    } else {
        console.log(`The bear stole the honey! Bees left ${beeCount}.`);
    }

}
solve("200",
    "10000",
    "300");