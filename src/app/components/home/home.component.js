import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: function () {
    console.log('test');
    this.user = { name: 'world' };
  }
};

export default homeComponent;
