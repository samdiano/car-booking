"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("../models"));
var createBooking = function (req, res) {
    if (!req.body.pickupDate || !req.body.pickupLocation || !req.body.pickupTime || !req.body.carId) {
        return res.status(400).send({
            success: 'false',
            message: 'fill in all required fields.'
        });
    }
    var booking = {
        pickupLocation: req.body.pickupLocation,
        pickupDate: req.body.pickupDate,
        pickupTime: req.body.pickupTime,
        carId: req.body.carId,
        userId: req.user.id
    };
    models_1.default.Booking.create(booking)
        .then(function (booking) {
        booking.addUser(req.user.id);
    })
        .then(function () {
        return res.status(201).send({
            success: 'true',
            message: 'Booking added successfully',
            data: booking
        });
    });
};
var getBookings = function (req, res) {
    var id = req.user.id;
    models_1.default.User.findAll({
        include: [
            {
                model: models_1.default.Booking,
                required: false,
                attributes: ['id', 'pickupLocation', 'pickupTime', 'pickupDate'],
                through: { attributes: [] },
                include: [
                    {
                        model: models_1.default.Car,
                        as: 'car'
                    }
                ]
            }
        ],
        where: { id: id }
    }).then(function (booking) {
        return res.status(200).send({
            success: 'true',
            message: 'Booking retrieved successfully',
            data: booking
        });
    });
};
exports.default = { createBooking: createBooking, getBookings: getBookings };
