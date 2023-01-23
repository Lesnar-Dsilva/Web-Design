const btns = document.querySelectorAll(".tabsBtn");

const text = document.querySelectorAll(".text");

let images = document.querySelectorAll(".img");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let id = e.target.getAttribute("data-id");

    btns.forEach(function (e) {
      e.classList.remove("active");
      btn.classList.add("active");
    });

    images.forEach(function (image) {
      image.classList.remove("active");
      if (image.classList.contains(id)) {
        image.classList.add("active");
      }
    });

    text.forEach(function (e) {
      e.classList.remove("active");
      let content = document.getElementById(id);
      content.classList.add("active");
    });
  });
});
