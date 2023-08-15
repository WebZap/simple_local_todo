export const promise = new Promise((resolve) => {
    setTimeout(() => {
        const todoContainer = document.querySelector('.div');
        todoContainer.innerHTML = `
        <h1 class="neon-text">ToDo List</h1>
        <div id="taskForm">
            <input type="text" id="taskInput" placeholder="Enter a task">
            <button id="addButton">Add Task</button>
        </div>`

        resolve(todoContainer);
    }, 2000)
})