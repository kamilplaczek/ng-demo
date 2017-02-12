import template from './payments-list.html';
import controller from './payments-list.controller';
import './payments-list.scss';

let paymentsListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default paymentsListComponent;
