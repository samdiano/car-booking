"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("../models"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = process.env.JWT_SECRET || '';
var signIn = function (req, res) {
    var emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!req.body.email) {
        return res.status(400).json({
            success: 'false',
            message: 'Email is required'
        });
    }
    if (!req.body.email.match(emailValidate)) {
        return res.status(400).json({
            success: 'false',
            message: 'Please enter a valid email address'
        });
    }
    models_1.default.User.findOne({ where: { email: req.body.email } }).then(function (user) {
        if (!user) {
            return res.status(400).json({ message: 'Invalid Email' });
        }
        var token = jsonwebtoken_1.default.sign({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }, secret, { expiresIn: '24h' });
        return res.status(200).send({
            success: 'true',
            message: 'User logged in successfully',
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: token
        });
    });
};
exports.default = { signIn: signIn };
