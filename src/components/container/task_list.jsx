import React from 'react';
import TaskComponent from '../pure/task';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskList = () => {

    const defaultTask = new Task('Example', 'This is an example', false, LEVELS.BLOKING)
    
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header*/}
                    <div className='card-header p-3' >
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    {/* Card body*/}
                    <div className='card-body' style={{position:'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Level</th>
                                    <th scope='col'>Actions</th>
                                </tr>                                
                            </thead>
                            <tbody>
                                <TaskComponent task={defaultTask}></TaskComponent>
                            </tbody>
                            
                        </table>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}

export default TaskList;
