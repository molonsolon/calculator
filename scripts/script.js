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
[   [] add negative and remainder buttons.
[   [] add decimal button and change output to floating point instead of integer.
[   [] add a functioning backspace button
[   [x] add keyboard support
*/

/*Query Selectors*/
let numButton = document.querySelectorAll(`.numbers`);
let display = document.querySelector(`#display-area`)
let equals = document.querySelector(`#equals`);
let clear = document.querySelector(`#clear`);
let operatorElements = document.querySelectorAll(`.operators`)
const numberElements = document.getElementsByClassName("numbers");



/*Global Number Storage*/
let num2;
let num1;
let initialNumber;
let sum;
let operator;
let firstOperand = ``;
let secondOperand = ``;


let operators = {
    add: `+`,
    subtract: `-`,
    multiply: `*`,
    divide: `/`,
    equals: `=`,
};

let numbers = {
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

function positiveNegative(num) {
    if (display.textContent == num1 || display.textContent == num2) {

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
        sum = operate(num1, operator, num2);
        display.textContent = `${sum}`;
        secondOperand = ``;
        num1 = sum;
        operator = op;
    };
};

let operatorFunction = function (element) {

    if (typeof num1 === `undefined`) {
        num1 = parseFloat(firstOperand);
        operator = element.getAttribute(`id`);

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

    for (let key in numbers) {
        if (key === keypress) {
            if (typeof num1 === `undefined`) {
                firstOperand += numbers[keypress];
                display.textContent += numbers[keypress];
                console.log(firstOperand);
            } else {
                display.textContent = ``;
                secondOperand += numbers[keypress];
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
        equalSum = operate(num1, operator, num2);
        display.textContent = `${equalSum}`;
        secondOperand = ``;
        num1 = equalSum;
    } else if (map[`ControlLeft`]) {
        /* for negative button, use array methods to shift and unshift the negative at the
        beginning. Also make sure that it's clearing the display and not applying it to the 
        current sum */

        if (display.textContent == firstOperand || display.textContent == secondOperand) {
            let textArray = Array.from(firstOperand); 
            console.log(textArray);
            let negative = textArray.unshift(`-`).join(``);

            display.textContent = `${negative}`;
        }
    }

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
        operatorFunction(element);
    });
});

Array.from(numberElements).forEach(function (element) {
    element.addEventListener(`click`, () => {
        const number = element.getAttribute(`id`);

        for (let key in numbers) {
            if (numbers[key] === number) {
                if (typeof num1 === `undefined`) {
                    firstOperand += number;
                    display.textContent += numbers[key];

                } else {
                    display.textContent = ``;
                    secondOperand += number;
                    display.textContent += secondOperand;
                };
            };
        };
    });
});

equals.addEventListener(`click`, () => {
    num2 = parseFloat(secondOperand);
    equalSum = operate(num1, operator, num2);
    display.textContent = `${equalSum}`;
    secondOperand = ``;
    num1 = equalSum;
});