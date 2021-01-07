function result(roomRent) {
let cakePrice = Number(roomRent) * 0.2;
let drinksPrice = cakePrice * 0.55;
let animatorPrice = Number(roomRent)/3;
let total = Number(roomRent) + drinksPrice + animatorPrice + cakePrice;
console.log(total);
}
result("2250");
result("3720");