//Variables
const debugging = false;
const none = Symbol("none");
const plus = Symbol("plus");
const minus = Symbol("minus");
const times = Symbol("times");
const divide = Symbol("divide");
const equal = Symbol("equal");
const root = Symbol("root");
const power = Symbol("power");
const log = Symbol("log");
const mod = Symbol("mod");

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
document.querySelector("#exp").addEventListener('click',
    () => {
        calcExp();
    }
);
document.querySelector("#xy").addEventListener('click',
    () => {
        updateWithOperation(power);
    }
);
document.querySelector("#square").addEventListener('click',
    () => {
        calcSquare();
    }
);
document.querySelector("#cube").addEventListener('click',
    () => {
        calcCube();
    }
);
document.querySelector("#factorial").addEventListener('click',
    () => {
        calcFactorial();
    }
);
document.querySelector("#ln").addEventListener('click',
    () => {
        calcLn();
    }
);
document.querySelector("#lg").addEventListener('click',
    () => {
        calcLg();
    }
);
document.querySelector("#log").addEventListener('click',
    () => {
        updateWithOperation(log);
    }
);
document.querySelector("#pi").addEventListener('click',
    () => {
        pi();
    }
);
document.querySelector("#e").addEventListener('click',
    () => {
        e();
    }
);
document.querySelector("#deg").addEventListener('click',
    () => {
        calcDegree();
    }
);
document.querySelector("#rad").addEventListener('click',
    () => {
        calcRadian();
    }
);
document.querySelector("#mod").addEventListener('click',
    () => {
        updateWithOperation(mod);
    }
);
document.querySelector("#abs").addEventListener('click',
    () => {
        calcAbs();
    }
);
document.querySelector("#inverse").addEventListener('click',
    () => {
        calcInverse();
    }
);
document.querySelector("#ten-power").addEventListener('click',
    () => {
        tenPower();
    }
);
//Keyboard listener
document.addEventListener("keydown",
    (event) => {
        switch(event.key) {
            case "0":
                updateWithNumber(0);
                break;
            case "1":
                updateWithNumber(1);
                break;
            case "2":
                updateWithNumber(2);
                break;
            case "3":
                updateWithNumber(3);
                break;
            case "4":
                updateWithNumber(4);
                break;
            case "5":
                updateWithNumber(5);
                break;
            case "6":
                updateWithNumber(6);
                break;
            case "7":
                updateWithNumber(7);
                break;
            case "8":
                updateWithNumber(8);
                break;
            case "9":
                updateWithNumber(9);
                break;
        }
        event.preventDefault();
    }
);
//Calculator Logic functions
function tenPower() {
    updateWithOperation(equal);
    numCurrent = Math.pow(10, numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcInverse() {
    updateWithOperation(equal);
    numCurrent = 1 / numPrevious;
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcAbs() {
    updateWithOperation(equal);
    numCurrent = Math.abs(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcDegree() {
    updateWithOperation(equal);
    numCurrent = numPrevious * 180/Math.PI;
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcRadian() {
    updateWithOperation(equal);
    numCurrent = numPrevious * Math.PI/180;
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function e() {
    numCurrent = Math.E;
    textCurrent = numCurrent.toString();
    outputMain.innerText = textCurrent;
}
function pi() {
    numCurrent = Math.PI;
    textCurrent = numCurrent.toString();
    outputMain.innerText = textCurrent;
}
function calcLg() {
    updateWithOperation(equal);
    numCurrent = Math.log10(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcLn() {
    updateWithOperation(equal);
    numCurrent = Math.log(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcSquare() {
    updateWithOperation(equal);
    numCurrent = numPrevious * numPrevious;
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcCube() {
    updateWithOperation(equal);
    numCurrent = numPrevious * numPrevious * numPrevious;
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcFactorial() {
    updateWithOperation(equal);
    let num = 1
    for (let i = 1; i <= numPrevious; i++) {
        num *= i;
    }
    numCurrent = num;
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
function calcExp() {
    updateWithOperation(equal);
    numCurrent = Math.exp(numPrevious);
    textCurrent = numCurrent.toString();
    dotActive = true;
    outputMain.innerText = textCurrent;
}
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
            textHistory += " √ ";
            break;
        case power:
            textHistory += " ^ ";
            break;
        case log:
            textHistory += " log ";
            break;
        case mod:
            textHistory += " mod ";
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
        case power:
            numCurrent = Math.pow(numPrevious, numCurrent);
            break;
        case log:
            numCurrent = Math.log(numPrevious)/Math.log(numCurrent);
            break;
        case mod:
            numCurrent = numPrevious % numCurrent;
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