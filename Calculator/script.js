// TODO: Backspace
// TODO: Floats
// TODO: Keyboard Input

const screenText = document.querySelector(".screen-text")
const clearButton = document.querySelector(".other-buttons .clear")
const deleteButton = document.querySelector(".other-buttons .delete")
const buttons = document.querySelectorAll(".buttons button")

const operands = "0123456789"
const operators = "+-*/="

let justOperated = false

let operandStack = []
let operatorStack = []

clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", backspace)

buttons.forEach((button) => {
    button.addEventListener("click", handleInput)
})

function handleInput(event) {
    const command = event.target.innerText
    console.log("Operand Stack:", operandStack)
    console.log("Operator Stack:", operatorStack)
    if (command == "=") {
        if (operands.includes(screenText.innerText))
            operandStack.push(Number(screenText.innerText))
        screenText.innerText = evaluate()
    } else if (operands.includes(command)) {
        if (!operands.includes(screenText.innerText))
            screenText.innerText = command
        else
            screenText.innerText += command
    } else if (operators.includes(command)) {
        if (!justOperated) operandStack.push(Number(screenText.innerText))
        justOperated = false
        if (operandStack.length == 2) {
            screenText.innerText = evaluate()
        } else {
            operatorStack.push(command)
            screenText.innerText = command
        }
    }
}

function evaluate() {
    const y = operandStack.pop()
    const x = operandStack.pop()
    const operator = operatorStack.pop()
    console.log("X:", x)
    console.log("Y:", y)
    console.log("Operator:", operator)
    let result
    switch (operator) {
        case "+":
            result = x + y
            break
        case "-":
            result = x - y
            break
        case "*":
            result = x * y
            break
        case "/":
            result = x / y
            break
    }
    if (result != undefined && result != NaN)
        operandStack.push(result)
    justOperated = true
    return result
}

function clear() {
    operandStack = []
    operatorStack = []
    screenText.innerText = ""
    justOperated = false
}

function backspace() {

}