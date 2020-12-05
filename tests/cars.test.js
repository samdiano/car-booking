"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importStar(require("chai"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var chai_http_1 = __importDefault(require("chai-http"));
var server_1 = __importDefault(require("../server"));
chai_1.default.use(chai_http_1.default);
describe('Cars', function () {
    var token = jsonwebtoken_1.default.sign({
        id: 1,
        firstName: 'Kleon',
        lastName: 'Sleigh',
        email: 'ksleigh1@china.com.cn'
    }, process.env.JWT_SECRET || '', { expiresIn: '24h' });
    it('Should fetch all cars', function (done) {
        chai_1.default.request(server_1.default)
            .get('/api/v1/cars')
            .set('x-auth-token', token)
            .end(function (err, res) {
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).to.have.property('message').equal('Cars retrieved successfully');
            done();
        });
    });
    it('Should validate token', function (done) {
        chai_1.default.request(server_1.default)
            .get('/api/v1/cars')
            .set('x-auth-token', token + 'oo')
            .end(function (err, res) {
            chai_1.expect(res.status).to.equal(400);
            chai_1.expect(res.body).to.have.property('message').equal('Invalid token');
            done();
        });
    });
    it('Should throw error for empty token', function (done) {
        chai_1.default.request(server_1.default)
            .get('/api/v1/cars')
            .end(function (err, res) {
            chai_1.expect(res.status).to.equal(401);
            chai_1.expect(res.body).to.have.property('message').equal('Access denied, no token provided');
            done();
        });
    });
});
