/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 */
angular.module('enplug.sdk.utils').directive('materialRadio', ['$log', '$compile', function ($log, $compile) {
    'use strict';

    var ignoreAttributes = ['class', 'field'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-radio.tpl',
        link: function (scope, element, attrs) {

            var input = element.find('input')[0];

            scope.name = attrs.name;
            scope.value = attrs.value;
            element.removeAttr('name');
            element.removeAttr('value');

            $compile(input)(scope);
        }
    };
}]);
