import pool from "../database/config/config";
export class TaskModel {
  static async create({ data }) {
    const { id, task, status } = data;
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(
        "INSERT INTO tasks (id, task, status) VALUES (UUID_TO_BIN(?), ?, ?)",
        [id, task, status]
      );

      return result;
    } finally {
      connection.release();
    }
  }

  static async getAll({ status }) {
    const connection = await pool.getConnection();
    try {
      if (status !== undefined) {
        const [tasks] = connection.query(
          "SELECT BIN_TO_UUID(id), task, status FROM tasks WHERE status = ?;",
          [status]
        );

        return tasks;
      }

      const [tasks] = connection.query(
        "SELECT BIN_TO_UUID(id), task, status FROM tasks;"
      );

      return tasks;
    } finally {
      connection.release();
    }
  }

  static async update({ id, newData }) {
    const { task, status } = newData;
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(
        "UPDATE tasks SET task=?, status=? WHERE id=UUID_TO_BIN(?)",
        [task, status, id]
      );

      return result.affectedRows > 0;
    } finally {
      connection.release();
    }
  }

  static async delete({ id }) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(
        "DELETE FROM tasks WHERE id=UUID_TO_BIN(?);",
        [id]
      );
      // returns a boolean
      return result.affectedRows > 0;
    } finally {
      connection.release();
    }
  }
}
