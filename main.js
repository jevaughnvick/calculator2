let operandOne = "";
let sign = "";
let operandTwo = "";
const buttons = document.querySelectorAll("button");
const display = {
    upper: document.querySelector("#upper"),
    lower: document.querySelector("#lower"),
};
let displayValue = "";
let result = "";
let operationStarted = false;
let resultShown = false;

buttons.forEach(button => button.addEventListener("click", e => {

    if(e.target.classList.contains("num-key")){

        if(!operationStarted){

            registerOperandOne(e);
        }else{

            registerOperandTwo(e);
        }
        display.upper.textContent += e.target.textContent;
    }

    if(e.target.classList.contains("op-key")){

        if(e.target.textContent === "÷" && operandOne == 0){

            alert("Hey!")
            location.reload();
        }

        operationStarted = true;

        if(operandTwo){

            evaluate();
            registerOperandOne(e);
            registerSign(e.target.textContent);
            display.upper.textContent = `${result}${sign}`;
        }else{

            if(!resultShown){
                
                registerSign(e.target.textContent);
                display.upper.textContent += e.target.textContent;
            }else{
    
                registerOperandOne(e);
                registerSign(e.target.textContent);
                display.upper.textContent = `${result}${sign}`
            }
        }
    }

    if(e.target.textContent === "="){

        if(operationStarted){
            evaluate();
            operationStarted = false;
        }
    }

    if(e.target.textContent === "CLR"){

        clear();
    }


}));

function registerOperandOne(e){

    if(!resultShown){
        operandOne += e.target.textContent;
    }else{
        operandOne = result;
    }
}

function registerOperandTwo(e){

    operandTwo += e.target.textContent;
}

function registerSign(operator){

    sign = operator;
}

function evaluate(){

    result = operate(sign, operandOne, operandTwo);

    if(!Number.isInteger(result)){

        const roundedResult = Math.round(result * 100) / 100;
        result = roundedResult;
        display.lower.textContent = result;
    }else{

        display.lower.textContent = result;
    }
    resultShown = true;
    operandOne = "";
    operandTwo = "";
    sign = "";
}

function clear(){

    operandOne = "";
    operandTwo = "";
    sign = "";
    display.upper.textContent = "";
    display.lower.textContent = 0;
    displayValue = "";
    operationStarted = false;
    resultShown = false;
}

function add(a, b){

    return Number(a) + Number(b);
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

function operate(operation, numOne, numTwo){

    switch(operation){

        case "+":
            return add(numOne, numTwo);
        
        case "-":
            return subtract(numOne, numTwo);

        case "×":
            return multiply(numOne, numTwo);
        
        case "÷":
            return divide(numOne, numTwo);
    }
}
