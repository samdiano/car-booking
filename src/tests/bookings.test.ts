import chai, { expect } from 'chai';
import jwt from 'jsonwebtoken';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);

describe('BookingsUsers', () => {
    const validRequest = {
        pickupLocation: 'Ikeja',
        pickupTime: '5:30',
        pickupDate: '2020-06-19',
        carId: 3
    };
    const incompleteRequest = {
        pickupLocation: 'Ikeja',
        pickupDate: '2020-06-19',
        carId: 3
    };

    const token = jwt.sign(
        {
            id: 1,
            firstName: 'Kleon',
            lastName: 'Sleigh',
            email: 'ksleigh1@china.com.cn'
        },
        process.env.JWT_SECRET || '',
        { expiresIn: '24h' }
    );

    it('Should create a new booking', (done) => {
        chai.request(server)
            .post('/api/v1/bookings/create')
            .send(validRequest)
            .set('x-auth-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.have.property('message').equal('Booking added successfully');
                done();
            });
    });

    it('Should throw error for incomplete fields', (done) => {
        chai.request(server)
            .post('/api/v1/bookings/create')
            .send(incompleteRequest)
            .set('x-auth-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.have.property('message').equal('fill in all required fields.');
                done();
            });
    });

    it('Should get user bookings', (done) => {
        chai.request(server)
            .get('/api/v1/bookings')
            .set('x-auth-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message').equal('Booking retrieved successfully');

                done();
            });
    });
});
