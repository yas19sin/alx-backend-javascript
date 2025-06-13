const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API integration tests', function () {
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

    describe('Cart page', function () {
        const baseUrl = 'http://localhost:7865';

        it('should return status code 200 when :id is a number', function (done) {
            request.get(`${baseUrl}/cart/12`, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 12');
                done();
            });
        });

        it('should return status code 404 when :id is NOT a number', function (done) {
            request.get(`${baseUrl}/cart/hello`, function (error, response) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('/available_payments endpoint', function () {
        const url = 'http://localhost:7865/available_payments';

        it('should return the correct payment methods object', function (done) {
            request.get(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body)).to.deep.equal({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
        });
    });

    describe('/login endpoint', function () {
        const url = 'http://localhost:7865/login';

        it('should return welcome message with username', function (done) {
            const options = {
                url: url,
                method: 'POST',
                json: {
                    userName: 'Betty'
                }
            };
            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome Betty');
                done();
            });
        });
    });
});
