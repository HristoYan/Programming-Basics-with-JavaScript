function solve(x, y, h) {

    let greenCube = Math.pow(x, 2) * 2;
    greenCube = greenCube - (1.2 * 2);
    let greenRect = x * y * 2;
    let door = Math.pow(1.5, 2);
    greenRect = greenRect - door * 2;
    let roofRect = x * y * 2;
    let roofTriangel = (x * h / 2) * 2;
    let totalWalls = greenCube + greenRect;
    let totalRoof = roofRect + roofTriangel;

    let red = totalRoof / 4.3;
    let green = totalWalls / 3.4;

    console.log(green.toFixed(2));
    console.log(red.toFixed(2));
}
solve(10.25, 15.45, 8.88);