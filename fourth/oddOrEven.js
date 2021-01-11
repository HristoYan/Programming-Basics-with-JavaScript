function result(num) {
    num = Number(num);

    if (num % 2 === 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

result("1024");