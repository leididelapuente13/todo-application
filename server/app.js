import express, { json } from "express";
import corsMiddleware from "./middlewares/cors.js";
import { createTaskRouter } from "./routes/task.js";

const createApp = ({ taskModel }) => {
  const app = express();
  app.disable("x-powered-by");
  app.use(json());
  app.use(corsMiddleware());
  const port = process.env.PORT ?? 7070;
  app.use("/tasks", createTaskRouter({ taskModel }));
  app.get("/", (req, res) => res.json({ message: "Hello" }));
  app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`)
  );
};

export default createApp;
