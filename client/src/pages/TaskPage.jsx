import React, { useEffect, useState } from 'react'
import { getTasks } from '../api/taskService'
import TaskCard from '../components/TaskCard';


function TaskPage() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const loadTasks = async () => {
      const response = await getTasks();
      setTasks(response.data)
      console.log(response)
    }
    loadTasks();
  }, [])


  
  
  return (
    <>
    <h1>Task page</h1>
    <div className='task-grid'>
        {tasks && tasks.length > 0  ? ( tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))) : (
        <h3>empty set</h3>

        )}
    </div>
    </>
   
  )
}

export default TaskPage