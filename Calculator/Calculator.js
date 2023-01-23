var output = document.getElementById("output");

var AC = document.getElementById("acBtn");
var one = document.getElementById("num1");
var two = document.getElementById("num2");
var three = document.getElementById("num3");
var four = document.getElementById("num4");
var five = document.getElementById("num5");
var six = document.getElementById("num6");
var seven = document.getElementById("num7");
var eight = document.getElementById("num8");
var nine = document.getElementById("num9");
var zero = document.getElementById("num0");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var division = document.getElementById("division");
var equal = document.getElementById("equal");
var remainder = document.getElementById("percentage");

var decimalPoint = document.getElementById("decimalPoint");
var addOrSubtract = document.getElementById("addOrSubtract");

let calculate = "";

function number() {
  if (output.innerHTML == 0) {
    calculate = this.textContent;
    output.innerHTML = this.textContent;
  } else if (output.innerHTML == "") {
    calculate = this.textContent;
    output.innerHTML = this.textContent;
  } else if (output.innerHTML == "undefined") {
    calculate = this.textContent;
    output.innerHTML = this.textContent;
  } else {
    calculate += this.textContent;
    output.innerHTML += this.textContent;
    console.log(calculate);
  }
}

function operation() {
  calculate += this.textContent;
  output.innerHTML += this.textContent;
  console.log(calculate);
}
one.addEventListener("click", number);
two.addEventListener("click", number);
three.addEventListener("click", number);
four.addEventListener("click", number);
five.addEventListener("click", number);
six.addEventListener("click", number);
seven.addEventListener("click", number);
eight.addEventListener("click", number);
nine.addEventListener("click", number);
zero.addEventListener("click", number);

add.addEventListener("click", operation);
subtract.addEventListener("click", operation);
multiply.addEventListener("click", operation);
division.addEventListener("click", operation);
remainder.addEventListener("click", operation);
decimalPoint.addEventListener("click", operation);
addOrSubtract.addEventListener("click", function () {
  output.innerHTML += "-";
  calculate += "-";
});

AC.addEventListener("click", function () {
  calculate = "0";
  output.innerHTML = "0";
});

equal.addEventListener("click", function () {
  if (calculate == undefined) {
    calculate = 0;
    output.innerHTML = 0;
  } else if (calculate == "") {
    output.innerHTML = 0;
    calculate = 0;
  } else if (calculate == "0/0") {
    output.innerHTML = "undefined";
    calculate = "";
  } else {
    calculate = eval(calculate);
    output.innerHTML = calculate;
  }
});
