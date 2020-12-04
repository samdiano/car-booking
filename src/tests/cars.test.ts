import chai, { expect } from 'chai';
import jwt from 'jsonwebtoken';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);

describe('Cars', () => {
    const token = jwt.sign({
        "id": 1,
        "firstName": "Kleon",
        "lastName": "Sleigh",
        "email": "ksleigh1@china.com.cn",
    }, process.env.JWT_SECRET || "", { expiresIn: '24h' })

    it('Should fetch all cars', (done) => {
        chai.request(server)
            .get('/api/v1/cars')
            .set("x-auth-token", token)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message').equal('Cars retrieved successfully');
                done();
            });
    });

    it('Should validate token', (done) => {
        chai.request(server)
            .get('/api/v1/cars')
            .set("x-auth-token", token + "oo")
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.have.property('message').equal('Invalid token');
                done();
            });
    });

    it('Should throw error for empty token', (done) => {
        chai.request(server)
            .get('/api/v1/cars')
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body).to.have.property('message').equal('Access denied, no token provided');
                done();
            });
    });

}
)