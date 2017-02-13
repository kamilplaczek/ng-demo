import template from './pound-rating.html';
import './pound-rating.scss';

let poundRatingComponent = {
    restrict: 'E',
    bindings: { rating: '<' },
    template
};

export default poundRatingComponent;
