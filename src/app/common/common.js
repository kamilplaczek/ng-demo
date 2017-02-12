import angular from 'angular';
import pagination from './pagination/pagination.component';

let commonModule = angular.module('app.common', [
]).component('pagination', pagination)

    .name;

export default commonModule;
