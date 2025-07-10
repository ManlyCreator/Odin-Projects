main();

function main() {
    console.log(add7(8));
    console.log(multiply(8, 16));
    console.log(captialize("rami"));
    console.log(lastLetter("abcd"));
    let n = parseInt(prompt("Enter a number: "));
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0)
            console.log("Fizz");
        if (i % 5 == 0)
            console.log("Buzz");
        if (i % 3 != 0 && i % 5 != 0)
            console.log(i);
    }
}

function add7(n) {
    return n + 7;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function captialize(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1);
}

function lastLetter(s) {
    return s[s.length - 1];
}