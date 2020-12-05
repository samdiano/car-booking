"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("../models"));
var getCars = function (req, res) {
    models_1.default.Car.findAll().then(function (cars) {
        return res.status(200).json({
            success: 'true',
            message: 'Cars retrieved successfully',
            data: cars
        });
    });
};
exports.default = { getCars: getCars };
