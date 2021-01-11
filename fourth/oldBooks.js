function solve(input) {

    let theBook = input[0];
    let index = 1;
    let count = 0;
    let book = input[index++];
    let compere = false;
    while (book !== "No More Books") {

        if (book === theBook) {
            compere = true;
            break;
        }
        count++;
        book = input[index++];
    }
    if (compere) {
        console.log(`You checked ${count} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${count} books.`);
    }
}
solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);