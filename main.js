const operandOne = 0;
const operator = "";
const operandTwo = 0;
const buttons = document.querySelectorAll("button");
const display = {
    upper: document.querySelector("#upper"),
    lower: document.querySelector("#lower"),
};
let displayValue = "";


buttons.forEach(button => button.addEventListener("click", e => {

    if(e.target.textContent !== "CLEAR" && e.target.textContent !== "="){

        display.upper.textContent += e.target.textContent;
        displayValue += e.target.textContent;
    }
}));

function add(a, b){

    return a + b;
}

function subtract(a, b){

    return a - b;
}

function multiply(a, b){

    return a * b;
}

function divide(a, b){

    return a / b;
}

function operate(sign, numOne, numTwo){

    switch(sign){

        case "+":
            return add(numOne, numTwo);
        
        case "-":
            return subtract(numOne, numTwo);

        case "*":
            return multiply(numOne, numTwo);
        
        case "/":
            return divide(numOne, numTwo);
    }
}

