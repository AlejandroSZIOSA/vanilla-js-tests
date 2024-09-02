const clearBtnEl = document.querySelector("#clearBtn");
const saveBtnEl = document.querySelector("#saveBtn");
const showBtnEl = document.querySelector("#showBtn");
const removeItemBtnEl = document.querySelector("#removeItemBtn");

let myArray = ["student1", "student2"];

const storedArray = JSON.parse(localStorage.getItem("myArray"));

if (localStorage.getItem("myArray")) {
  /* document.getElementById(
    "greeting"
  ).textContent = `Welcome back, ${storedName}!`; */
  handleGetArray();

  clearBtnEl.onclick = function () {
    handleRemoveAll();
  };

  removeItemBtnEl.onclick = function () {
    handleRemoveItem();
    /* handleGetArray(); */
  };
} else {
  /* const name = prompt("What is your name?"); */
  saveBtnEl.onclick = function () {
    handleAddItems("studentNew");
    handleAddItems("studentNew2");
    handleGetArray();
  };
  /* document.getElementById(
    "greeting"
  ).textContent = `Hello, ${storedName[0]}! Your name has been saved.`; */
}

showBtnEl.onclick = function () {
  handleGetArray();
};

function handleGetArray() {
  const array = JSON.parse(localStorage.getItem("myArray"));
  console.log(array);
}

function handleAddItems(item) {
  myArray.push(item);
  localStorage.setItem("myArray", JSON.stringify(myArray));
}

function handleRemoveItem() {
  const array = JSON.parse(localStorage.getItem("myArray"));
  myArray = array;

  myArray = myArray.filter((i) => i !== "student2");
  localStorage.setItem("myArray", JSON.stringify(myArray));
  console.log(myArray);
}

function handleRemoveAll() {
  localStorage.clear();
  console.log("All data storage removed");
}
