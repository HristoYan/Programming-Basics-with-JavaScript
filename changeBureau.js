function solve(bitcoins, china, commission) {
    bitcoins = Number(bitcoins);
    china = Number(china);
    commission = Number(commission);
    let commPros = commission / 100;
    let bitcoinsToLv = bitcoins * 1168;
    let chinaToUSD = china * 0.15;
    let chinaToLv = chinaToUSD * 1.76;
    let totalEU = (bitcoinsToLv + chinaToLv) / 1.95;
    let total = totalEU - (totalEU * commPros);
    console.log(total.toFixed(2));
}
solve(7,
    50200.12,
    3);