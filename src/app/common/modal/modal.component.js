import template from './modal.html';
//import controller from './modal.controller';
import './modal.scss';

let modalComponent = {
  restrict: 'E',
  bindings: { open: '<', onClose: '&' },
  template,
  transclude: true,
};

export default modalComponent;
