function solve(fruit, weekDay, num) {

    num = Number(num);
    let price = 0;
    if (weekDay === "Monday" || weekDay === "Tuesday" || weekDay === "Wednesday"
        || weekDay === "Thursday" || weekDay === "Friday") {
        switch (fruit) {
            case "banana":
                price = num * 2.50;
                console.log(price.toFixed(2));
                break;
            case "apple":
                price = num * 1.20;
                console.log(price.toFixed(2));
                break;
            case "orange":
                price = num * 0.85;
                console.log(price.toFixed(2));
                break;
            case "grapefruit":
                price = num * 1.45;
                console.log(price.toFixed(2));
                break;
            case "kiwi":
                price = num * 2.70;
                console.log(price.toFixed(2));
                break;
            case "pineapple":
                price = num * 5.50;
                console.log(price.toFixed(2));
                break;
            case "grapes":
                price = num * 3.85;
                console.log(price.toFixed(2));
                break;
            default:
                console.log("error");
                break;

        }

    } else if (weekDay === "Saturday" || weekDay === "Sunday") {
        switch (fruit) {
            case "banana":
                price = num * 2.70;
                console.log(price.toFixed(2));
                break;
            case "apple":
                price = num * 1.25;
                console.log(price.toFixed(2));
                break;
            case "orange":
                price = num * 0.90;
                console.log(price.toFixed(2));
                break;
            case "grapefruit":
                price = num * 1.60;
                console.log(price.toFixed(2));
                break;
            case "kiwi":
                price = num * 3.00;
                console.log(price.toFixed(2));
                break;
            case "pineapple":
                price = num * 5.60;
                console.log(price.toFixed(2));
                break;
            case "grapes":
                price = num * 4.20;
                console.log(price.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }

    } else {
        console.log("error");

    }

}
solve("orange",
    "Sunday",
    "3")

    ;
