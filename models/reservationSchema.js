import mongoose from "mongoose";
import { VirtualType } from "mongoose";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters"],
        maxLength: [30, "First name must contain at most 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters"],
        maxLength: [30, "Last name must contain at most 30 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: { validator:isEmail, message: "Please enter a valid email" },
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "Phone number must contain at least 10 characters"],
        maxLength: [15, "Phone number must contain at most 15 characters"],
    },
    time: {
        type: String,
        required: true,

    },
    date: {
        type: String,
        required: true,
    },
});


export const Reservation = mongoose.model("Reservation", reservationSchema);