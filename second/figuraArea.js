function result(fig, num1, num2) {
    let area;
    num1 = Number(num1);
    num2 = Number(num2);
    if (fig === "square") {
        area = num1 * num1;
    } else if (fig === "rectangle") {
        area = num1 * num2;
    } else if (fig === "circle") {
        area = num1 * num1 * Math.PI;
    } else {
        area = (num1 * num2) / 2;
    }
    console.log(area.toFixed(3));

}

result("triangle",
"4.5",
"20");
