function result(name, projectsNum) {

    let hours = Number(projectsNum) * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projectsNum} project/s.`)
}

result("George", "4");
result("Sanya", "9");