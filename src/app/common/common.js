import angular from 'angular';
import PaginationComponent from './pagination/pagination.component';
import ModalComponent from './modal/modal.component';
import ClickOffDirective from './click-off/click-off.directive';

let commonModule = angular.module('app.common', [
])
.component('pagination', PaginationComponent)
.component('modal', ModalComponent)
.directive('clickOff', ClickOffDirective)
.name;

export default commonModule;
