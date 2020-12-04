import { NextFunction, Request, Response } from 'express';
import models from '../models';
import jwt from 'jsonwebtoken';


const createBooking = (req, res) => {
    if (!req.body.pickupDate || !req.body.pickupLocation || !req.body.pickupTime || !req.body.carId) {
        return res.status(400).send({
            success: 'false',
            message: 'fill in all required fields.',
        });
    }
    const booking = {
        pickupLocation: req.body.pickupLocation,
        pickupDate: req.body.pickupDate,
        pickupTime: req.body.pickupTime,
        carId: req.body.carId,
        userId: req.user.id,
    };
    models.Booking.create(booking).then((booking) => {
        return res.status(201).send({
            success: 'true',
            message: 'Booking added successfully',
            data: booking,
        });
    });
}
export default { createBooking };
