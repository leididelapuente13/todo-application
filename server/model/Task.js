import mysql from "mysql2/promise";

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "1310",
  db: "todoAppDB"
};
const connectionString = process.env.DATABASE_URL ?? CONNECTION_CONFIG;
const connection = await mysql.createConnection(connectionString);

export class TaskModel {
  static async getAll({ status }) {
    if (status) {
      const [tasks] = connection.query(
        "SELECT id, task, status FROM tasks WHERE status = ?;",
        [status]
      );

      return tasks;
    }

    const [tasks] = connection.query(
      "SELECT id, task, status FROM tasks;"
    );

    return tasks;
  }

  static async delete({id}){
    const [result] = await connection.query(
        'DELETE * FROM tasks WHERE id=?;', [id]
    )

    return result.affectedRows > 0;
  }

  static async update({id, newData}){
    // const [result] = await 
  }
}
