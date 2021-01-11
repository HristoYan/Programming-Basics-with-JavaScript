function solve(degrees) {

    degrees = Number(degrees);

    if (degrees <= 35 && degrees > 26) {
        console.log("Hot");
    } else if (degrees <= 26 && degrees > 20) {
        console.log("Warm");
    } else if (degrees <= 20 && degrees >= 15){
        console.log("Mild");
    } else if (degrees < 15 && degrees >= 12) {
        console.log("Cool");
    } else if (degrees < 12 && degrees >= 5) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}
solve(0);