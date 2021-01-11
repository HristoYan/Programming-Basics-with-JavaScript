function result(depSum, depPeriod, GLP) {
    let monthlyInterest = (Number(depSum) * Number(GLP)/100) / 12;
    
    let total = Number(depSum) + Number(depPeriod) * monthlyInterest;
    console.log(total);
}

result("200", "3", "5.7");
result("2350", "6", "7");