import angular from 'angular';
import pagination from './pagination/pagination.component';
import modal from './modal/modal.component';
import clickOff from './click-off/click-off.directive';

let commonModule = angular.module('app.common', [
]).component('pagination', pagination).component('modal', modal).directive('clickOff', clickOff)

    .name;

export default commonModule;
