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
    console.log("Id ",params)
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
            <h2>{
                params.id ? "Edit Task" : "New Task"}</h2>
            <Formik // maneja el estado sin use state
                initialValues={task }
                enableReinitialize={true}
                onSubmit={async (values, actions)=>{
                    console.log(values)
                    if(params.id){
                        await updateTask(params.id, values)
                        navigate("/")
                    }else{
                        await createTask(values)
                        // limpia los campos
                        actions.resetForm()
                    }
                        

                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label >Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder='Write a title' 
                            onChange={handleChange} 
                            value={values.title} />
                        <label >Description</label>
                        <textarea 
                            name="description" 
                            placeholder='Write a description' 
                            rows="3" 
                            onChange={handleChange} 
                            value={values.description}></textarea>
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting? "Saving" : "Save"}
                            </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskForm