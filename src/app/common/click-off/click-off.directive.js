let clickOffDirective = ($timeout) => {
    return {
        restrict: 'A',
        scope: { clickOff: '&' },
        link: (scope, element, attr) => {
            element.bind('click', function (event) {
                event.stopPropagation();
            });
            let body = angular.element(document).find('body');
            let bodyClick = (event) => {
                if (scope.clickOff) {
                    scope.$apply(() => {
                        scope.clickOff();
                    });
                }
            }
            scope.$on('$destroy', () => {
                body.unbind('click', bodyClick);
            });
            $timeout(() => {
                body.bind('click', bodyClick)
            });
        }
    }
}
clickOffDirective.$inject = ['$timeout'];
export default clickOffDirective;