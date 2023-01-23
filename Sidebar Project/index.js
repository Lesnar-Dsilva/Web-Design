const toggleBtn = document.querySelector(".toggleBtn");

const closeBtn = document.querySelector(".closeBtn");

const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("hideSidebar")) {
    sidebar.classList.remove("hideSidebar");
  } else {
    sidebar.classList.add("hideSidebar");
  }
});

closeBtn.addEventListener("click", (e) => {
  sidebar.classList.add("hideSidebar");
});
