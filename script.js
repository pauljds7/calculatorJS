//Variables
const debugging = false;
const none = Symbol("none");
const plus = Symbol("plus");
const minus = Symbol("minus");
const times = Symbol("times");
const divide = Symbol("divide");
const equal = Symbol("equal");
const root = Symbol("root");

let numCurrent = 0;
let numPrevious = 0;
let operationCurrent = none;
let textCurrent = "";
let textHistory = "";
let dotActive = false;
let scientificMode = false;

const outputMain = document.querySelector("#output-main");
const outputHistory = document.querySelector("#output-history");
const buttonsScientific = document.querySelectorAll(".scientific");
const wrapper = document.querySelector("#wrapper");
const calculator = document.querySelector("#calculator");
const buttonChange = document.querySelector("#change-mode")
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
document.querySelector("#clear-everything").addEventListener('click',
    () => {
        clearEverything();
    }
);
document.querySelector("#percent").addEventListener('click',
    () => {
        percent();
    }
);
document.querySelector("#change-mode").addEventListener('click',
    () => {
        toggleScientificMode();
    }
);
document.querySelector("#sin").addEventListener('click',
    () => {
        sin();
    }
);
document.querySelector("#cos").addEventListener('click',
    () => {
        cos();
    }
);
document.querySelector("#tan").addEventListener('click',
    () => {
        tan();
    }
);
document.querySelector("#sqrt").addEventListener('click',
    () => {
        calcSqrt();
    }
);
document.querySelector("#root").addEventListener('click',
    () => {
        updateWithOperation(root);
    }
);
//Calculator Logic functions
function calcSqrt() {
    updateWithOperation(equal);
    numCurrent = Math.sqrt(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function sin() {
    updateWithOperation(equal);
    numCurrent = Math.sin(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function cos() {
    updateWithOperation(equal);
    numCurrent = Math.cos(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function tan() {
    updateWithOperation(equal);
    numCurrent = Math.tan(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function percent() {
    numCurrent *= 0.01;
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}

function clear() {
    numCurrent = 0;
    textCurrent = "";
    dotActive = false;
    outputMain.innerText = textCurrent;
}

function clearEverything() {
    numCurrent = 0;
    numPrevious = 0;
    operationCurrent = none;
    textCurrent = "";
    textHistory = "";
    dotActive = false;
    outputMain.innerText = textCurrent;
    outputHistory.innerText = textHistory;
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
    outputMain.innerText = textCurrent;
}


//Program logic functions
function toggleScientificMode() {
    //Enable/disable each of the scientific buttons
    buttonsScientific.forEach(
        (elem) => {
            if (scientificMode) {
                elem.classList.add("hidden");                 
            } else {
                elem.classList.remove("hidden");
            }
        }
    );
    //Change size and grid to accompany more buttons
    if (scientificMode) {
        wrapper.classList.replace("wrapper-sci", "wrapper-normal");
        calculator.classList.replace("calculator-sci", "calculator-normal");
        outputMain.classList.replace("output-main-sci","output-main-normal");
        outputHistory.classList.replace("output-history-sci","output-history-normal");
        buttonChange.innerText = "Go scientific";

    } else {
        wrapper.classList.replace("wrapper-normal", "wrapper-sci");
        calculator.classList.replace("calculator-normal", "calculator-sci");
        outputMain.classList.replace("output-main-normal","output-main-sci");
        outputHistory.classList.replace("output-history-normal","output-history-sci");
        buttonChange.innerText = "Go normal";
    }

    scientificMode = !scientificMode;
}

function updateWithNumber(num) {
    if (debugging) {console.log(num)}
    textCurrent += num;
    numCurrent = parseFloat(parseFloat(textCurrent, 10).toFixed(13), 10);
    outputMain.innerText = textCurrent;
}

function updateWithOperation(operation) {
    if (debugging) {console.log(operation)}
    
    //History updates
    textHistory += numCurrent.toString();
    switch(operation) {
        case plus:
            textHistory += " + ";
            break;
        case minus:
            textHistory += " - ";
            break;
        case times:
            textHistory += " * ";
            break;
        case divide:
            textHistory += " / ";
            break;
        case root:
            textHistory += " √ "
            break;
    }

    //Continuous calculation logic
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
        case root:
            numCurrent = Math.pow(numPrevious, 1/numCurrent);
            break;
    }
    
    textCurrent = numCurrent.toString();
    outputMain.innerText = textCurrent;
    outputHistory.innerText = textHistory;

    numPrevious = numCurrent;
    numCurrent = 0;
    textCurrent = "";
    dotActive = false;
    if (operation === equal) {
        operationCurrent = none;
        textHistory = "";
        outputHistory.innerText = textHistory;
        return;
    }
    
    operationCurrent = operation;
}