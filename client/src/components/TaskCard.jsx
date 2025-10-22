import React from 'react'
import  '../styles.css'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useTasks } from '../context/TaskContextProvider';
import { useNavigate } from 'react-router';




function TaskCard({ task }) {
    const {deleteTask} = useTasks()
    const navigate = useNavigate()
  return (
      <div className='task-card'>
          <div className='card-header'>
              <h3 className='title'> {task.title}</h3>
              <div className="card-buttons">
                  <button className="delete" onClick={() => deleteTask(task.id)}><FaTrashAlt /></button>
                  <button className="edit" onClick={() => navigate(`/edit/${task.id}`)}><FaEdit /></button>
              </div>
          </div>
          <p>{task.description}</p>
          <p>{task.created_at}</p>
          <p>{task.done ? "✅" : "❌"}</p>
      </div>
  )
}

export default TaskCard