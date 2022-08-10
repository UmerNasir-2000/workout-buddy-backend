const yup = require("yup");

let workoutsSchema = yup.object().shape({
  title: yup.string().required(),
  reps: yup.number().required(),
  weight: yup.number().required(),
});

module.exports = workoutsSchema;
