function solve(product, city, num) {

    num = Number(num);

    if (city === 'Sofia') {
        if (product === 'coffee') {
            console.log(num * 0.5);
        } else if (product === 'water') {
            console.log(num * 0.8);
        } else if (product === 'beer') {
            console.log(num * 1.20);
        } else if (product === 'sweets') {
            console.log(num * 1.45);
        } else if (product === 'peanuts') {
            console.log(num * 1.6);
        }
    } else if (city === 'Plovdiv') {
        if (product === 'coffee') {
            console.log(num * 0.4);
        } else if (product === 'water') {
            console.log(num * 0.7);
        } else if (product === 'beer') {
            console.log(num * 1.15);
        } else if (product === 'sweets') {
            console.log(num * 1.3);
        } else if (product === 'peanuts') {
            console.log(num * 1.5);
        }
    } else if (city === 'Varna') {
        if (product === 'coffee') {
            console.log(num * 0.45);
        } else if (product === 'water') {
            console.log(num * 0.7);
        } else if (product === 'beer') {
            console.log(num * 1.10);
        } else if (product === 'sweets') {
            console.log(num * 1.35);
        } else if (product === 'peanuts') {
            console.log(num * 1.55);
        }

    }
}
    solve("beer",
    "Sofia",
    "6");
