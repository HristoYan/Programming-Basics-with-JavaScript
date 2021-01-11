function result(yagodaPrice, babaniKg, portoKg, maliniKg, yagodaKg) {

    let maliniKgPrice = Number(yagodaPrice) / 2;
    let portoKgPrice = maliniKgPrice * 0.6;
    
    let bananiKgPrice = Number(maliniKgPrice) * 0.2;
    let banani = Number(babaniKg) * bananiKgPrice;

    let porto = Number(portoKg) * portoKgPrice;

    let malini = Number(maliniKg) * maliniKgPrice;
    let yagodi = Number(yagodaPrice) * Number(yagodaKg);

   let total = banani + porto + malini + yagodi;
   
    console.log(total);
}

result("48", "10", "3.3", "6.5", "1.7");
result("63.5", "3.57", "6.35", "8.15", "2.5");