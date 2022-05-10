"use strict";
const btnAdd = document.querySelector(".add");
const newTask = document.getElementById("taskinput");
const inputPrompt = document.querySelector(".head");
const newTaskItem = document.querySelector(".item");
let btnDelete;
const btnClear = document.querySelector(".clear");

btnAdd.addEventListener("click", function () {
  if (newTask.value === "") {
    inputPrompt.classList.add("prompt");
    inputPrompt.textContent = `You have not entered a new task`;
    setTimeout(function () {
      inputPrompt.textContent = "";
    }, 2000);
  } else {
    newTaskItem.innerHTML += `
    <div class="task">
    <span id="taskname">${newTask.value}</span>
    <button class="delete">
    <img src="./trash-can.svg" />
    </button>
    </div>
    `;
    newTask.value = "";
  }
  btnDelete = document.querySelectorAll(".delete");
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
});

btnClear.addEventListener("click", function () {
  newTaskItem.innerHTML = "";
});
//   <i class="fa-duotone fa-trash-list"></i>
