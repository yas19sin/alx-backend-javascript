const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with correct arguments and log the correct message', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
