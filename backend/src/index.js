import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
import { url } from "./server.js";



dotenv.config({
    path: ".env"
})

connectDB()
    .then(() => {
        try {
            app.listen(process.env.PORT || 8000)
            console.log(`Server is listening on port ${process.env.PORT}`);
            // url()
            // .then((url) => {
            //     console.log(`Server is live at ${url}`);
            // })
            // .catch((err) => {
            //     console.log("Error while creating tunnel", err);
            // })

        } catch (error) {
            app.on("error", (error) => {
                console.log("Error", error)
                throw error
            })
        }
    })
    .catch((err) => {
        console.log("MongoDB connection Failed ", err);
    })