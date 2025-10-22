import { useContext, useState } from "react";
import { deleteTaskRequest, getTasksRequest, createTaskRequest, findTaskRequest, updateTaskRequest } from "../api/taskService";
import { TaskContext } from "./TaskContext";



// custom hook para configurar el contexto
// evita usar las siguientes 2 lineas multiples veces: 
// import { TaskContext } from '../context/TaskContext.jsx'
// import { useContext } from 'react'

export const useTasks = ()=>{
    const context = useContext(TaskContext);
    if(!context){
        throw new Error("useTasks must be used within a TaskContextProvider")
    }
    return context;
}

export const TaskContextProvider = ({children})=>{

    const [tasks, setTasks] = useState([])
    // get
    const loadTasks = async () => {
        try {
            const response = await getTasksRequest();
            setTasks(response.data)
            console.log(response)
        } catch (error) {
            console.error(error)
        }  
    }
    // get one
    const findTask =async (id)=>{
        try {
            const response = await findTaskRequest(id)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    // create
    const createTask = async (task)=>{
        try {
            const response = await createTaskRequest(task)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            console.log(response)
            // luego de eliminar actualiza (filter) la lista de tareas existentes
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateTask = async (id, newTask)=>{
        try {
            const response = await updateTaskRequest(id, newTask)
            console.log(response);
            
        } catch (error) {
            console.error(error)

        }
    }
    return(
        // todos el sub-arbol de componentes debe estar dentro del proveedor de contexto
        <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask, findTask, updateTask }}>  
            {children}
        </TaskContext.Provider>
    )
}