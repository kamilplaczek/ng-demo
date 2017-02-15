import angular from 'angular';
import PaymentsList from './payments-list/payments-list';
import PaymentsService from './payments.service'
import PoundRatingComponent from './pound-rating/pound-rating.component';
import PaymentDetailsComponent from './payment-details/payment-details.component';

let paymentsModule = angular.module('payments', [
  PaymentsList
]).service('paymentsService', PaymentsService)
  .component('poundRating', PoundRatingComponent)
  .component('paymentDetails', PaymentDetailsComponent)
  .name;

export default paymentsModule;
