function solve(animal) {

    switch (animal) {
        case "dog":
        case "camel":
        case "sheep":
        case "ass":
            console.log("mammal");
            break;
        case "crocodile":
        case "snake":
        case "tortoise":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}
solve("cat");