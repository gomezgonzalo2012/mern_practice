import { Router } from "express";
import { pool } from "../db.js";


const router = Router();

router.get("/ping", async(request, response)=>{
    const [rows] = await pool.query("SELECT 1+1 AS result") // desestructuramos el arreglo. propio de la libreria
    console.log(rows);
    response.json(rows)
})

export default router;