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
    <h1 className='text-5xl text-white font-bold text-center mb-4'>Task page</h1>
      {/* <div className='task-grid'> */}
      <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3'>
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