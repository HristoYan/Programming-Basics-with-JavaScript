function solve (leap, year) {

    leap = Number(leap);
    year = Number(year);

    for (let i = leap; i <= year; i += 4) {

        console.log(i);
    }
}
solve("1584", "1597");