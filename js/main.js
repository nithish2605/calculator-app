//getting the values
var keys = document.querySelectorAll(".numkeys");
var display = document.querySelector("#display");
let clear = document.querySelector("#refresh");
var operators = document.querySelectorAll("#operators");
var equal = document.querySelector("#equal");
var FirstNum = "";
var SecondNum = "";
let operator = null;

//displaying values while clicking the keys
keys.forEach(key => {
    key.addEventListener('click', () => {
        if (!operator) {
            FirstNum += key.textContent;
            // console.log("first number" + FirstNum);
            display.textContent += key.textContent;
        }
        else {
            SecondNum += key.textContent;
            // console.log("second num" + SecondNum);
            display.textContent += key.textContent;
        }
    });
});

//handling operators click
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (FirstNum === "") return;
        if ((display.textContent).endsWith('+') || (display.textContent).endsWith('-') || (display.textContent).endsWith('*') || (display.textContent).endsWith('/')) {
            return;
        }
        if (operator && SecondNum !== "") {
            calculate();
        }
        operator = op.textContent;
        display.textContent += operator;
    });
});

//handling eqaul clicks
equal.addEventListener('click', () => {
    if (FirstNum === "" || SecondNum === "" || !operator) return;
    calculate();
});

//clearing the calci
clear.addEventListener("click", () => {
    display.textContent = "";
    FirstNum = "";
    SecondNum = "";
    operator = "";
});

//function to do operations
function calculate() {
    //convert to numbers
    const num1 = parseFloat(FirstNum);
    const num2 = parseFloat(SecondNum);
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 != 0 ? num1 / num2 : 'error';
            break;
    }
    FirstNum = result.toString();
    SecondNum = "";
    operator = null;
    display.textContent = result;
}

