// TODO: Evaluate equation in the order that it is input
// TODO: Incorporate an algorithm to apply PEMDAS to the equation

const screenText = document.querySelector(".screen-text")
const buttons = document.querySelectorAll(".buttons button")

const operands = "0123456789"
const operators = "+-*/="

let operandStack = []
let operatorStack = []

buttons.forEach((button) => {
    button.addEventListener("click", handleInput)
})

function handleInput(event) {
    const command = event.target.innerText
    if (command == "=") {
        if (operands.includes(screenText.innerText))
            operandStack.push(Number(screenText.innerText))
        console.log(operandStack)
        console.log(operatorStack)
    } else if (operands.includes(command)) {
        if (operators.includes(screenText.innerText))
            screenText.innerText = command
        else
            screenText.innerText += command
    // TODO: Evaluate the expression if operand stack is full to avoid errors
    } else if (operators.includes(command) && operandStack.length < 1) {
        operandStack.push(Number(screenText.innerText))
        operatorStack.push(command)
        screenText.innerText = command
    }
}

function evaluate() {
    // TODO: Evaluate expression using the top-two operators on the stack with the top operand, then clear both stacks
}