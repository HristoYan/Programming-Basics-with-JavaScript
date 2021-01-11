function solve(flouer, flouerCount, season) {
    flouerCount = Number(flouerCount);
    let houney = 0;
    switch (flouer) {
        case "Sunflower":
            if (season === "Spring") {
                houney = flouerCount * 10;
            } else if (season === "Summer") {
                houney = flouerCount * 8;
                houney *= 1.1;
            } else if (season === "Autumn") {
                houney = flouerCount * 12;
                houney *= 0.95;
            }
            break;
        case "Daisy":
            if (season === "Spring") {
                houney = flouerCount * 12;
                houney *= 1.1;
            } else if (season === "Summer") {
                houney = flouerCount * 8;
                houney *= 1.1;
            } else if (season === "Autumn") {
                houney = flouerCount * 6;
                houney *= 0.95;
            }
            break;
        case "Lavender":
            if (season === "Spring") {
                houney = flouerCount * 12;
            } else if (season === "Summer") {
                houney = flouerCount * 8;
                houney *= 1.1;
            } else if (season === "Autumn") {
                houney = flouerCount * 6;
                houney *= 0.95;
            }
            break;
        case "Mint":
            if (season === "Spring") {
                houney = flouerCount * 10;
                houney *= 1.1;
            } else if (season === "Summer") {
                houney = flouerCount * 12;
                houney *= 1.1;
            } else if (season === "Autumn") {
                houney = flouerCount * 6;
                houney *= 0.95;
            }
            break;
    }
    console.log(`Total honey harvested: ${houney.toFixed(2)}`);
}
solve("Daisy",
    "15",
    "Spring");