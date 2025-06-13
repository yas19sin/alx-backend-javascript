const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        consoleSpy.restore();
    });

    it('should log "The total is: 120" and be called once for inputs 100 and 20', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('should log "The total is: 20" and be called once for inputs 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});
