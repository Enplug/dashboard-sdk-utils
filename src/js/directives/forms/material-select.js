/**
 * @ngdoc directive
 * @name materialSelect
 * @module enplug.sdk.utils
 * @description This directive creates isolate+transcluded scope, so remember to use $parent in values.
 * Write option sets using value:label as the key:value. E.g. Venue (system-friendly):Administrator (user-friendly)
 *
 * @param field {expression=} The model value to bind the input to.
 * @param label {String} Input label
 * @param name {String} Input name
 * @param options {String} ng-options setup
 * @param optionSet {Object} key-value of options
 * @param directives {Object} key:value of directives to assign to input.
 * @param required {boolean},
 */
angular.module('enplug.sdk.utils').directive('materialSelect', function () {
    'use strict';
    return {
        restrict: 'E',
        scope: {
            optionLabels: '=optionLabels'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-select.tpl',
        link: function (scope, element, attrs) {

            element.addClass('material-select');

            scope.label = attrs.label;
            element.removeAttr('label');

            scope.$watch('$parent.' + attrs.option, function (val) {
                if (typeof val !== 'undefined' && val !== null) {
                    element.addClass('selected');
                    if (scope.optionLabels) {
                        val = scope.optionLabels[val];
                    }
                    scope.label = val;
                }
            });
        }
    };
});
