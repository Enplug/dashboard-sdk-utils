/**
 * @ngdoc directive
 * @name displayCounter
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('displayCounter', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            count: '=?',
            muteDanger: '=?',
            vertical: '=',
            disabled: '=?'
        },
        templateUrl: 'sdk-utils/display-counter.tpl',
        link: function (scope, element, attrs) {

            scope.muteDanger = 'muteDanger' in attrs;
            scope.checkDanger = function () {
                if ( !scope.muteDanger && scope.count <= 0 ) {
                    element.addClass('danger');
                }
            };
            scope.checkDanger();

            if ( 'vertical' in attrs && attrs.vertical === true ) {
                element.addClass('vertical');
            }
            if ( 'disabled' in attrs ) {
                element.addClass('disabled');
            }

            scope.$watch('count', function(){
                scope.checkDanger();
            });

        }
    };
});
