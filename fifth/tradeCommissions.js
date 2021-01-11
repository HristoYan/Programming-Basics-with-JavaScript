function solve(city, num) {

    num = Number(num);
    let commission = 0;
    switch (city) {
        case 'Sofia':
            if (num >= 0 && num <= 500) {
                commission = num * 0.05;
                console.log(commission.toFixed(2));
            } else if (num > 500 && num <= 1000) {
                commission = num * 0.07;
                console.log(commission.toFixed(2));
            } else if (num > 1000 && num <= 10000) {
                commission = num * 0.08;
                console.log(commission.toFixed(2));
            } else if (num > 10000) {
                commission = num * 0.12;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            
            break;
        case 'Varna':
            if (num >= 0 && num <= 500) {
                commission = num * 0.045;
                console.log(commission.toFixed(2));
            } else if (num > 500 && num <= 1000) {
                commission = num * 0.075;
                console.log(commission.toFixed(2));
            } else if (num > 1000 && num <= 10000) {
                commission = num * 0.10;
                console.log(commission.toFixed(2));
            } else if (num > 10000) {
                commission = num * 0.13;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            
            break;
        case 'Plovdiv':
            if (num >= 0 && num <= 500) {
                commission = num * 0.055;
                console.log(commission.toFixed(2));
            } else if (num > 500 && num <= 1000) {
                commission = num * 0.08;
                console.log(commission.toFixed(2));
            } else if (num > 1000 && num <= 10000) {
                commission = num * 0.12;
                console.log(commission.toFixed(2));
            } else if (num > 10000) {
                commission = num * 0.145;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            
            break;
        default:
            console.log("error");
            break;
    }

}
solve("Varna",
    "3874.50");