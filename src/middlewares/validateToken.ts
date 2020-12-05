import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({
            message: 'Access denied, no token provided'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
        req.user = decoded;
        next();
    } catch (exception) {
        res.status(400).json({
            message: 'Invalid token'
        });
    }
};
