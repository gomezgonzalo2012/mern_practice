import axios from 'axios'
const URL = "http://localhost:3000/tasks"
const createTaskRequest = async ( {title, description} )=>{
    try {
        await axios.post(URL,{title: title, description: description} )
            .then((response )=>{
                console.log(response);
            })
            .catch(error=>{
                console.error(error)
            })
    } catch (error) {
        console.log(error)
    }
}
const createTaskRequestFetch = (task) => {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((response) => {
      if (response.ok) {
        return response.json;
      }
    })
    .then(response => console.log(response));
};

const getTasks = async()=>( axios.get(URL))
const deleteTask = async(id)=> (axios.delete(`${URL}/${id}`))
  
export { createTaskRequest, createTaskRequestFetch, getTasks, deleteTask };