const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with correct arguments', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        calculateNumberSpy.restore();
    });
});
