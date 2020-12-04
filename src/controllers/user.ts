import { NextFunction, Request, Response } from 'express';
import models from '../models';
import jwt from 'jsonwebtoken';

interface user {
    firstName: string;
    lastName: string;
    email: string;
    id: Number;
}
const signIn = (req: Request, res: Response) => {
    const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!req.body.email) {
        return res.status(400).send({
            success: 'false',
            message: 'Email is required',
        });
    }
    if (!(req.body.email.match(emailValidate))) {
        return res.status(400).send({
            success: 'false',
            message: 'Please enter a valid email address',
        });
    }

    models.User.findOne({ where: { email: req.body.email } }).then((user: user) => {
        if (!user) {
            return res.status(404).json({ message: 'Invalid Email'});
        }
        const token = jwt.sign({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }, "secret", { expiresIn: '24h' });
        return res.status(200).send({
            success: 'true',
            message: 'User logged in successfully',
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token
        });
    }
    );

}

export default { signIn };