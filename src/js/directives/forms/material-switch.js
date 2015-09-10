angular.module('enplug.sdk.utils').directive('materialSwitch', function () {
    'use strict';

    // Returns a JQLite object for the select element we transcluded, allowing us to
    // pick information from it
    function findInput(clone) {
        for (var i = 0; i < clone.length; i++) {
            if (clone[i].nodeName.toLowerCase() == 'input') {
                return angular.element(clone[i]);
            }
        }
    }

    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'sdk-utils/material-switch.tpl',
        scope: { model: '=' },
        link: function (scope, element, attrs, ctrl, transclude) {

            // Keeps track of dirty state, without adding dependency on a form
            scope.dirty = false;

            // If transcluding input, remove other input
            transclude(function (clone) {
                if (findInput(clone)) {
                    angular.element(element[0].querySelector('.default-input')).remove();
                }
            });
        }
    }
});
