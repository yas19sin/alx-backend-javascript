const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        calculateNumberSpy.restore();
    });
});
