import { connect, connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDb = () => {
   const mongodbUrl = String(process.env.MONGODB_URI);
   try {
      connect(mongodbUrl);
   
      const db = connection;
   
      db.once('open', () => {
         // eslint-disable-next-line
         console.log("Connected successfully to MongoDB");
      });
      return db;
   } catch (error) {
      console.error(error);
   }
}

export default connectToDb;   