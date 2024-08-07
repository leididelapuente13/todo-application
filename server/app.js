import express, { json } from "express";
import { createTaskRouter } from "./routes/task.js";
import CorsConfig from "./middlewares/cors.js";
import cors from "cors";

const createApp = ({ TaskModel }) => {
  const app = express();
  app.disable("x-powered-by");
  app.use(json());
  app.use(cors(CorsConfig));
  const port = process.env.PORT ?? 7070;
  app.use("/tasks", createTaskRouter({ TaskModel }));
  app.get("/", (req, res) => res.json({ message: "Hello" }));
  app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`)
  );
};

export default createApp;
