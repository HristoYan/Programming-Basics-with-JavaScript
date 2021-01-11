function solve(skomriaPrice, cacaPrice, palamudKg, safridKg, midiKg) {

    skomriaPrice = Number(skomriaPrice);
    cacaPrice = Number(cacaPrice);
    palamudKg = Number(palamudKg);
    safridKg = Number(safridKg);
    midiKg = Number(midiKg);

    let palamudtotalPrice = (skomriaPrice * 1.6) * palamudKg;
    let safridtotalPrice = (cacaPrice * 1.8) * safridKg;
    let midiTotalPrice = midiKg * 7.5;
    
    console.log((palamudtotalPrice + safridtotalPrice + midiTotalPrice).toFixed(2));

}
solve(7.79, 5.35, 9.3, 0, 0);    