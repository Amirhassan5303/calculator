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

buttons.addEventListener("click", (event) => {
  const target = event.target;

  let value = target.dataset.value;
  let operator = target.dataset.operator;
  let action = target.dataset.action;

  if (value) {
    appendNumber(value);
  }

  if (operator) {
  }

  if (action) {
  }
});
