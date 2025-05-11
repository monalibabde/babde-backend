import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


//full database connection code

const connectDB = async () => {
    try{ 

       const COnnectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      // doing consolelog we will get good knowledge about the connectionInstance
        console.log(`\n MongoDB connected !! DB HOST: ${COnnectionInstance.connection.host}`);

    }
    catch(error) {
        console.log("MONGODB Connection failed", error);
        process.exit(1)
        
    }
}


export default connectDB