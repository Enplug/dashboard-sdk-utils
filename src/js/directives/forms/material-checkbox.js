/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 * @param label {String} The input label
 */
angular.module('enplug.sdk.utils').directive('materialCheckbox', ['$log', '$compile', 'GUID', function ($log, $compile, GUID) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide', 'ng-repeat'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-checkbox.tpl',
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {

            $element.addClass('material-checkbox');
            $scope.id = GUID.new(); // better to use name?
            $scope.label = $attrs.label;

            // Copy any wrapped html into checkbox label
            $transclude(function(clone) {
                if (clone) {

                    // Check to see if our transcluded HTML includes an input
                    var hasInput = false;
                    for (var i = 0; i < clone.length; i++) {
                        if (clone[i].nodeName.toLowerCase() == 'input') {
                            hasInput = true;
                        }
                    }

                    if (hasInput) {

                        // Use this input
                        $element.find('input').remove();
                        $element.find('label').prepend(clone);
                        $element.find('input').attr('id', $scope.id);
                        $element.find('input').attr('type', 'checkbox');
                    } else {

                        // Label
                        angular.element($element[0].querySelector('.checkbox-label')).append(clone);
                    }
                }
            });

            var input = $element.find('input')[0];

            // Copy attributes over to input
            angular.forEach($attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    $element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            var checkbox = $element.find('label')[0];
            $compile(checkbox)($scope);
        }
    };
}]);
