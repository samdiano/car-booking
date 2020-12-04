import  chai, { expect } from 'chai';
import jwt from 'jsonwebtoken';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);

describe('Users', () => {
    const validUser = {
        email: 'ksleigh1@china.com.cn'
    };

    const inValidFormat = {
        email: 'ksleigh1'
    };

    const wrongUser = {
        email: 'ksleigh1@upp.com'
    };

    it('Should login a user', (done) => {
        chai.request(server)
            .post('/api/v1/auth/login')
            .send(validUser)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message').equal('User logged in successfully');
                done();
            });
    });
    it('Should make sure email is entered', (done) => {
        chai.request(server)
            .post('/api/v1/auth/login')
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.have.property('message').equal('Email is required');
                done();
            });
    });
    it('Should make sure email format is correct', (done) => {
        chai.request(server)
            .post('/api/v1/auth/login')
            .send(inValidFormat)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.have.property('message').equal('Please enter a valid email address');
                done();
            });
    });
    it('Should check for a valid user', (done) => {
        chai.request(server)
            .post('/api/v1/auth/login')
            .send(wrongUser)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.have.property('message').equal('Email Invalid');
                done();
            });
    });
}
)