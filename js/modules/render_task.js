import { createTask } from './create_delete.js';



export const renderTask = () => {

    const addButtonElement = document.getElementById('addButton');
    const placeTaskElement = document.getElementById('taskInput');

    addButtonElement.addEventListener('click', () => {
        let value = placeTaskElement.value;

        if (placeTaskElement.value === '') {
            return;
        } else {
            createTask(value)
        }

        placeTaskElement.value = ''


    })




}
