const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', function () {
    const url = 'http://localhost:7865';

    it('should return status code 200', function (done) {
        request.get(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', function (done) {
        request.get(url, function (error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
