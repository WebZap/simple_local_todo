export const renderForm = (value) => {
    const todoList = document.querySelector('.todo-list');
    const render = `
         <li class="todo-item ">
            
            <span class"text">${value}</span>
            <button class="delete-button" id="deleteButtonElement">Delete</button>
        </li>`
    todoList.innerHTML += render;

    return render;
}