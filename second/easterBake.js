function solve(input) {

    let eastreBreadNum = Number(input[0]);
    let index = 1;
    let shuger = Number(input[index++]);
    let flour = Number(input[index++]);
    let maxShuger = 0;
    let maxFlour = 0;
    let shugerSum = 0;
    let flourSum = 0;
    let shugerPack = 0;
    let flourPack = 0;
    for (let i = eastreBreadNum; i > 0; i--) {
        shugerSum += shuger;
        flourSum += flour;

        if (shuger > maxShuger) {
            maxShuger = shuger;
        }
        if (flour > maxFlour) {
            maxFlour = flour;
        }
        shuger = Number(input[index++]);
        flour = Number(input[index++]);
    }
    shugerPack = Math.ceil(shugerSum / 950);
    flourPack = Math.ceil(flourSum / 750);

    console.log(`Sugar: ${shugerPack}`);
    console.log(`Flour: ${flourPack}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxShuger} grams.`);

}
solve(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"]);