const mongoose = require("mongoose");

const connectdb = async () => {
  // console.log("mongodb url is : ", `${process.env.DB_URL}`);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${process.env.DB_NAME}`
    );
    if (connectionInstance) {
      // console.log(connectionInstance);
      console.log("database connected successfully...!!");
    }
  } catch (error) {
    console.log("error connecting databse...", error);
    process.exit(1);
  }
};

module.exports = {
  connectdb,
};
