const express = require("express");
const { fetchWorkouts } = require("../controllers/workouts.controller");

const router = express.Router();

router.route("/").get(fetchWorkouts).post();

router.route("/:id").get().patch().delete();

module.exports = router;
