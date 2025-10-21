import React from 'react'
import { Form, Formik } from 'formik'
import {createTaskRequest, createTaskRequestFetch} from '../api/taskService.js'

function TaskForm() {
    return (
        <div>
            <Formik // maneja el estado sin use state
                initialValues={{
                    title: "", // deben coincidir con el atributo name
                    description: ""
                }}
                onSubmit={async (values, actions)=>{
                    console.log(values)
                    try{
                        const response = await createTaskRequest(values)
                        console.log(response)
                        // limpia los campos
                        actions.resetForm()
                    }catch(error){
                        console.error(error);

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