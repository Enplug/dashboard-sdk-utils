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
            count: '=',
            muteDanger: '=',
            vertical: '=',
            disabled: '='
        },
        
        templateUrl: 'sdk-utils/display-counter.tpl',

        link: function (scope, element, attrs) {

            scope.muteDanger = 'muteDanger' in attrs && scope.muteDanger == true;

            scope.checkDanger = function () {
                if ( !scope.muteDanger && scope.count <= 0 ) {
                    element.addClass('danger');
                } else {
                    element.removeClass('danger');
                }
            };
            scope.checkDanger();

            if ( 'vertical' in scope && scope.vertical === true ) {
                element.addClass('vertical');
            }
            if ( 'disabled' in scope && scope.disabled === true ) {
                element.addClass('disabled');
            }

            scope.$watch('count', function(){
                scope.checkDanger();
            });

        }
    };
});
