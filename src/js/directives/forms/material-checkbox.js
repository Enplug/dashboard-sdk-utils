/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 * @param label {String} The input label // todo this could just be transclusion?
 */
angular.module('enplug.sdk.utils').directive('materialCheckbox', ['$log', '$compile', 'GUID', function ($log, $compile, GUID) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-checkbox.tpl',
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {

            var input = $element.find('input')[0];

            $scope.id = GUID.new(); // better to use name?
            $scope.label = $attrs.label;
            // Todo update to allow for directive pass-through?
            if (!$scope.label) {
                $log.warn('WARNING: Material checkbox missing label.');
            }

            $element.addClass('material-checkbox');

            // Copy attributes over to input
            angular.forEach($attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    $element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            // Copy any wrapped html into checkbox label
            $transclude(function(clone) {
                angular.element($element[0].querySelector('.checkbox-label')).append(clone);
            });

            var checkbox = $element.find('label')[0];
            $compile(checkbox)($scope);
        }
    };
}]);
