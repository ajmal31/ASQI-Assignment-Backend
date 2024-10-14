import mongoose from "mongoose";

const dbConnection = (URI: string | undefined) => {
    
  if (URI) {
    mongoose.connect(URI);

    mongoose.connection.once("open", () => {
      console.log("mongodb connected succesful");
    });
    mongoose.connection.on("error", () => {
      console.log(`error occured while connecting mongoose `);
    });
  }
};

export default dbConnection;
