import angular from 'angular'
import uiRouter from 'angular-ui-router';
import paymentsListComponent from './payments-list.component';

let paymentsListModule = angular.module('paymentsList', [
    uiRouter
])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('paymentsList', {
                url: '/',
                component: 'paymentsList'
            });
    })
    .component('paymentsList', paymentsListComponent)
    .name;

export default paymentsListModule;
