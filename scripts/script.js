/*
[       the major issue with this is that the numbers should show the sum, NOT the operators.
[   take inspiration from the example. When the operator is clicked, it highlights and
[   then turns back when the number is pressed. This means that the operator is passive
[   and only serves to pass the operator to the number on click, which then turns out the 
[   sum.
[   
[                *** Tasks ***
[   [x] change variables with numbers and operators to objects. 
[   [x] add main summing functions to click
[   [x] change operator button to only send operator
[   [x] figure out clear functionality, objects will help with this, reduce variables to clear.
[   [x] add negative and remainder buttons.
[   [x] add decimal button and change output to floating point instead of integer.
[   [x] add a functioning backspace button
[   [x] add keyboard support
[   [x] don't allow users to enter more than one decimal point
[   [x] round decimal places in sum to two places.
[
[  
*/



/*Query Selectors*/
const numButton = document.querySelectorAll(`.numbers`);
const display = document.querySelector(`#display-area`)
const equals = document.querySelector(`#equals`);
const clear = document.querySelector(`#clear`);
const operatorElements = document.querySelectorAll(`.operators`)
const numberElements = document.getElementsByClassName("numbers");
const decimal = document.querySelector(`#decimal`)
let runningTotal = 0;




/*Global Number Storage*/
let num2;
let num1;
let initialNumber;
let sum;
let operator;
let firstOperand = ``;
let secondOperand = ``;


const operators = {
    add: `+`,
    subtract: `-`,
    multiply: `*`,
    divide: `/`,
    equals: `=`,
};

const clickNumbers = {
    'Digit1': `1`,
    'Digit2': `2`,
    'Digit3': `3`,
    'Digit4': `4`,
    'Digit5': `5`,
    'Digit6': `6`,
    'Digit7': `7`,
    'Digit8': `8`,
    'Digit9': `9`,
    'Digit0': `0`,
}

const keyNumbers = {
    'Digit1': `1`,
    'Digit2': `2`,
    'Digit3': `3`,
    'Digit4': `4`,
    'Digit5': `5`,
    'Digit6': `6`,
    'Digit7': `7`,
    'Digit8': `8`,
    'Digit9': `9`,
    'Digit0': `0`,
    'Numpad1': `1`,
    'Numpad2': `2`,
    'Numpad3': `3`,
    'Numpad4': `4`,
    'Numpad5': `5`,
    'Numpad6': `6`,
    'Numpad7': `7`,
    'Numpad8': `8`,
    'Numpad9': `9`,
    'Numpad0': `0`,
}





/*Operator functions*/
function multiply(a, b) {
    if (runningTotal == !0) {
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

function remainder(a, b) {
    runningtotal = a % b;
    return runningtotal;
};


function operate(num1, operator, num2) {
    if (operator == `*`) {
        return multiply(num1, num2)
    } else if (operator == `/`) {
        return divide(num1, num2)
    } else if (operator == `+`) {
        return add(num1, num2)
    } else if (operator == `-`) {
        return subtract(num1, num2)
    } else if (operator == `%`) {
        return remainder(num1, num2)
    };
};


let operatorFunctionKeys = function (op) {
    if (typeof num1 === `undefined`) {
        num1 = parseFloat(firstOperand);
        operator = op;

    } else if (typeof equalSum === `number`) {
        num2 = undefined;
        num1 = equalSum;
        equalSum = undefined;
        operator = op;

    } else if (typeof num1 === `number`) {
        num2 = parseFloat(secondOperand);
        sum = Math.round((operate(num1, operator, num2) + Number.EPSILON) * 100) / 100;
        display.textContent = `${sum}`;
        secondOperand = ``;
        num1 = sum;
        operator = op;
    };
};

let operatorFunction = function(element) {
    
    if (secondOperand == `0`) {
        alert(`No no no! Dividing by zero is a crime against humanity :)`);

    }  else if (typeof num1 === `undefined`) {
        num1 = parseFloat(firstOperand);
        operator = element.getAttribute(`id`);
        

    } else if (typeof equalSum === `number`) {
        num2 = undefined;
        num1 = equalSum;
        equalSum = undefined;
        operator = element.getAttribute(`id`);

    } else if (typeof num1 === `number`) {
        num2 = parseFloat(secondOperand);
        sum = Math.round((operate(num1, operator, num2) + Number.EPSILON) * 100) / 100;
        display.textContent = `${sum}`;
        secondOperand = ``;
        num1 = sum;
        operator = element.getAttribute(`id`);
    };
};

function characterInsertion() {
    let character;
    let arrayOp;
    let textArray;
    function idCharacter() {
        if (map[`Period`]) {
            character = `.`
            arrayOp = textArray.push(character);
        } else if (map[`ControlLeft`]) {
            character = `-`
            arrayOp = textArray.unshift(character);
        } else if (map[`Backspace`]) {
            arrayOp = textArray.pop();
        }
    };

    if (display.textContent == firstOperand || display.textContent == secondOperand) {
        if (typeof num1 === `undefined`) {
            textArray = Array.from(firstOperand); 
            idCharacter();
            console.log(textArray);
            let negative = textArray.join(``);
            console.log(negative);
            firstOperand = negative;
            display.textContent = firstOperand;
            console.log(firstOperand);
        } else {
            textArray = Array.from(secondOperand); 
            idCharacter();
            console.log(textArray);
            let negative = textArray.join(``);
            console.log(negative);
            secondOperand = negative;
            display.textContent = secondOperand;
            console.log(secondOperand);
        };
    };  
};



/* Keyboard Event Listeners*/
let map = {};

document.addEventListener(`keyup`, function (event) {
    delete map[event.code];
});

document.addEventListener(`keydown`, function (event) {

    
    map[event.code] = event.type == `keydown`;
    const keypress = event.code;
    console.log(map);



    for (let key in keyNumbers) {
        if (key === keypress && map[`ShiftLeft`] === undefined) {
            if (typeof num1 === `undefined`) {
                firstOperand += keyNumbers[keypress];
                display.textContent += keyNumbers[keypress];
                console.log(firstOperand);
            } else {
                display.textContent = ``;
                secondOperand += keyNumbers[keypress];
                console.log(secondOperand);
                display.textContent += secondOperand;
            };
        };
    };


    if (map[`ShiftLeft`] && map[`Equal`]) {
        console.log(`SHIFT_EQUAL`);
        operatorFunctionKeys(`+`);

        map = [];
    } else if (map[`Minus`]) {
        console.log(`Minus`);
        operatorFunctionKeys(`-`);
        map = [];

    } else if (map[`ShiftLeft`] && map[`Digit8`]) {
        console.log(`SHIFT_8`);
        operatorFunctionKeys(`*`);
        map = [];

    } else if (map[`Slash`]) {
        console.log(`SLASH`);
        operatorFunctionKeys(`/`);
        map = [];

    } else if (map[`ShiftLeft`] && map[`Digit5`]) {
        console.log(`REMAINDER`);
        operatorFunctionKeys(`%`);
        map = [];

    } else if (map[`KeyC`]) {
        console.log(`calculator cleared`)
        firstOperand = ``;
        secondOperand = ``;
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        sum = undefined;
        equalSum = undefined;
        display.textContent = ``;

    } else if (map[`Equal`]) {
        num2 = parseFloat(secondOperand);
        equalSum = Math.round((operate(num1, operator, num2) + Number.EPSILON) * 100) / 100;
        display.textContent = `${equalSum}`;
        secondOperand = ``;
        num1 = equalSum;
    } else if (map[`ControlLeft`]) {
        characterInsertion();
          
    } else if (map[`Period`] && display.textContent.includes('.') == false ) {
        characterInsertion();
           
    } else if (map[`Backspace`]) {
        characterInsertion();
    };
});



/*Click Event Listeners*/
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

Array.from(operatorElements).forEach(function (element) {
    element.addEventListener(`click`, () => {
        console.log(secondOperand);
        operatorFunction(element);
        
    });
});




Array.from(numberElements).forEach(function (element) {
    element.addEventListener(`click`, () => {
        const number = element.getAttribute(`id`);
        
        for (let key in clickNumbers) {
            if (clickNumbers[key] === number) {
                if (typeof num1 === `undefined`) {
                    console.log(firstOperand)
                    firstOperand += number;
                    display.textContent += clickNumbers[key];
                    console.log(display.textContent);

                } else {
                    console.log(secondOperand);
                    display.textContent = ``;
                    secondOperand += number;
                    display.textContent += secondOperand;
                };
            };
        };
        if (number === `decimal` && display.textContent.includes(`.`) == false) {
            firstOperand += `.`;
            display.textContent += `.`;
        }
        console.log(number);
    });
});

equals.addEventListener(`click`, () => {
    num2 = parseFloat(secondOperand);
    equalSum = Math.round((operate(num1, operator, num2) + Number.EPSILON) * 100) / 100;
    console.log(equalSum);
    display.textContent = `${equalSum}`;
    secondOperand = ``;
    num1 = equalSum;
});