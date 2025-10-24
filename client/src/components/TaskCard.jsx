import React from 'react'
import '../styles.css'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useTasks } from '../context/TaskContextProvider';
import { useNavigate } from 'react-router';
import { FaToggleOn } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa';





function TaskCard({ task }) {
  const { deleteTask, toggleTask } = useTasks()
  const navigate = useNavigate()
  return (
    <div className="bg-slate-400 rounded-md p-4"  >
      <div className='flex justify-between'>
        <h3 className='text-sm font-bold'> {task.title}</h3>
        {task.done ?
          <button className="cursor-pointer"onClick={() => toggleTask(task.id)}>
            ✅
          </button>
          :
          <button className="cursor-pointer"  onClick={() => toggleTask(task.id)}>
            ❌
          </button>}
      </div>
      <p className='text-xs'>{task.description}</p>
      <p className=''>{task.created_at}</p>

      <div className="flex gap-x-1 pt-2">
        <button className="cursor-pointer bg-red-500 p-2 rounded-md text-white" onClick={() => deleteTask(task.id)}><FaTrashAlt /></button>
        <button className="cursor-pointer bg-blue-500 p-2 rounded-md text-white" onClick={() => navigate(`/edit/${task.id}`)}><FaEdit /></button>
      </div>
    </div>
  )
}

export default TaskCard