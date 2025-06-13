const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
    const baseUrl = 'http://localhost:7865';

    it('should return status code 200', (done) => {
        request.get(baseUrl, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request.get(baseUrl, (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {
    const baseUrl = 'http://localhost:7865';

    it('should return status code 200 when :id is a number', (done) => {
        request.get(`${baseUrl}/cart/12`, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status code 404 when :id is NOT a number', (done) => {
        request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
