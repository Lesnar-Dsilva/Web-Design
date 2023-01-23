const form = document.querySelector(".input");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector("#groceryBtn");
const container = document.querySelector(".groceryContainer");
const list = document.querySelector(".groceryList");
const clearnBtn = document.querySelector(".clearBtn");

let editElement;
let editFlag = false;
let editID = "";

clearnBtn.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", setupItems);

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if ((value !== "") & !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("groceryItem");
    element.innerHTML = `<p class="itemTitle">${value}</p>
            <div class="buttonContainer">
              <button type="button" class="editBtn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="trashBtn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    const deleteBtn = element.querySelector(".trashBtn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".editBtn");
    editBtn.addEventListener("click", editItem);

    list.appendChild(element);
    displayAlert("item add to the list", "Success");
    container.classList.add("showContainer");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "Success");

    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "Danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert${action}`);
  }, 1000);
}

function clearItems() {
  const items = document.querySelectorAll(".groceryItem");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("showContainer");
  displayAlert("empty list", "Danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("showContainer");
  }
  displayAlert("item removed", "Danger");

  setBackToDefault();

  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;

  submitBtn.textContent = "edit";
}

function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return id;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("showContainer");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("groceryItem");
  element.innerHTML = `<p class="itemTitle">${value}</p>
            <div class="buttonContainer">
              <button type="button" class="editBtn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="trashBtn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  const deleteBtn = element.querySelector(".trashBtn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".editBtn");
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
}
