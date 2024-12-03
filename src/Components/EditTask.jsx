import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../features/task slice/Task-slice'

const EditTask = ({task}) => {
  const handleEdit = ()=>{
    dispatch(editTask({id: task.id,title,description,status}))
    setIsEdit(false)
  }
  const [description, setdescription] = useState(task.description)
    const [status,setstatus] = useState(task.status)
    const [title , settitle] = useState(task.title)
    const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      {isEdit ? (
        <div className='absolute bg-white p-4 border rounded-md shadow-lg z-10'>        <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Edit task</h2>
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
        <div className='flex justify-between'>
        <button
        onClick={handleEdit}
        type='submit'
        className=' p-2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'
        >
            Save
        </button>
        <button 
        onClick={()=> setIsEdit(false)}
        className='p-2 bg-red-800 text-white py-2 rounded-md hover:bg-indigo-500'>Cancel</button>
        </div></div>
      ):(
      <button
      onClick={()=> setIsEdit(true)}
       className='h-12 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-red-600'>Edit</button>
      )}
    </>
  )
}

export default EditTask
