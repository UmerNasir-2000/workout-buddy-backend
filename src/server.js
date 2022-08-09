const express = require("express");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/api/healthcheck", (req, res) =>
  res.status(200).json({ message: "API Working" })
);

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () =>
  console.log(`SERVER RUNNING ON http://localhost:${SERVER_PORT}/`)
);
