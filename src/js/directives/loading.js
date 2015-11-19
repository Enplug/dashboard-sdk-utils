/**
 * @ngdoc directive
 * @name loading
 * @module enplug.sdk.utils
 * @description easy showing/hiding of content based on boolean value or promise.
 *
 * @param condition {promise|boolean} the condition to wait for showing the loading indicator.
 */
angular.module('enplug.sdk.utils').directive('loading', [function() {
    'use strict';

    // Todo: error handling
    // Todo: watch promises that are re-assigned

    function isPromise(val) {
        return typeof val === 'object' && typeof val.then === 'function';
    }

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/loading.tpl',
        transclude: true,
        replace: false,
        scope: {
            isLoading: '=condition'
        },
        link: function(scope, element) {

            element.addClass('loading-wrapper');

            if (isPromise(scope.isLoading)) {
                scope.loading = true;
                scope.isLoading.then(function () {
                    scope.loading = false;
                }, function () {
                    scope.error = true;
                });
            } else {

                // watch the property
                scope.loading = scope.isLoading;
                scope.$watch('isLoading', function (val) {
                    scope.loading = val;
                });
            }
        }
    };
}]);
