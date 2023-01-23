const home = document.querySelector(".homeBtn");
const exploreBtn = document.querySelectorAll(".exploreBtn");
const explore = document.getElementById("explore");
const about = document.querySelector(".aboutBtn");
const tours = document.querySelector(".toursBtn");
const up = document.querySelector(".upArrow");
const toggleBtn = document.querySelector(".toggleBtn");
const navbar = document.querySelector(".navbar");
const imgContainer = document.querySelector(".imgContainer");
const img = document.querySelector(".img");
const links = document.querySelector(".links");

exploreBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const hash = event.target.getAttribute("href");
    const scrollTarget = document.querySelector(hash);
    const headerHeight = 90;
    window.scrollTo(0, scrollTarget.offsetTop - headerHeight);
    remove();
  });
});

about.addEventListener("click", function (event) {
  event.preventDefault();
  const hash = event.target.getAttribute("href");
  const scrollTarget = document.querySelector(hash);
  const headerHeight = 90;
  window.scrollTo(0, scrollTarget.offsetTop - headerHeight);
  remove();
});

tours.addEventListener("click", function (event) {
  event.preventDefault();
  const hash = event.target.getAttribute("href");
  const scrollTarget = document.querySelector(hash);
  const headerHeight = 90;
  window.scrollTo(0, scrollTarget.offsetTop - headerHeight);
  remove();
});

up.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function toggle() {
  if (navbar.classList.contains("toggle")) {
    navbar.classList.remove("toggle");
    console.log(navbar);
  } else {
    navbar.classList.add("toggle");
    console.log(navbar);
  }
  if (imgContainer.classList.contains("toggle")) {
    imgContainer.classList.remove("toggle");
    console.log(imgContainer);
  } else {
    imgContainer.classList.add("toggle");
    console.log(imgContainer);
  }
  if (img.classList.contains("toggle")) {
    img.classList.remove("toggle");
  } else {
    img.classList.add("toggle");
  }
  if (links.classList.contains("toggle")) {
    links.classList.remove("toggle");
  } else {
    links.classList.add("toggle");
  }
}

function remove() {
  navbar.classList.remove("toggle");
  imgContainer.classList.remove("toggle");
  img.classList.remove("toggle");
  links.classList.remove("toggle");
}

toggleBtn.addEventListener("click", toggle);
