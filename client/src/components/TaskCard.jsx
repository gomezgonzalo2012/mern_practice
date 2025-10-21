import React from 'react'
import  '../styles.css'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { deleteTask } from '../api/taskService';

const handleDelete = async (id) => {
    try {
        const response= await deleteTask(id)
        console.log(response)
    } catch (error) {
        console.error(error)
    } 
}

function TaskCard({ task }) {
  return (
      <div className='task-card'>
          <div className='card-header'>
              <h3 className='title'> {task.title}</h3>
              <div className="card-buttons">
                  <button className="delete" onClick={() => handleDelete(task.id)}><FaTrashAlt /></button>
                  <button className="edit" onClick={() => { }}><FaEdit /></button>
              </div>
          </div>
          <p>{task.description}</p>
          <p>{task.created_at}</p>
          <p>{task.done ? "❌" : "✅"}</p>
      </div>
  )
}

export default TaskCard