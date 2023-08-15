export const deleteAllTasks = () => {
    const todoList = document.querySelector('.todo-list');
    const placeTaskElement = document.getElementById('taskInput');
    const btnClear = document.querySelector('.button-clear');
    btnClear.addEventListener('click', () => {
        todoList.innerHTML = '';
        placeTaskElement.value = '';
    })

}