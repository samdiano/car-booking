"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var bookings_1 = __importDefault(require("../controllers/bookings"));
var router = express_1.default.Router();
router.post('/bookings', bookings_1.default.createBooking);
router.get('/bookings', bookings_1.default.getBookings);
module.exports = router;
