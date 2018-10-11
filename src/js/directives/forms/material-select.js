/**
 * @ngdoc directive
 * @name materialSelect
 * @module enplug.sdk.utils
 * @description Wraps a select element, turning it into a material-select.
 */
angular.module('enplug.sdk.utils').directive('materialSelect', function ($timeout) {
    'use strict';

    // Returns a JQLite object for the select element we transcluded, allowing us to
    // pick information from it
    function findSelect(clone) {
        for (var i = 0; i < clone.length; i++) {
            if (clone[i].nodeName.toLowerCase() == 'select') {
                return angular.element(clone[i]);
            }
        }
    }

    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        templateUrl: 'sdk-utils/material-select.tpl',
        link: function (scope, element, attrs, ctrl, transclude) {

            element.addClass('material-select');

            // Take the label from an attribute instead of scope because it'll usually just be a simple
            // string that doesn't need to be bound to
            var placeholder = attrs.label;
            scope.label = placeholder;
            element.removeAttr('label');

            transclude(function (clone) {
                var select = findSelect(clone);
                if (select) {

                    // Watch for changes on our select element's model so that we can update the
                    // material-select label and selected state
                    scope.$watch('$parent.' + select.attr('ng-model'), function (val) {

                        if (typeof val !== 'undefined' && val !== null) {
                            element.addClass('selected');

                            // Wait until this digest cycle has completed so that the HTML <select> has
                            // updated its options
                            $timeout(function () {

                                // Access the label property on the currently-selected option from our select
                                // element
                                scope.label = select[0].options[select[0].selectedIndex].label
                            });
                        } else {
                          scope.label = placeholder;
                          element.removeClass('selected');
                        }
                    });
                } else {
                    console.warn('Warning: material-select requires a <select> element to be transcluded.');
                }
            });
        }
    };
});
