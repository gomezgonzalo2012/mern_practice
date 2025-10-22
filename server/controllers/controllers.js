import { pool } from "../db.js";

export const getTasks = async (req, resp) => {
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM task ORDER BY created_at ASC"
    );
    resp.json(rows);
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, resp) => {
  try {
    console.log(req.params.id);
    const [result] = await pool.query(
      "SELECT * FROM task WHERE `id`= ?",
      req.params.id
    );
    if (result.length === 0) {
      return resp.status(404).json({ message: "Task not found" });
    }

    resp.json(result[0]);
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, resp) => {
  try {
    const { title, description } = req.body;
    // query returns a [ ]
    const [result] = await pool.query(
      "INSERT INTO task(title, description) VALUES (? , ?)",
      [title, description]
    );
    console.log(result);
    resp.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};

export const updateTasks = async (req, resp) => {
  try {
    const result = await pool.query("UPDATE task SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    console.log(result);
    return resp.json(result);
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, resp) => {
  try {
    //const task = await getSingleTask(req.params.id);
    const [result] = await pool.query(
      "DELETE FROM task WHERE id=?",
      req.params.id
    );
    console.log(result);
    if (result.affectedRows === 0) {
      return resp.status(404).json({ message: "Task not found" });
    }
    resp.json({
      message: "Elemento eliminado",
    });
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};
