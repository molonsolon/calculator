let runningTotal = 0;
let numButton = document.querySelectorAll(`.numbers`);
let display = document.querySelector(`#display-area`)
let equals = document.querySelector(`#equals`);
let clear = document.querySelector(`#clear`);
console.log(numButton);

let operators = {
    add: document.query
    subtract: `-`,
    multiply: `*`,
    divide: `/`,  
    `=`: 
};

let numbers = {
    one: `1`,
    two: `2`,
    three: `3`,
    four: `4`,
    five: `5`,
    six: `6`,
    seven: `7`,
    eight: `8`,
    nine: `9`,
    zero: `0`,

}
const numberElements = document.getElementsByClassName("numbers");
console.log(numberElements);

/*
[       the major issue with this is that the numbers should show the sum, NOT the operators.
[   take inspiration from the example. When the operator is clicked, it highlights and
[   then turns back when the number is pressed. This means that the operator is passive
[   and only serves to pass the operator to the number on click, which then turns out the 
[   sum.
[   
[                *** Tasks ***
[   1. change variables with numbers and operators to objects. 
[   2. add main summing functions to click
[   3. change operator button to only send operator
[   4. figure out clear functionality, objects will help with this, reduce variables to clear.
[   5. add negative and remainder buttons.
[   6. add decimal button and change output to floating point instead of integer.
[   7. add a functioning backspace button
[    8. add keyboard support
*/
let displayedNumbers = display.textContent;
console.log(displayedNumbers);
Array.from(numberElements).forEach(function(element) {
    element.addEventListener(`click`, () => {
        
    });
})

clear.addEventListener(`click`, () => display.textContent = ``)


let operatorElements = document.querySelectorAll(`.operators`)
let initialNumber;
let firstOperand;
let secondOperand; 

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