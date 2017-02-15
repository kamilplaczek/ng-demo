class PaymentsService {
    baseApiUrl = 'http://test-api.kuria.tshdev.io';

    constructor($http) {
        this.$http = $http;
    }

    getPayments(query = null, page = null, rating = null) {
        return this.$http.get(this.baseApiUrl, { params: { query, page, rating } });
    }
}

PaymentsService.$inject = ['$http'];
export default PaymentsService;
