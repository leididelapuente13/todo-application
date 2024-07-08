import express, { json } from "express";

const createApp = () => {
  const app = express();
  app.disable('x-powered-by');
  app.use(json());

  const port = process.env ?? 7070;

  app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`)
  );
};

export default createApp;
