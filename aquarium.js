function aqua(lenght, width, hight, procent) {

    let volume = Number(lenght) * Number(width) * Number(hight);
   
    let litters = volume / 1000;
    
    let total = litters - (litters * (Number(procent) * 0.01));
    console.log(total);

}
aqua("85", "75", "47", "17");
aqua("105", "77", "89", "18.5");