const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  let btn = question.querySelector(".questionBtn");
  btn.addEventListener("click", (e) => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("showText");
      }
    });
    question.classList.toggle("showText");
  });
});
