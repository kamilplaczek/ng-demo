import angular from 'angular';
import PaymentsList from './payments-list/payments-list';

let paymentsModule = angular.module('payments', [
  PaymentsList
]).name;

export default paymentsModule;
