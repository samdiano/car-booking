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
var chai_http_1 = __importDefault(require("chai-http"));
var server_1 = __importDefault(require("../server"));
chai_1.default.use(chai_http_1.default);
describe('Users', function () {
    var validUser = {
        email: 'ksleigh1@china.com.cn'
    };
    var inValidFormat = {
        email: 'ksleigh1'
    };
    var wrongUser = {
        email: 'ksleigh1@upp.com'
    };
    it('Should login a user', function (done) {
        chai_1.default.request(server_1.default)
            .post('/api/v1/auth/login')
            .send(validUser)
            .end(function (err, res) {
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).to.have.property('message').equal('User logged in successfully');
            done();
        });
    });
    it('Should make sure email is entered', function (done) {
        chai_1.default.request(server_1.default)
            .post('/api/v1/auth/login')
            .send()
            .end(function (err, res) {
            chai_1.expect(res.status).to.equal(400);
            chai_1.expect(res.body).to.have.property('message').equal('Email is required');
            done();
        });
    });
    it('Should make sure email format is correct', function (done) {
        chai_1.default.request(server_1.default)
            .post('/api/v1/auth/login')
            .send(inValidFormat)
            .end(function (err, res) {
            chai_1.expect(res.status).to.equal(400);
            chai_1.expect(res.body).to.have.property('message').equal('Please enter a valid email address');
            done();
        });
    });
    it('Should check for a valid user', function (done) {
        chai_1.default.request(server_1.default)
            .post('/api/v1/auth/login')
            .send(wrongUser)
            .end(function (err, res) {
            chai_1.expect(res.status).to.equal(400);
            chai_1.expect(res.body).to.have.property('message').equal('Invalid Email');
            done();
        });
    });
});
