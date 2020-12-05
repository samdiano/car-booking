"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../controllers/users"));
var router = express_1.default.Router();
router.post('/login', users_1.default.signIn);
module.exports = router;
