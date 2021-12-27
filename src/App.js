
import './App.css';
import { useState } from "react";
import { TaskList } from './TaskList';

export default function APP(){
  const INTIAL_TASK = [{
    task: "Add a task"
  }, 
  {
    task: "Do the task"
  }
]
const [tasklist, setTaskList] = useState(INTIAL_TASK);
const [task, setTask] = useState("")

return (
  <div className='Task-Container'>

    <input value ={task}
        onChange={(event) => (setTask(event.target.value))}
        placeholder="Enter the task" />
        
        <button onClick={()=>{
          const newTask = {
            task,
          };
          setTaskList([...tasklist, newTask]);
        }}>Add Task</button>
        <div className='Task-content'>
          {tasklist.map(({task}, index)=><TaskList
          key ={index}
          task = {task}
          deleteButton = {<button 
            className="task-button"
            onClick={()=>{
              const deleteIndex = index;
              const remainingTask = tasklist.filter((tasklist, idx)=>(deleteIndex !== idx))
              setTaskList(remainingTask);
            }}
          >❌ </button>}/>)}
          
        </div>

  </div>
)
}

