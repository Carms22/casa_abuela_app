import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, taskToDelete} ) => {

    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>)
               case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)
                  
            case LEVELS.BLOKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)
            default:
                break;
        }
    }
    
    function taskCompletedIcon(){
        if(task.completed === true){
            return <i className='bi-toggle-on' style={{color:'green' }}></i>
        }else{
            return <i className='bi-toggle-off' style={{color:'grey' }}></i>
        }

    }
        
    return (
        <tr className='fw-normal p-2'>
            <th className='task-name'>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
            </td>
            <td className='align-middle'>
            {/* Execution f function to return badge elemente*/}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                <button className='p-1 m-3' >
                    <i className='bi-trash-fill' style={{color:'red' }} onClick={taskToDelete}></i>
                </button>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
