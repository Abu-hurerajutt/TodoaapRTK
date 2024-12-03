import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'

function App() {
 
  return (
    <>
    <br />
    <br />
    <div className='w-[80%] mx-auto'>
      <h1 className='text-3xl mx-auto text-center text-purple-800 font-bold border-b-8 border-purple-800'>Task Management App with redux toolkit</h1>
    <br />

    <AddTask/>
     <TaskList/>
     </div>
    </>
  )
}

export default App
