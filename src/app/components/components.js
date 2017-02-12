import angular from 'angular';
import Payments from './payments/payments';

let componentModule = angular.module('app.components', [
  Payments
]).name;

export default componentModule;
