// Select DOM
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.trash-btn');
const input = document.getElementById('input');
const todoList = document.querySelector(".todo-list");
const clearAll = document.getElementById('clearAll');
const sort = document.getElementById('sort');

// Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
// deleteBtn.addEventListener("click", deleteTodo);

// Functions

// (1) Add new todo task:
function addTodo(event) {
    console.log('Adding item')
    // Prevent browser from refreshing/form from submitting
    event.preventDefault();
    // Create a div called 'todoDiv'
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
        // Create Checked Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `<i class="fa fa-check"></i>`;
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        // Create a list called 'newTodo'
        const newTodo = document.createElement("li");
        newTodo.innerText = input.value;
        // Save to local - do this last
        // Save to local
        // saveLocalTodos(input.value);
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        input.value = "";
        // Create delete trashcan button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fa fa-trash"></i>`;
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  }

// (2) Delete a todo task:
function deleteCheck(e) {
    const item = e.target;
    console.log(e.target);

    if (item.classList[0] === "trash-btn") {
        console.log('deleting item')
        const todo = item.parentElement;
        todo.remove();
    }

        // // e.target.parentElement.remove();
        // const todo = .parentElement;
        // // todo.classList.add("fall");
        // // //at the end
        // removeLocalTodos(todo);
        // todo.addEventListener("transitionend", e => {
        // todo.remove();
        // });

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);
    
}

// Clear all tasks
clearAll.onclick = function clearTasks(){
    console.log('Delete all tasks')
    list.innerHTML = '';
}
}
