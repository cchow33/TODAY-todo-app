// Create an array to hold the todo list items
let todoItems = ['run', 'seek', 'hide'];

// Create a function that creates a new todo object based on the text that the user entered
// Push the new todo object into the array

function renderTodo(todo){
    // Select the first element with a class of '.list'
    const list = document.querySelector('.list');

    // select the current todo item in the DOM;
    // const item = document.querySelector(`data-keys='${todo.id}`);

    // Check if 'todo.checked' is true, if so, assign 'done' to 'isChecked'. If false then assign an empty string
    const isChecked = todo.checked ? 'done': '';
    
    // Create an 'li' element and assign it to 'node'
    const node = document.createElement('li');

    // Set the class attribute
    node.setAttribute('class', `todo-item ${isChecked}`);
    
    // Set the data-key attribute to the id of the todo
    node.setAttribute('data-key', todo.id);
    
    // Set the contents of the 'li' element created above 
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox"  id=>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <i class="fa fa-trash-o"></i>
    `;

    // If the item already exists in the DOM
    if (item){
        // replace it
        list.replaceChild(node, item);
    } else {
        // append it to the end of the list      
        list.append(node);
    }
}

function addTodo(text){
    const todo = {
        text,
        checked: false,
        id: Date.now(), 
    };

    todoItems.push(todo);
    console.log(todoItems);
}

// Select the form element
const form = document.querySelector('.js-form');

// Add a submit event listener
form.addEventListener('submit', event => {
   
    // Stop page from refreshing on form submission
    event.preventDefault();

    // Select the text input
    const input = document.getElementById('input');

    // Get the value of the input and remove any spaces;
    const text = input.value.trim();
    console.log(text)
    if (text !== ''){
        addTodo(text); // run function
        input.value = ''; // clear value of text input after running function
        input.focus(); // text input is focused so user can add > 1 item without have to refocus input - necesary??
    }   
});

// Listen for the item being checked off

// Select the entire list
const list = document.querySelector('.list');

// Add a click event listener to the list and its children
list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')){
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
});


// Clear text when user clicks in input box

input.onclick = function clear() {
    document.getElementById('input').value = '';
    placeholder = '';
    console.log('Clear placeholder')   
}
