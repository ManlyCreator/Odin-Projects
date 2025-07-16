// TODO: Debug why str.includes() does not pick up the "." symbol
// TODO: Keyboard Input

const screenText = document.querySelector(".screen-text")
const clearButton = document.querySelector(".other-buttons .clear")
const deleteButton = document.querySelector(".other-buttons .delete")
const buttons = document.querySelectorAll(".buttons button")

const operands = "0123456789."
const operators = "+-*/"

let justOperated = false
let error = false

let operator = ""
let operandStack = []
let operandPointer = 0

clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", backspace)

buttons.forEach((button) => {
    button.addEventListener("click", handleInput)
})

function handleInput(event) {
    if (error) clear()
    const command = event.target.innerText
    console.log(screenText.innerText.includes("."))
    if (command == "=" && operandStack.length == 2) {
        screenText.innerText = evaluate()
        operandPointer = 0
        
    } else if (operands.includes(command)) {
        if (command == "." && !screenText.innerText.includes(".")) {
            screenText.innerText += "."
        } else if (isNaN(Number(screenText.innerText)) || justOperated == true) {
            screenText.innerText = command
            justOperated = false
        } else 
            screenText.innerText += command
        operandStack[operandPointer] = Number(screenText.innerText)
    } else if (operators.includes(command) && operandStack.length > 0) {
        operandPointer++
        screenText.innerText = command
        if (operandStack.length == 2) screenText.innerText = evaluate(); operandPointer = 1
        operator = command
    }
    console.log("Screen Text:", screenText.innerText)
    console.log("Just Operated:", justOperated)
    console.log("Operand Stack:", operandStack)
    console.log("Operand Pointer:", operandPointer)
    console.log("Operator:", operator)
}

function evaluate() {
    const y = operandStack.pop()

    if (y == 0) {
        error = true
        return "No division by zero! >:("
    }

    const x = operandStack.pop()

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

    operandStack[0] = result
    justOperated = true
    return result
}

function clear() {
    operandStack = []
    operator = ""
    screenText.innerText = ""
    justOperated = false
    operandPointer = 0
    error = false
}

function backspace() {
    if (isNaN(screenText.innerText)) return 
    let textCopy = screenText.innerText.split("")
    textCopy.pop()
    textCopy = textCopy.join("")
    screenText.innerText = textCopy
    if (textCopy.length > 0) {
        operandStack[operandPointer] = Number(textCopy)
    } else {
        clear()
    }
}