function result(dogs, animals) {

    let dogFoodPrice = Number(dogs) * 2.5;
    let animalsFoodPrice = Number(animals) * 4;
    let total = dogFoodPrice + animalsFoodPrice;
    console.log(`${total} lv.`);

}

result("5", "4");
result("13", "9");