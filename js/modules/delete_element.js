

export const deleteElement = () => {

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const todoItem = btn.closest('.todo-item');
            todoItem.parentNode.removeChild(todoItem);
        });
    });
};