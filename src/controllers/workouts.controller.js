const { StatusCodes } = require("http-status-codes");
const Workouts = require("../models/workouts.model");

exports.fetchWorkouts = async (req, res) => {
  const workouts = await Workouts.find();
  res.status(StatusCodes.OK).json({ message: "GET /api/workouts", workouts });
};

exports.createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;
  const workout = await Workouts.create({ title, reps, weight });
  res.status(StatusCodes.OK).json({ message: "POST /api/workouts", workout });
};
