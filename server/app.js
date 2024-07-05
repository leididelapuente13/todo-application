import express from "express";

const createApp = () => {
  const app = express();

  const port = process.env ?? 7070;

  app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`)
  );
};

export default createApp;
