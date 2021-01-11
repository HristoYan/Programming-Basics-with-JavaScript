function solve(hour, day) {
    hour = Number(hour);

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednsday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            default:
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }
}
solve("11",
    "Sunday")
    ;