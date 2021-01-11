function solve(period, tipe, net, mounths) {
    mounths = Number(mounths);
    let totlePrice = 0;
    let price = 0;switch (tipe) {
        case "Small":
            if (period === "one") {
                price = 9.98;

            } else {
                price = 8.58;

            }
            break;
        case "Middle":
            if (period === "one") {
                price = 18.99;

            } else {
                price = 17.09;

            }
            break;
        case "Large":
            if (period === "one") {
                price = 25.98;

            } else {
                price = 23.59;

            }
            break;
        case "ExtraLarge":
            if (period === "one") {
                price = 35.99;

            } else {
                price = 31.79;

            }
            break;

    }

    if (net === "yes") {
        if (price <= 10) {
            price += 5.50;
        } else if (price <= 30) {
            price += 4.35;
        } else if (price > 30) {
            price += 3.85;
        }
    }
    totlePrice = mounths * price;
    if (period === "two") {
        totlePrice *= 0.9625;
    }
    console.log(`${totlePrice.toFixed(2)} lv.`);
}
solve("two",
    "ExtraLarge",
    "yes",
    "20");