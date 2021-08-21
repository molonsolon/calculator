let numButton = document.querySelectorAll(`.numbers`);
let display = document.querySelector(`#display-area`)
let equals = document.querySelector(`#equals`);
let clear = document.querySelector(`#clear`);


let operators = {
    add: `+`,
    subtract: `-`,
    multiply: `*`,
    divide: `/`,  
    equals: `=`,
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

let num1;
let firstOperand = ``;
let secondOperand = ``;
let num2;
Array.from(numberElements).forEach(function(element) {
    element.addEventListener(`click`, () => {
        const number = element.getAttribute(`id`);
        console.log(number);
        for (let key in numbers) {
            if (numbers[key] === number) {
                if (typeof num1 === `undefined`) {
                    firstOperand += number;
                    display.textContent += numbers[key];
                    console.log(firstOperand);
                } else {
                    display.textContent = ``;
                    secondOperand += number;
                    
                    console.log(secondOperand);
                    display.textContent += secondOperand;
                }; 
        }   }   
        
        console.log(firstOperand);
        
    });
})

clear.addEventListener(`click`, () => {
    firstOperand = ``;
    secondOperand = ``;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    sum = undefined;
    equalSum = undefined;
    display.textContent = ``;
});


let operatorElements = document.querySelectorAll(`.operators`)
let initialNumber;

let sum;
let operator;
Array.from(operatorElements).forEach(function(element) {
    element.addEventListener(`click`, () => {
        
        
        if (typeof num1 === `undefined`) {
            num1 = parseFloat(firstOperand);
            operator = element.getAttribute(`id`);
            console.log(num1);
        } else if (typeof equalSum === `number`) {
            num2 = undefined;
            num1 = equalSum;
            equalSum = undefined;
            operator = element.getAttribute(`id`);
        } else if (typeof num1 === `number`) {
            
            num2 = parseFloat(secondOperand);
            sum = operate(num1, operator, num2);
            display.textContent = `${sum}`;
            secondOperand = ``;
            num1 = sum;
            operator = element.getAttribute(`id`);
        };
    })
});
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
    num2 = parseFloat(secondOperand);
            equalSum = operate(num1, operator, num2);
            display.textContent = `${equalSum}`;
            secondOperand = ``;
            num1 = equalSum;
    
    
});

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