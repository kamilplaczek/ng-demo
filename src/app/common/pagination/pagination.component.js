import template from './pagination.html';
import controller from './pagination.controller';
import './pagination.scss';

let paginationComponent = {
  restrict: 'E',
  bindings: { onPageChange: '&', current: '<', total: '<' },
  controller,
  template
};

export default paginationComponent;
