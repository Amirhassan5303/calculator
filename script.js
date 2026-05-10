const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let firstNumber = "";
let secondNumber = "";
let currentInput;
let operator = null;

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

buttons.addEventListener("click", (event) => {
  const target = event.target;

  let value = target.dataset.value;
  let operator = target.dataset.operator;
  let action = target.dataset.action;

  if (value) {
    appendNumber(value);
  }

  if (operator) {
    selectedOperator();
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
