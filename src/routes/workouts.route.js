const express = require("express");
const {
  fetchWorkouts,
  createWorkout,
} = require("../controllers/workouts.controller");

const router = express.Router();

router.route("/").get(fetchWorkouts).post(createWorkout);

router.route("/:id").get().patch().delete();

module.exports = router;
