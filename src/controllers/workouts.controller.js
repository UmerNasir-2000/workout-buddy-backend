const { StatusCodes } = require("http-status-codes");

exports.fetchWorkouts = (req, res) => {
  res.status(StatusCodes.OK).json({ message: "GET /api/workouts" });
};
