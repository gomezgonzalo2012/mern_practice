import { Router } from "express";
import { getTasks, createTasks, getTask, deleteTasks, updateTasks } from "../controllers/controllers.js";

const router = Router()

router.get("/tasks", getTasks)

router.get("/tasks/:id", getTask)

router.post("/tasks", createTasks)

router.put("/tasks/:id", updateTasks)

router.delete("/tasks/:id", deleteTasks);

export default router