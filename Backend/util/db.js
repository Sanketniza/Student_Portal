/* 
      ^ This file is used to connect to the database.
      ^ In every module, we need to connect to the database. to do that, we will use this file.
      ^ 
*/

import mongoose from "mongoose";


const connectDB = async () => {
    try {
          await mongoose.connect(process.env.MONGO_URI);
          console.log("MongoDB connected successfully");
    } catch (error) {
          console.log(error);
    }
};

export default connectDB;

