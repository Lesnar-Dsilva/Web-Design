const navToggle = document.querySelector(".navToggle");

const links = document.querySelector(".links");

navToggle.addEventListener("click", (e) => {
  if (links.classList.contains("showLinks")) {
    links.classList.remove("showLinks");
  } else {
    links.classList.add("showLinks");
  }

  console.log(links.classList);
});
