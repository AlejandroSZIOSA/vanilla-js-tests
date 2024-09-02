const clearBtnEl = document.querySelector("#clearBtn");
const saveBtnEl = document.querySelector("#saveBtn");
const showBtnEl = document.querySelector("#showBtn");

const myArray = ["student1", "student2"];

const storedArray = JSON.parse(localStorage.getItem("myArray"));

if (localStorage.getItem("myArray")) {
  /* document.getElementById(
    "greeting"
  ).textContent = `Welcome back, ${storedName}!`; */
  handleGetArray();

  clearBtnEl.onclick = function () {
    localStorage.removeItem("myArray");
    console.log("removed");
  };
} else {
  /* const name = prompt("What is your name?"); */
  saveBtnEl.onclick = function () {
    handleAddItems("studentNew");
    handleAddItems("studentNew2");
  };
  /* document.getElementById(
    "greeting"
  ).textContent = `Hello, ${storedName[0]}! Your name has been saved.`; */
}

showBtnEl.onclick = function () {
  const storedArray = JSON.parse(localStorage.getItem("myArray"));
  console.log(storedArray);
};

function handleGetArray() {
  const array = JSON.parse(localStorage.getItem("myArray"));
  console.log(array);
}

function handleAddItems(item) {
  myArray.push(item);
  localStorage.setItem("myArray", JSON.stringify(myArray));
  // Retrieve and log the updated array
  const updatedArray = JSON.parse(localStorage.getItem("myArray"));
  console.log(updatedArray);
}
