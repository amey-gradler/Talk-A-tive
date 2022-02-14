const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async (url) => {
  try {
    const connection = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDb Connected : ${connection.connection.host}`.green.bold);
  } catch (error) {
    console.log(error.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
