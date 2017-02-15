import template from './modal.html';
import './modal.scss';

let modalComponent = {
  restrict: 'E',
  bindings: { open: '<', onClose: '&' },
  template,
  transclude: true,
};

export default modalComponent;
