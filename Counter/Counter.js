let text = document.getElementById("text");
let number = 0;

let darkThemeVal = true;
let lightThemeVal = false;

let buttons = document.getElementById("buttons").children;
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.querySelector("#resetBtn");
let decreaseBtn = document.getElementById("decreaseBtn");

let lightThemeBtn = document.querySelector(".lightTheme");
let darkThemeBtn = document.querySelector(".darkTheme");

text.innerHTML = number;

console.log(buttons);

function increase() {
  number++;
  text.innerHTML = number;
}

increaseBtn.addEventListener("click", increase);

function reset() {
  text.innerHTML = 0;
  number = 0;
}

resetBtn.addEventListener("click", reset);

function decrease() {
  number--;
  text.innerHTML = number;
  if (number <= 0) {
    text.innerHTML = 0;
    number = 0;
  }
}

decreaseBtn.addEventListener("click", decrease);

function lightTheme() {
  document.body.style.backgroundColor = "white";
  buttons[0].style.border = "1px solid black";
  buttons[0].style.backgroundColor = "black";
  buttons[1].style.border = "1px solid black";
  buttons[1].style.backgroundColor = "black";
  buttons[2].style.border = "1px solid black";
  buttons[2].style.backgroundColor = "black";
  lightThemeVal = true;
  darkThemeVal = false;
}

lightThemeBtn.addEventListener("click", lightTheme);

function darkTheme() {
  document.body.style.backgroundColor = "black";
  buttons[0].style.border = "1px solid white";
  buttons[0].style.backgroundColor = "black";
  buttons[1].style.border = "1px solid white";
  buttons[1].style.backgroundColor = "black";
  buttons[2].style.border = "1px solid white";
  buttons[2].style.backgroundColor = "black";
  darkThemeVal = true;
  lightThemeVal = false;
}

darkThemeBtn.addEventListener("click", darkTheme);
