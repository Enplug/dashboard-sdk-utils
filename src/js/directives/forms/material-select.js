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
angular.module('enplug.sdk.utils').directive('materialSelect', ['$compile', '$parse', function ($compile, $parse) {
    'use strict';
    return {
        restrict: 'E',
        scope: {
            model: '=field',
            options: '=optionSet'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-select.tpl',
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {

            // Todo remove lodash dependency

            $element.addClass('material-select');

            var ignoreAttributes = ['class', 'label', 'directives', 'field', 'options', 'ng-if', 'ng-show', 'ng-hide'],
                select = $element.find('select')[0],
                directives = $parse($attrs.directives)($scope);

            $scope.label = $attrs.label;
            $element.removeAttr('label');

            // Copy attributes over to input
            angular.forEach($attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    $element.removeAttr(attr);
                    select.setAttribute(attr, value);
                }
            });

            // Copy custom directives
            angular.forEach(directives, function (value, directive) {
                select.setAttribute(directive, value);
            });
            $element.removeAttr('directives');

            // Get options via attribute string (ng-options) or transcluded hard-coded options
            if ($attrs.options) {
                select.setAttribute('ng-options', $attrs.options);
                $element.removeAttr('options');
            } else {
                // Transclude options
                $transclude(function (clone) {
                    $element.find('select').append(clone);
                });
            }

            $scope.$watch('model', function (val) {
                if (!_.isUndefined(val) && !_.isNull(val)) {
                    $element.addClass('selected');
                    $scope.label = $scope.options[val];
                }
            });

            // Register directives etc with Angular
            $compile(select)($scope);
        }
    };
}]);
