main();

function main() {
    arr = [ 1, 2, 3, 4, 5 ];
    console.log(sumOfTripledEvens(arr));
}

function sumOfTripledEvens(arr) {
    return arr
    .filter((n) => { return n % 2 == 0; })
    .map((n) => { return n * 3; })
    .reduce((total, n) => { return total + n; }, 0);
}