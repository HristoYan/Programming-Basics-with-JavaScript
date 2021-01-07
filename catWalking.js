function solve (minsDailyWalking, walkingCount, kalories) {
    minsDailyWalking = Number(minsDailyWalking);
    walkingCount = Number(walkingCount);
    kalories = Number(kalories);
    let totalWalking = minsDailyWalking * walkingCount;
    let totalKaloriesBurned = totalWalking * 5;

    if (totalKaloriesBurned >= (kalories / 2)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalKaloriesBurned}.`);
    } else {
        console.log (`No, the walk for your cat is not enough. Burned calories per day: ${totalKaloriesBurned}.`)
    }
}
solve (40,
    2,
    300
    );