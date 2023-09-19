import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h1>
                Name: { task.name }
            </h1>
            <h2>
                Description: { task.description }
            </h2>
            <h3>
                State: { task.completed ? 'COMPLETED' : 'PENDING' }
            </h3>
            <h4>
                Level : { task.level }
            </h4>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
