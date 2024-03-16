// Select DOM elements
const addBtn = document.querySelector(".add-btn");
// const addBtn = document.querySelector(".add-btn");
const input = document.getElementById("input");
// const input = document.getElementById("input");
const list = document.querySelector(".todo-list");
// const list = document.querySelector(".todo-list");
const clearAll = document.getElementById("clearAll");
// const clearAll = document.getElementById("clearAll");

addBtn.addEventListener("click", (e) => {
  if (input.value != "") {
    e.preventDefault();
    const task = document.createElement("li");
    task.innerHTML = input.value;
    list.appendChild(task);
    // Create delete button ('span')
    const removeBtn = document.createElement("span");
    removeBtn.innerHTML = "✓";
    task.appendChild(removeBtn);
  }
  // Delete a task when user clicks '✓'
  const closeBtn = document.querySelectorAll("span");
  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", () => {
      closeBtn[i].parentElement.style.opacity = 0;
      setTimeout(() => {
        closeBtn[i].parentElement.style.display = "none";
      }, 600);
    });
  }

  input.value = "";

  // Delete all tasksd
  clearAll.addEventListener("click", (e) => {
    console.log("Delete all tasks");
    list.innerHTML = "";
  });
});
