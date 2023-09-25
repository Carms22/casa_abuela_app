import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {
    return (
        <tr className='fw-normal p-2'>
            <th className='task-name'>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                <span>{ task.completed ? 'COMPLETED' : 'PENDING' }</span>
            </td>
            <td className='align-middle'>
                <span> { task.level }</span>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
