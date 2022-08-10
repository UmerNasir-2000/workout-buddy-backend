const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");
const Workouts = require("../models/workouts.model");

exports.fetchWorkouts = async (req, res) => {
  const workouts = await Workouts.find();
  res.status(StatusCodes.OK).json({ message: "GET /api/workouts", workouts });
};

exports.fetchWorkoutById = async (req, res) => {
  const { id } = req.params;
  const workout = await Workouts.findById(id);

  if (!mongoose.isValidObjectId(id))
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: `Invalid MongoDB Id.` });

  if (!workout)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: `workout with id = ${id} does not exist` });

  res
    .status(StatusCodes.OK)
    .json({ message: `GET /api/workouts/${id}`, workout });
};

exports.createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;
  const workout = await Workouts.create({ title, reps, weight });
  res.status(StatusCodes.OK).json({ message: "POST /api/workouts", workout });
};

exports.removeWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workouts.findByIdAndDelete(id);
    return res
      .status(StatusCodes.OK)
      .json({ message: `DELETE /api/workouts/${id}`, workout });
  } catch (error) {
    console.log("error :>> ", error);
  }
};

exports.updateWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;
  const { id } = req.params;
  try {
    const workout = await Workouts.findByIdAndUpdate(id, {
      title,
      reps,
      weight,
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: `PATCH /api/workouts/${id}`, workout });
  } catch (error) {
    console.log("error :>> ", error);
  }
};
