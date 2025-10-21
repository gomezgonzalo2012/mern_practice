import express from "express";
import {PORT} from "./config.js"
import cors from "cors";
import taskRouter from "./routes/tasks.routes.js";
import router from "./routes/index.routes.js";



const app = express();
app.use(cors());
// permite serializar las peticiones a json()
app.use(express.json())
app.use(router);
app.use(taskRouter);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
