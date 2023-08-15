"use strict";

import { renderTask } from "./modules/render_task.js";
import { promise } from "./modules/fuc_render_ts.js";
import { deleteAllTasks } from "./modules/delete_all_tasks.js";
import { renderDeletBtn } from "./modules/render_del_btn.js";




promise.
    then(() => {
        renderTask();
        renderDeletBtn();
        deleteAllTasks();
    })





