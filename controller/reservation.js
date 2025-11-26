import ErrorHandler from "../utils/errorHandler.js";
import Reservation from "../models/reservationModel.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill full reservation form", 400));
    }

    try {
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date,
        });
        res.status(201).json({
            success: true,
            message: "Reservation successful",
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
         const ValidationError= Object.values(error.errors).map(
            (err) => err.message
         );
         return next(new ErrorHandler(ValidationError.join(', '), 400));
         
        }
    }
};

