let counterDisplay = document.getElementById("CounterDisplay");
let resetButton = document.getElementById("ResetButton");
let decrementButton = document.getElementById("DecrementButton");
let incrementButton = document.getElementById("IncrementButton");
let setButton = document.getElementById("SetButton");
let setButtonInput = document.getElementById("SetButtonInput");

let currentCount = 0;

function ResetCounter(){
    currentCount = 0;
    UpdateCounterDisplay();
}

function DecrementCounter(){
    currentCount--;
    UpdateCounterDisplay();
}

function IncrementCounter(){
    currentCount++;
    UpdateCounterDisplay();
}

function SetCounter(){
    currentCount = setButtonInput.value;
    setButtonInput.value = "";
    UpdateCounterDisplay();
}

function UpdateCounterDisplay(){
    counterDisplay.textContent = currentCount;
}

resetButton.onclick = function NewResetCounter(){ResetCounter();};
decrementButton.onclick = function NewDecrementCounter(){DecrementCounter();};
incrementButton.onclick = function NewIncrementCounter(){IncrementCounter();};
setButton.onclick = function NewSetCounter(){SetCounter();};