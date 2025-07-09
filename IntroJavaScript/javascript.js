// TODO: Give the button functionality
console.log("Hello, world!");
console.log("This is being run from an external script");

const n = 5;
const pi = 3.1415926535;
console.log(n)
console.log(typeof n);
console.log("PI (unfixed):", pi);
console.log("PI (fixed):", pi.toFixed(2));

let button = document.querySelector("button");
let p      = document.querySelector("p")
button.addEventListener("click", updateButton)

function updateButton() {
    if (button.textContent == "Stop Machine") {
        button.textContent = "Start Machine";
        p.textContent = "The machine is stopped";
    } else {
        button.textContent = "Stop Machine";
        p.textContent = "The machine is started";
    }
}