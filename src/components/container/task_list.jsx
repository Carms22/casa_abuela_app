import React from 'react';
import TaskComponent from '../pure/task';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskList = () => {

    const defaultTask = new Task('Example', 'This is an example', false, LEVELS.BLOKING)
    
    return (
        <div>
            <div>
                Your tasks:
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}

export default TaskList;
