function result(money, grade, minMoney) {

    money = Number(money);
    grade = Number(grade);
    minMoney = Number(minMoney);
    let scholarship = 0;
    let socialScholarship = 0;

    if (money < minMoney && (grade >= 4.5)) {

        socialScholarship = minMoney * 0.35;
        if (grade >= 5.5) {
            scholarship = grade * 25;
            if (scholarship > socialScholarship) {
                console.log(`You get a scholarship for excellent results ${Math.floor(scholarship)} BGN`);
            }
        } else if (socialScholarship > scholarship) {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        } else {
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarship)} BGN`);
        }

    } else {
        if (grade >= 5.5) {
            scholarship = grade * 25;
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarship)} BGN`);
        } else {
            console.log("You cannot get a scholarship!");
        }
    }


}
result("300.00",
    "6.00",
    "350.00");
