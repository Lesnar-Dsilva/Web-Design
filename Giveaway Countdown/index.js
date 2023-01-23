function display() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const countdown = document.querySelectorAll(
    ".countdown > div > span:first-child"
  );

  const future = new Date(2021, 9, 1, 11, 30, 0);

  const today = new Date();

  let offSet = future - today;

  const days = Math.floor(offSet / (24 * 60 * 60 * 1000));
  const hours = Math.floor((offSet % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((offSet % (60 * 60 * 60)) / (60 * 1000));
  const seconds = Math.floor((offSet % (60 * 1000)) / 1000);

  let time = [days, hours, minutes, seconds];

  countdown.forEach(function (item, index) {
    if (time[index] < 10) {
      item.innerHTML = `0${time[index]}`;
    } else {
      item.innerHTML = time[index];
    }
  });
}

setInterval(display, 1000);
