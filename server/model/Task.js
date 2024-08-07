import pool from "../database/config/config.js";

export class TaskModel {
  static async create({ data }) {
    const { task, status } = data;
    console.log(task, status);
    const connection = await pool.getConnection();
    const [uuidResult] = await connection.query("SELECT UUID() uuid;");
    const [{ uuid }] = uuidResult;
    try {
      const [result] = await connection.query(
        "INSERT INTO tasks (id, task, status) VALUES (UUID_TO_BIN(?), ?, ?)",
        [uuid, task, status]
      );

      const requestResult = result.affectedRows > 0;
      return {
        requestResult: requestResult
          ? "Task created successfully"
          : "Failed to create task",
        insertedData: requestResult ? data : undefined
      };
    } finally {
      connection.release();
    }
  }

  static async get({ status }) {
    console.log(status);
    const connection = await pool.getConnection();

    try {
      if (status !== undefined) {
        const [result] = await connection.query(
          "SELECT BIN_TO_UUID(id) as id, task, status FROM tasks WHERE status = (?)",
          [status]
        );
        return result;
      }

      const [result] = await connection.query(
        "SELECT BIN_TO_UUID(id) AS id, task, status FROM tasks"
      );
      return result;
    } finally {
      connection.release();
    }
  }

  static async update ({id, newData}){
    const connection = await pool.getConnection();
    const {task, status} = newData;
    try{
      const [result] = await pool.query('UPDATE tasks SET task=?, status=? WHERE id=(UUID_TO_BIN(?))', [task, status, id])
      return {taskWasUpdated: result.affectedRows > 0, updatedTask:{task: task, status:status}}
    }finally{
      connection.release();
    }
  }

  static async delete({id}){
    console.log(id);
    const connection = await pool.getConnection();
    try{
      const [result] = await connection.query('DELETE FROM tasks WHERE id=(UUID_TO_BIN(?))', [id]);
      return result.affectedRows > 0;
    }finally{
      connection.release();
    }
  }
}
