//Variables
const debugging = false;
const none = Symbol("none");
const plus = Symbol("plus");
const minus = Symbol("minus");
const times = Symbol("times");
const divide = Symbol("divide");
const equal = Symbol("equal");

let numCurrent = 0;
let numPrevious = 0;
let operationCurrent = none;
let textCurrent = "";
let dotActive = false;

const output = document.querySelector("#output-main");
//Event listeners
for (let i = 0; i < 10; i++) {
    document.querySelector("#n-"+i).addEventListener('click',
        () => {
            updateWithNumber(i);
        }
    );
}
document.querySelector("#plus").addEventListener('click',
    () => {
        updateWithOperation(plus);
    }
);
document.querySelector("#minus").addEventListener('click',
    () => {
        updateWithOperation(minus);
    }
);
document.querySelector("#times").addEventListener('click',
    () => {
        updateWithOperation(times);
    }
);
document.querySelector("#divide").addEventListener('click',
    () => {
        updateWithOperation(divide);
    }
);
document.querySelector("#equal").addEventListener('click',
    () => {
        updateWithOperation(equal);
    }
);
document.querySelector("#dot").addEventListener('click',
    () => {
        addDot();
    }
);
document.querySelector("#plusminus").addEventListener('click',
    () => {
        plusMinus();
    }
);
document.querySelector("#clear").addEventListener('click',
    () => {
        clear();
    }
);
//Logic functions

function clear() {
    numCurrent = 0;
    textCurrent = "";
    dotActive = false;
    output.innerText = textCurrent;
}

function addDot() {
    if (!dotActive) {
        textCurrent += ".";
        dotActive = true;
    }
}

function plusMinus() {
    numCurrent *= -1;
    textCurrent = numCurrent.toString();
    output.innerText = textCurrent;
}

function updateWithNumber(num) {
    if (debugging) {console.log(num)}
    textCurrent += num;
    numCurrent = parseFloat(parseFloat(textCurrent, 10).toFixed(14));
    output.innerText = textCurrent;
}

function updateWithOperation(operation) {
    if (debugging) {console.log(operation)}
    switch(operationCurrent) {
        case plus:
            numCurrent = numPrevious + numCurrent;
            break;
        case minus:
            numCurrent = numPrevious - numCurrent;
            break;
        case times:
            numCurrent = numPrevious * numCurrent;
            break;
        case divide:
            numCurrent = numPrevious / numCurrent;
            break;
    }
    
    textCurrent = numCurrent.toString();
    output.innerText = textCurrent;
    if (operation === equal) {
        operationCurrent = none;
        return;
    }

    numPrevious = numCurrent;
    numCurrent = 0;
    textCurrent = "";
    dotActive = false;
    operationCurrent = operation;
}