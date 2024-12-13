import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv  from "dotenv";
import { app } from "./app.js";


dotenv.config({
    path:".env"
})

connectDB()
.then(() => {
    try {
        app.listen(process.env.PORT||8000)
        console.log(`Server is listening on port ${process.env.PORT}`);
    } catch (error) {
        app.on("error",(error) => {
            console.log("Error",error)
            throw error
         })
    }
 })
 .catch((err) => {
    console.log("MongoDB connection Failed ",err);
  })