import React, { useEffect, useState } from 'react';
import TaskComponent from '../pure/task';
import { taskArray } from '../../data/taskData';
import TaskForm from '../pure/forms/taskForm';


const TaskList = () => {
    const[ tasks, setTasks] = useState(taskArray);
    const[loading, setLoading ] = useState(true)
    
   
    //Control ciclo de vida del componente:
    useEffect( () => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount');
        }
    })
    function deleteTask(){
        console.log('pincho deleteTask');
    }
    
    
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3' >
                        <h5>Your tasks:</h5>
                    </div>
                    {loading ? 'Loading...' : ''}
                    <div className='card-body' 
                         style={{position:'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col' className='p-3'>Title</th>
                                    <th scope='col' className='p-3'>Description</th>
                                    <th scope='col' className='p-3'>Actions</th>
                                    <th scope='col' className='p-3'>Level</th>
                                </tr>                                
                            </thead>
                            <tbody>
                                {taskArray.map((task, index) => {
                                    return( 
                                        <TaskComponent 
                                            task={task} 
                                            key={index} 
                                            taskToDelete={deleteTask}
                                            >
                                        </TaskComponent>
                                    )
                                })}
                                
                            </tbody>
                            
                        </table>
                        
                    </div>
                    
                </div>
                
            </div>
            <TaskForm>Task-Form</TaskForm>
            
        </div>
    );
}

export default TaskList;
