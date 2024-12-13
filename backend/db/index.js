import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log('Connecting to Database');
        console.log(`${process.env.MONGODB_URI }`);
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`)
        console.log(`Successfully connected to the Database !!! DB host ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log('Connection to MongoDB failed',error);
        process.exit(1)
    }
}

export default connectDB