const mongoose = require("mongoose");

const connectDatabase = async () => {
  const { MONGO_URI } = process.env;

  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
