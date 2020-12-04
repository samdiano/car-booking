import { NextFunction, Request, Response } from 'express';
import models from '../models';
import jwt from 'jsonwebtoken';

interface Car {
    firstName: string;
    lastName: string;
    email: string;
    id: Number;
}

const getCars = (req: Request, res: Response) => {
    const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!req.body.email) {
        return res.status(400).json({
            success: 'false',
            message: 'Email is required',
        });
    }
    if (!(req.body.email.match(emailValidate))) {
        return res.status(400).json({
            success: 'false',
            message: 'Please enter a valid email address',
        });
    }

    models.Car.findAll()
        .then(cars => {
            return res.status(200).json({
                success: 'true',
                message: 'Cars retrieved successfully',
                data: cars,
            })
        });

}

export default { getCars };