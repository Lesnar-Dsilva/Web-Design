let date = document.getElementById("date");
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let region = document.getElementById("region");

let project = setInterval(myTimer, 1000);

function myTimer() {
  let today = new Date();

  today.getDate() < 10 && today.getMonth() < 10
    ? (date.innerHTML =
        "0" +
        today.getDate() +
        "/" +
        "0" +
        today.getMonth() +
        "/" +
        today.getFullYear())
    : (date.innerHTML =
        today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear());

  switch (today.getDay()) {
    case 1:
      day.innerHTML = "Monday";
      break;
    case 2:
      day.innerHTML = "Tuesday";
      break;
    case 3:
      day.innerHTML = "Wednesday";
    case 4:
      day.innerHTML = "Thursday";
      break;
    case 5:
      day.innerHTML = "Friday";
      break;
    case 6:
      day.innerHTML = "Saturday";
      break;
    case 7:
      day.innerHTML = "Sunday";
      break;
  }
  if (today.getHours() < 10) {
    hour.innerHTML = "0" + today.getHours() + ":";
  } else {
    hour.innerHTML = today.getHours() + ":";
  }

  if (today.getMinutes() < 10) {
    minute.innerHTML = "0" + today.getMinutes();
  } else {
    minute.innerHTML = today.getMinutes();
  }

  if (today.getSeconds() < 10) {
    seconds.innerHTML = ":" + "0" + today.getSeconds();
  } else {
    seconds.innerHTML = ":" + today.getSeconds();
  }
  region.innerHTML = today.toString().split(/\s/gi).splice(5).join(" ");
}
