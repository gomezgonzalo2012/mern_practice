import express from "express";
import {PORT} from "./config.js"
import taskRouter from "./routes/tasks.routes.js";
import router from "./routes/index.routes.js";



const app = express();
// permite serializar las peticiones a json()
app.use(express.json())
app.use(router);
app.use(taskRouter);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
