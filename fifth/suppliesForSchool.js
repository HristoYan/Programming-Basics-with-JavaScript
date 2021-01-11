function solve (pens, markers, cleaner, discount) {
    pens = Number(pens);
    markers = Number(markers);
    cleaner = Number(cleaner);
    discount = Number(discount);
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let cleanerPrice = cleaner * 1.20;
    let totalPrice = pensPrice + markersPrice + cleanerPrice;
    let discountValue = discount / 100;
    let total = totalPrice - (totalPrice * discountValue);
    console.log(total.toFixed(3));
}
solve(4,
    2,
    5,
    13);