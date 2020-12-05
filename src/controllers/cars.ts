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
    models.Car.findAll().then((cars) => {
        return res.status(200).json({
            success: 'true',
            message: 'Cars retrieved successfully',
            data: cars
        });
    });
};

export default { getCars };
