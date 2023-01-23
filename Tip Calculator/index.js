let totalBill = document.getElementById("totalBill");
let numberOfGuests = document.getElementById("numberOfGuests");
let gradeService = document.getElementById("gradeService");
const calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    Number(gradeService.value) &&
    totalBill.value >= 1 &&
    numberOfGuests.value >= 1
  ) {
    console.log(result.innerText);
    result.innerText =
      "The total is $" +
      ((totalBill.value / numberOfGuests.value) * gradeService.value).toFixed(
        2
      ) +
      " per guest";
    result.style.display = "flex";
  } else if (totalBill.value == "" || totalBill.value == undefined) {
    result.innerText = "Please enter Total Bill!";
    result.style.display = "flex";
  } else if (numberOfGuests.value == "" || numberOfGuests.value == undefined) {
    result.style.display = "flex";
    result.innerText = "Please enter Number of Guests!";
  } else {
    result.innerText = "Please check the information given";
    result.style.display = "flex";
  }
});
