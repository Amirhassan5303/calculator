const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let firstNumber = "";
let secondNumber = "";
let currentInput;
let operator = null;
let shouldClearDisplay = false;

const updateDisplay = function (value) {
  display.textContent = value;
};

const getCurrentInput = function () {
  return display.textContent;
};

const appendNumber = function (value) {
  currentInput = getCurrentInput();

  if (value === "." && currentInput.includes(".")) {
    return;
  }
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }

  updateDisplay(currentInput);
};

const resetCalc = function () {
  firstNumber = "";
  secondNumber = "";
  currentInput = "0";
  updateDisplay(currentInput);
};

const deleteInput = function () {
  currentInput = getCurrentInput();
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  updateDisplay(currentInput);
};

const clearDiplay = function () {
  display.textContent = "";
  shouldClearDisplay = false;
};

const calculate = function () {
  let result;
  secondNumber = getCurrentInput();
  if (secondNumber == "0") {
    updateDisplay("error: division by zero");
    return;
  }
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  if (operator == "+") {
    result = firstNumber + secondNumber;
  } else if (operator == "-") {
    result = firstNumber - secondNumber;
  } else if (operator == "*") {
    result = firstNumber * secondNumber;
  } else if (operator == "/") {
    result = firstNumber / secondNumber;
    result = parseFloat(result.toFixed(4));
  }

  updateDisplay(result);
  shouldClearDisplay = true;
};

const selectedOperator = function (op) {
  operator = op;
  firstNumber = getCurrentInput();
  shouldClearDisplay = true;
};

buttons.addEventListener("click", (event) => {
  const target = event.target;

  let value = target.dataset.value;
  let op = target.dataset.operator;
  let action = target.dataset.action;

  if (value) {
    if (shouldClearDisplay) {
      clearDiplay();
    }
    appendNumber(value);
  }

  if (op) {
    selectedOperator(op);
  }

  if (action) {
    if (action === "reset") {
      resetCalc();
    } else if (action === "delete") {
      deleteInput();
    } else if (action === "equal") {
      calculate();
    }
  }
});
