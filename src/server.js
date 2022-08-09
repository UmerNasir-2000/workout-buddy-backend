const express = require("express");
const morgan = require("morgan");
const workoutsRoute = require("./routes/workouts.route");

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/api/healthcheck", (req, res) =>
  res.status(200).json({ message: "API Working" })
);

app.use("/api/workouts", workoutsRoute);

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () =>
  console.log(`SERVER RUNNING ON http://localhost:${SERVER_PORT}/`)
);
