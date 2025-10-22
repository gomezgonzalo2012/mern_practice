import React, { useEffect } from 'react'
import TaskCard from '../components/TaskCard';
import { useTasks } from '../context/TaskContextProvider';


function TaskPage() {
  const {tasks, loadTasks} = useTasks([])

  useEffect(() => {
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