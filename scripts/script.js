let runningTotal = 0;
let numButton = document.querySelectorAll(`.numbers`);
let display = document.querySelector(`#display-area`)
let equals = document.querySelector(`#equals`);
let clear = document.querySelector(`#clear`);
console.log(numButton);

const numberElements = document.getElementsByClassName("numbers");
console.log(numberElements);

let displayedNumbers = display.textContent;
console.log(displayedNumbers);
Array.from(numberElements).forEach(function(element) {
    element.addEventListener(`click`, () => {
        let number = element.getAttribute(`id`);
        display.textContent += number;
    });
})

clear.addEventListener(`click`, () => display.textContent = ``)


let operatorElements = document.querySelectorAll(`.operators`)
let initialNumber;
let firstOperand
let secondOperand; 
let operator;
Array.from(operatorElements).forEach(function(element) {
    element.addEventListener(`click`, () => {
        
        operator = element.getAttribute(`id`);
        
        if (secondOperand === undefined) {
            
            
         
            intialNumber = Array.from(display.textContent);
            console.log(initialNumber);
            firstOperand = intialNumber.join(``);
            display.textContent = ``; 
        } else {
            
            intialNumber = Array.from(display.textContent);
            firstOperand = intialNumber.join(``);

            // if (display.textContent =! intialNumber) {
            //     display.textContent = ``;
            // }
            num1 = parseFloat(firstOperand);
            secondOperand = Array.from(display.textContent).join(``);
            num2 = parseFloat(secondOperand);
             display.textContent = operate(num1, operator, num2); 
            
        }
        
       
       
        
              
    })
})

// functions attached to operators that will display running sums
// i need to program the summing operators to use the operator function
// after two numbers are entered, that sum will then be stored and displayed
// then erased when another operator is clicked, wait for input,
// then adding the previous displayed value to just entered value.
// this means that the equals sign and operator signs need to do similar
// things. 

// first, i need to store my initial value in a variable,
// then i need to clear the display when an operator is pressed,
// allowing for the entering and storing of a second value
// after another operator is pressed OR if the equals is pressed,
// display sum and save as inital value / num1. 

equals.addEventListener(`click`, () => {
    num1 = parseFloat(firstOperand);
    secondOperand = Array.from(display.textContent).join(``);
    num2 = parseFloat(secondOperand);
    display.textContent = operate(num1, operator, num2);
    
})

// function displayNum() {
//     numButton.addEventListener(`click`, () => {
//         let number = this.getAttribute(`id`);
//         console.log(number);
//     });
// };

function multiply(a, b) {
    if (runningTotal ==! 0) {
        runningTotal = a;
        return a * b;
    }
    runningTotal = a * b;
    return runningTotal
};

function add(a, b) {
    runningTotal = a + b;
    return runningTotal;
};

function subtract(a, b) {
    runningTotal = a - b;
    return runningTotal;
};

function divide(a, b) {
    runningTotal = a / b;
    return runningTotal;
};

//write a function that takes two numbers and an operator.
//have that function call one of the other mathematical functions
// and then returns the answer.
function operate(num1, operator, num2) {
    if (operator == `*`) {
        return multiply(num1, num2)
    } else if (operator == `/`) {
        return divide(num1, num2)
    } else if (operator == `+`) {
        return add(num1, num2)
    } else if (operator == `-`) {
        return subtract(num1, num2)
    };
};