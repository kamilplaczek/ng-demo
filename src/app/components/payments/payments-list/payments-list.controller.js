class PaymentsListController {
    poundRatings = [];
    payments = [];
    selectedRating = null;
    query = null;
    currentPage = 1;
    totalPagesCount = 0;
    isDetailsModalOpen = false;
    selectedPayment = null;

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
                this.totalPagesCount = result.data.pagination ? result.data.pagination.total : 1;
            }, err => {
                this.totalPagesCount = 1;
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

    onPaymentClick(payment) {
        this.selectedPayment = payment;
        this.isDetailsModalOpen = true;
    }

    onDetailsClose() {
        this.selectedPayment = null;
        this.isDetailsModalOpen = false;
    }
}

PaymentsListController.$inject = ['paymentsService'];
export default PaymentsListController;
