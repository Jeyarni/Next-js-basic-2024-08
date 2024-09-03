import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = "mongodb://localhost:27017/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Databse connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
