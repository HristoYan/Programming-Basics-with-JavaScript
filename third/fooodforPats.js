function solve(input) {

    let days = Number(input[0]);
    let index = 1;
    let allFood = Number(input[index++]);
    let dogFood = Number(input[index++]);
    let catFood = Number(input[index++]);
    let allDog = 0;
    let allCat = 0;
    let allEaten = 0;
    let biscuits = 0;
    for (let i = 1; i <= days; i++) {
        allEaten += dogFood + catFood;
        allDog += dogFood;
        allCat += catFood;
        let forBiscuits = dogFood + catFood;
        if (i % 3 === 0) {
            biscuits += Math.round(forBiscuits * 0.10);
        }
        dogFood = Number(input[index++]);
        catFood = Number(input[index++]);
    }
    let foodProcent = allEaten / allFood * 100;
    let dogProcent = allDog / allEaten * 100;
    let catProcent = allCat / allEaten * 100;
    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    console.log(`${foodProcent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogProcent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catProcent.toFixed(2)}% eaten from the cat.`);
}
solve(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"]);
