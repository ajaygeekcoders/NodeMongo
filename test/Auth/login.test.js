const mocha = require('mocha');
const expect = require('chai').expect;
const app = require('../../app');
const request = require('supertest');

describe('Login API', function() {
    it('Should success if credential is valid', function(done) {
        request(app)
           .post('/api/auth/login')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ email: 'ajay.yadav@gmail.com', password: '0000' })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
    it('Should success if credential is not valid', function(done) {
        request(app)
           .post('/api/auth/login')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ email: 'ajay.yadav@gmail.com', password: '000' })
           .expect(400)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});