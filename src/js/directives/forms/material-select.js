/**
 * @ngdoc directive
 * @name materialSelect
 * @module enplug.sdk.utils
 * @description Wraps a select element, turning it into a material-select.
 */
angular.module('enplug.sdk.utils').directive('materialSelect', function ($timeout) {
    'use strict';

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

            scope.label = attrs.label;
            element.removeAttr('label');

            transclude(function (clone) {
                var select = findSelect(clone);
                if (select) {

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
                        }
                    });
                } else {
                    console.warn('Warning: material-select requires a <select> element to be transcluded.');
                }
            });


        }
    };
});
