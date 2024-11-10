import mongoose from "mongoose";
const mongoUri = "mongodb://127.0.0.1:27017/portal";

const connectDb = async () => {
    try {
        const db = await mongoose.connect(mongoUri, {
            socketTimeoutMS: "3000",   
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS:500,
        });
        console.log("Database connected successfully");
        return db;
    } catch (e) {
        console.log("Error connecting to database:", e);
    }
};

export default connectDb;
