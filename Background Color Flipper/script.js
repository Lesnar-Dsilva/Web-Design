let button = document.getElementById("button");

function changeColor() {
  let rgb = Math.floor(Math.random() * 16777216).toString(16); //toString(16) returns a hex value if the resulting value is between 10 and 15
  console.log(typeof rgb);
  document.body.style.backgroundColor = `#${rgb}`;
  button.textContent = `Background Color: #${rgb}`;
}

button.style.border = "none";
button.style.fontSize = "100px";

button.addEventListener("click", changeColor);
