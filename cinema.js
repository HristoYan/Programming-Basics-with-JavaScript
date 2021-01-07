function solve(projectionKind, rolls, colones) {

    rolls = Number(rolls);
    colones = Number(colones);
    let income = 0;
    switch (projectionKind) {
        case 'Premiere':
            income = rolls * colones * 12;
            break;
        case 'Normal':
            income = rolls * colones * 7.5;
            break;
        case 'Discount':
            income = rolls * colones * 5;
            break;
    }
    console.log(`${income.toFixed(2)} leva `)
}
solve("Normal",
"21",
"13")
;
