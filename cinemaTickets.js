function solve(input) {
    let movie = input[0];
    
    let couter = 0;
    let index = 1;
    let standardCount = 0;
    let kidCount = 0;
    let studentCount = 0;
    let countAll = 0;
    let kidCountAll = 0;
    let standardCountAll = 0;
    let studentCountAll = 0;
    while (movie != "Finish") {
        let freeSits = Number(input[index++]);
        let type = input[index++];
        while (type != "End") {
            switch (type) {

                case "standard":
                    standardCount++;
                    couter++;
                    break;
                case "kid":
                    kidCount++;
                    couter++;
                    break;
                case "student":
                    studentCount++;
                    couter++;
                    break;

            }
            if (couter >= freeSits) {
                break;
            }
            type = input[index++];
        }

        console.log(`${movie} - ${((couter / freeSits) * 100).toFixed(2)}% full.`);
        countAll += couter;
        standardCountAll += standardCount;
        kidCountAll += kidCount;
        studentCountAll += studentCount;
        couter = 0;
        standardCount = 0;
        kidCount = 0;
        studentCount = 0; 
        movie = input[index++];
    }
    console.log(`Total tickets: ${countAll}`);
    console.log(`${((studentCountAll / countAll) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCountAll / countAll) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidCountAll / countAll) * 100).toFixed(2)}% kids tickets.`);
}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
