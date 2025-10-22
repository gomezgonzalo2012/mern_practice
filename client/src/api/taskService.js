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

const getTasksRequest = async()=>( axios.get(URL))
const findTaskRequest = async (id) => axios.get(`${URL}/${id}`);
const deleteTaskRequest = async(id)=> (axios.delete(`${URL}/${id}`))
const updateTaskRequest = async (id, newTask) => axios.put(`${URL}/${id}`, newTask);
  
export {
  createTaskRequest,
  createTaskRequestFetch,
  getTasksRequest,
  findTaskRequest,
  deleteTaskRequest,
  updateTaskRequest
};