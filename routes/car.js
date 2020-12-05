"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var cars_1 = __importDefault(require("../controllers/cars"));
var router = express_1.default.Router();
router.get('/cars', cars_1.default.getCars);
module.exports = router;
