function solve(input) {
    let tabsCunt = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i < tabsCunt; i++) {
        
        let tab = input.shift();
        if (tab === "Facebook") {
            salary -= 150;
        } else if (tab === "Instagram" ) {
            salary -= 100;
        } else if (tab === "Reddit") {
            salary -= 50;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}
solve(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);