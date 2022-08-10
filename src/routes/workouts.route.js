const express = require("express");
const {
  fetchWorkouts,
  createWorkout,
  fetchWorkoutById,
  removeWorkout,
  updateWorkout,
} = require("../controllers/workouts.controller");
const validateResource = require("../middlewares/validate-resource.middleware");
const workoutsSchema = require("../schemas/workouts.schema");

const router = express.Router();

router
  .route("/")
  .get(fetchWorkouts)
  .post(validateResource(workoutsSchema), createWorkout);

router
  .route("/:id")
  .get(fetchWorkoutById)
  .patch(updateWorkout, validateResource(workoutsSchema))
  .delete(removeWorkout);

module.exports = router;
