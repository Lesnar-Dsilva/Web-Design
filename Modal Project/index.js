const overlay = document.querySelector(".modalOverlay");

const header = document.querySelector(".header");

const toggleBtn = document.querySelector(".toggleBtn");

const closeBtn = document.querySelector(".closeBtn");

toggleBtn.addEventListener("click", (e) => {
  if (header.classList.contains("header")) {
    overlay.classList.add("showOverlay");
    header.classList.add("hideHeader");
  }
});

closeBtn.addEventListener("click", (e) => {
  if (overlay.classList.contains("showOverlay")) {
    overlay.classList.remove("showOverlay");
    header.classList.remove("hideHeader");
  }
});
