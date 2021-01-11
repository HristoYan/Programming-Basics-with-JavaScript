function solve(priceKgVegi, priceKgFruits, kgVegi, kgFruits) {
    let incomeVegi = priceKgVegi * kgVegi;
    let incomeFruits = priceKgFruits * kgFruits;
    let total = incomeFruits + incomeVegi;
    let totalEu = total / 1.94;
    console.log(totalEu);
}
solve(0.194, 19.4, 10, 10);