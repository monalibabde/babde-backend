// require('dotenv').config({path: './env'})

// import dotenv from "dotenv"
// // import mongoose from "mongoose";
// // import { DB_NAME } from "./constants";
// import connectDB from "./db/index.js";

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

// Now call connectDB() to initiate the MongoDB connection
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`@ server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
    
})




// 1st approach to connect db...........


// import express from "express";
// const app = express()



// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
          
//         application.on("error", (error) => {
//             console.log("ERR: ", error);
//             throw error
//         })

//         application.listen(process.env.PORT, () => {
//             console.log(`App is Listening on port ${process.env.PORT}`);
                       
//         })
//             } catch (error) {
//         console.error("Error: ", error)
//         throw err
//     }
// })

