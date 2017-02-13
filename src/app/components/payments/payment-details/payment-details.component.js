import template from './payment-details.html';
import './payment-details.scss';

let paymentDetailsComponent = {
    restrict: 'E',
    bindings: { payment: '<' },
    template
};

export default paymentDetailsComponent;
