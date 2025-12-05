import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "restaurantDB",
        serverSelectionTimeoutMS: 30000,
        connectTimeoutMS: 30000,
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Database connection failed", err.message);
    });
};

export default dbConnection;