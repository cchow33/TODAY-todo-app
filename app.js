// Select DOM elements
const addBtn = document.querySelector('.add-btn');
const input = document.getElementById('input');
const list = document.querySelector('.todo-list');
const clearAll = document.getElementById('clearAll');

addBtn.addEventListener('click', (e) => {
    if(input.value != ''){
        // Prevent browser from refreshing/form from submitting
        e.preventDefault();
        // Create a new task ('li')
        const task = document.createElement('li');
        task.innerHTML = input.value;
        list.appendChild(task);
        // Create delete button ('span')
        const remove = document.createElement('span');
        remove.innerHTML = '✓';
        task.appendChild(remove);
    }
    // Delete a task when user clicks '✓'
    const close = document.querySelectorAll('span');
    for (let i = 0; i < close.length; i++){
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                close[i].parentElement.style.display = 'none';
            }, 600);
        })
    }
    input.value = '';

    // Delete all tasksd
    clearAll.addEventListener('click', (e) => {
        console.log('Delete all tasks')
        list.innerHTML = ''; 
    })
});
