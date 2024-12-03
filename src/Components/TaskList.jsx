import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, fetchTodo } from '../features/task slice/Task-slice';
import EditTask from './EditTask'
const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const error = useSelector((state) => state.tasks.error);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.tasks.loading);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);
    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }

    if (loading) {
        return <p>Tasks loading....</p>;
    }

    if (error) {
        return <p>There is an error: {error}</p>;
    }

    return (
        <div>
            <div>
                <h2>Tasks</h2>
                <ul className='space-y-4'>
                    {tasks.map((task) => (
                        // Add return statement here
                        <li className='bg-gray-50 p-4 rounded-md shadow-sm flex justify-between ' key={task.id}>
                            <div>
                                <h3 className='text-lg font-medium text-gray-800'>{task.title}</h3>
                                {task.description && <p className='text-gray-600'>{task.description}</p>}
                                <p className='mt-1 text-sm font-semibold'>Status: <span className='italic underline'>{task.status}</span></p>
                            </div>
                            <div className='flex space-x-2'>
                                <EditTask task={task}/>
                                <button 
                                onClick={()=>handleDelete(task.id)}
                                className='h-12 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-red-600'>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
 