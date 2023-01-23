let form = document.getElementById("form");
let list = document.getElementById("list");
let input = document.getElementById("newItem");
let submit = document.getElementById("submit");

let item = document.getElementsByTagName("li");
let button = document.getElementsByTagName("button");

let id = 4;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.length >= 1) {
    input.style.borderColor = "green";
    id++;
    list.innerHTML += "<li id=" + "No" + id + ">" + input.value + "</li>";
  } else {
    input.style.borderColor = "red";
  }
});

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
  });
  item[i].addEventListener(
    "dblclick",
    (e) => (e.target.style.textDecoration = "none")
  );
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
  });
  item[i].addEventListener("touchmove", (e) => {
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    console.log(x, y);
    if (x >= 10 && y >= 10) {
      e.target.style.textDecoration = "none";
    }
  });
}
