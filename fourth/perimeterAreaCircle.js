function solve(r) {

    let perimeter = 2 * r * Math.PI;
    let area = Math.PI * Math.pow(r, 2);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}
solve(3);