function solve (input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let index = 2;
    let dogFood = Number(input[index++]);
    let catFood = Number(input[index++]);
    let dog = 0;
    let cat = 0;
    let day3Dog = 0;
    let day3Cat = 0;
    for (let i = 1; i <= days; i++) {
        dog += dogFood;
        cat += catFood;
        day3Dog = dogFood;
        day3Cat = catFood;
        dogFood = Number(input[index++]);
        catFood = Number(input[index++]);
    }
    
    let biscits = Math.round((day3Cat + day3Dog) * 0.1);
    let eatenFood = dog + cat;
    console.log(`Total eaten biscuits: ${biscits}gr.`);
    console.log(`${((eatenFood / food) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dog / eatenFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((cat / eatenFood) * 100).toFixed(2)}% eaten from the cat.`);
}


solve(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]);