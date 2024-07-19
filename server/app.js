import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors";

const createApp = () => {
  const app = express();
  app.disable('x-powered-by');
  app.use(json());
  app.use(corsMiddleware());
  const port = process.env ?? 7070;

  app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`)
  );
};

export default createApp;
