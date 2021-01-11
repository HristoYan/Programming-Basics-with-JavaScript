function solve(w, h) {

    w = Number(w);
    h = Number(h);
    let wSm = w * 100;
    let hSm = h * 100;
    let deskW = 120;
    let deskH = 70;
    let roomDesksW = Math.floor(wSm / deskW);
    let roomDesksH = Math.floor((hSm-100) / deskH);
    let totalDesks = roomDesksW * roomDesksH - 3;
    console.log(totalDesks);
}
solve(8.4, 5.2);