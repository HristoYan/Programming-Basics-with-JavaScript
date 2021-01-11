function solve (input) {
    let num = Number(input[0]);
    let nums = 1;

    while (nums <= num) {
         console.log(nums);
        nums = nums * 2 + 1;
       
    }
}
solve(["31"]);