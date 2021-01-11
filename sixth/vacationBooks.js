function result(pageNum, pagesPerHour, days) {
    let timePerBook = Number(pageNum) / Number(pagesPerHour);
    let huorsPerDay = timePerBook / Number(days);
    console.log(huorsPerDay);

}

result("212", "20", "2");
result("432", "15", "4");