function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    } else {
        // Doing nothing when success is false, as per requirements
    }
}

module.exports = getPaymentTokenFromAPI;
