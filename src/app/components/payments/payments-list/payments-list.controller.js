class PaymentsListController {
    poundRatings = [];
    payments = [];
    selectedRating = null;
    query = null;
    currentPage = 1;
    totalPagesCount = 0;

    constructor(paymentsService) {
        this.name = 'paymentsList';
        this.paymentsService = paymentsService;
        this.getPayments();
        for (let rating = 1; rating <= 5; rating++) {
            this.poundRatings.push(rating);
        }
    }

    getPayments() {
        this.paymentsService
            .getPayments(this.query, this.currentPage - 1, this.selectedRating)
            .then(result => {
                this.payments = result.data.payments;
                this.totalPagesCount = result.data.pagination.total;
            });
    }

    onPageChange(page) {
        this.currentPage = page;
        this.getPayments();
    }

    onSearch() {
        this.currentPage = 1;
        this.getPayments();
    }

    onReset() {
        this.query = null;
        this.selectedRating = null;
    }
}

PaymentsListController.$inject = ['paymentsService'];
export default PaymentsListController;
