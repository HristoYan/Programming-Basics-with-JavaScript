function solve(populationNow, years) {
    populationNow = Number(populationNow);
    years = Number(years)
    
    let total = populationNow;
    for (let i = 1; i <= years; i++) {
       
        let newBees = Math.floor(total / 10) * 2;
        total += newBees;
        
        if (i % 5 === 0) {
            let migration = Math.floor(total / 50) * 5;
            total -= migration
        }
        let deadBees = Math.floor(total / 20) * 2;
        total -= deadBees;
    }
    console.log(`Beehive population: ${Math.round(total)}`);
}
solve("100",
    "6");