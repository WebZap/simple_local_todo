
import { deleteElement } from './delete_element.js';
import { renderForm } from './form_render.js';
import { markTask } from './mark_task.js';

export const createTask = (value) => {
    renderForm(value)
    deleteElement()
    markTask()

}