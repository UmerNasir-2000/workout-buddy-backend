const express = require("express");
const {
  fetchWorkouts,
  createWorkout,
  fetchWorkoutById,
  removeWorkout,
  updateWorkout,
} = require("../controllers/workouts.controller");

const router = express.Router();

router.route("/").get(fetchWorkouts).post(createWorkout);

router
  .route("/:id")
  .get(fetchWorkoutById)
  .patch(updateWorkout)
  .delete(removeWorkout);

module.exports = router;
