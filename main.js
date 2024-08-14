const operandOne = 0;
const operator = "";
const operandTwo = 0;

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


console.log(operate("/", 10, 5))