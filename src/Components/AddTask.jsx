import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid4} from 'uuid'
import { addTask } from '../features/task slice/Task-slice'
const AddTask = () => {
    const [description, setdescription] = useState('')
    const [status,setstatus] = useState('To Do')
    const [title , settitle] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const newTask = {
            id: uuid4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        settitle('')
        setdescription('')
        setstatus('To Do')
    }
   
  return (
    <div>
      <form action="" className='mb-6'
      onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Add new task</h2>
        <div className='mb-4'>
            <input type="text"
            placeholder='Task title'
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ' 
            required
            />
        </div>
        <div className='mb-4'>
            <textarea name="" id=""
            placeholder='task description'
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ' 
            rows='3'
            value={description}
            onChange={(e)=> setdescription(e.target.value)}
></textarea>
        </div>
        <div className='mb-4'>
            <select name="" id=""
            value={status}
            onChange={(e)=> setstatus(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ' 
>
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
</select>
        </div>
        <button
        type='submit'
        className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'
        >
            Add task
        </button>
      </form>
    </div>
  )
}

export default AddTask
