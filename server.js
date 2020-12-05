"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var logging_1 = __importDefault(require("./config/logging"));
var config_1 = __importDefault(require("./config/config"));
var user_1 = __importDefault(require("./routes/user"));
var car_1 = __importDefault(require("./routes/car"));
var bookings_1 = __importDefault(require("./routes/bookings"));
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
var NAMESPACE = 'Server';
var router = express_1.default();
/** Log the request */
router.use(function (req, res, next) {
    logging_1.default.info("METHOD: [" + req.method + "] - URL: [" + req.url + "] - STATUS: [" + res.statusCode + "] - IP: [" + req.socket.remoteAddress + "]", NAMESPACE);
    next();
});
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use(body_parser_1.default.json());
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
router.use('/api/v1/auth', user_1.default);
router.use('/api/v1/', validateToken_1.default, car_1.default);
router.use('/api/v1/', validateToken_1.default, bookings_1.default);
/** Error handling */
router.use(function (req, res, next) {
    var error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
var httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, function () { return logging_1.default.info(NAMESPACE, "Server is running " + config_1.default.server.hostname + ":" + config_1.default.server.port); });
exports.default = router;
