const btn = document.querySelector(".switch");
const video = document.querySelector(".videoContainer");
const preloader = document.querySelector(".preloader");
const bg = document.querySelector(".bg");

window.addEventListener("load", function () {
  bg.style.display = "none";
});

btn.addEventListener("click", (e) => {
  if (btn.classList.contains("slide")) {
    btn.classList.remove("slide");
    video.play();
  } else {
    video.pause();
    btn.classList.add("slide");
  }
});
