function solve(days, room, grade) {

    let nights = Number(days) - 1;
    let price = 0;
    switch (room) {
        case "room for one person":
        
            price = nights * 18.00;
            
        break;
        case "apartment":
            if (days < 10) {
                price = (nights * 25.00) * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = (nights * 25.00) * 0.65;
            } else {
                price = (nights * 25) * 0.50;
            }   

        break;
        case "president apartment":
            if (days < 10) {
                price = (nights * 35.00) * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = (nights * 35.00) * 0.85;
            } else {
                price = (nights * 35.00) * 0.80;
            }   
        break;
    }
    if (grade === "positive") {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));
}
solve("2",
"apartment",
"positive")

;