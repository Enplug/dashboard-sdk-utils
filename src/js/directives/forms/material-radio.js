/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 */
angular.module('enplug.sdk.utils').directive('materialRadio', ['$log', '$compile', function ($log, $compile) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide', 'ng-repeat'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        replace: true,
        templateUrl: 'sdk-utils/material-radio.tpl',
        link: function (scope, element, attrs) {

            element.addClass('material-radio');

            var input = element.find('input')[0];

            // Copy attributes over to input
            angular.forEach(attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            $compile(input)(scope);
        }
    };
}]);
