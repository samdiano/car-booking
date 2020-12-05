"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (function (req, res, next) {
    var token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({
            message: 'Access denied, no token provided'
        });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || '');
        req.user = decoded;
        next();
    }
    catch (exception) {
        res.status(400).json({
            message: 'Invalid token'
        });
    }
});
