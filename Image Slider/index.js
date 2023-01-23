let slides = ["img-1", "img-2", "person-1", "person-2"];

const slide = document.querySelector(".slide");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  insertion();
});

prevBtn.addEventListener("click", function () {
  counter--;
  insertion();
});

function insertion() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slide.innerHTML = `<img src="${slides[counter]}.jpg" alt="" class="img" />`;
}
