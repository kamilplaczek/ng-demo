import template from './app.html';
import './app.scss';

let appComponent = {
  template,
  restrict: 'E',
  controller: function ($state, $rootScope) {
    "ngInject";
            $rootScope.$on("$stateChangeError", console.log.bind(console));

    console.log('app component');
    $state.go('home');
  }
};

export default appComponent;
