import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { useTasks} from '../context/TaskContextProvider.jsx'
import { useNavigate, useParams } from 'react-router'


function TaskForm() {
    // usando custom hook
    const { createTask, findTask, updateTask } = useTasks()
    // util cuando se esta editando
    const [task, setTask] = useState({
        title: "",
        description: ""
    })
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        const loadTask =async (id)=>{
            const retrievedTask = await findTask(id)
            console.log(retrievedTask);
            setTask({
                title: retrievedTask.title,
                description: retrievedTask.description
            })
        }
        if(params.id){
            loadTask(params.id)
        }
    },[params.id])
    return (
        <div>
            <h1 className='text-xl uppercase text-center text-white font-bold mb-2' >{
                params.id ? "Edit Task" : "New Task"}</h1>
            <Formik // maneja el estado sin use state
                initialValues={task }
                enableReinitialize={true}
                onSubmit={async (values, /*actions*/)=>{
                    console.log(values)
                    if(params.id){
                        await updateTask(params.id, values)
                        navigate("/")
                    }else{
                        await createTask(values)
                        navigate("/")
                        // limpia los campos
                        //actions.resetForm()
                    }
                        

                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto'>
                        <label className='block'>Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder='Write a title' 
                            onChange={handleChange} 
                            value={values.title} 
                            className='bg-amber-200 px-2 py-1 rounded-sm w-full'/>
                        <label className='block'>Description</label>
                        <textarea 
                            name="description" 
                            placeholder='Write a description' 
                            rows="3" 
                            onChange={handleChange} 
                            value={values.description}
                             className='bg-amber-200 px-2 py-1 rounded-sm w-full'></textarea>
                        <button className='block bg-indigo-500 rounded-md px-2 py-1 text-white w-full' type='submit' disabled={isSubmitting}>
                            {isSubmitting? "Saving" : "Save"}
                            </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskForm