/**
 * @ngdoc directive
 * @name statusButton
 * @module enplug.sdk.utils
 * @description easy showing/hiding of loading indicator in a button based on bool, promise, or function returned promise
 *
 * @param condition {function|promise|boolean} the condition to wait for showing the loading indicator.
 */
angular.module('enplug.sdk.utils').directive('statusButton', ['$log', '$timeout', function ($log, $timeout) {
    'use strict';

    // TODO: animate the icons a bit

    var showStatusDelay = 2000; // milliseconds to show success/error icon before resetting

    function isPromise(val) {
        return typeof val === 'object' && typeof val.then === 'function';
    }

    return {
        restrict: 'E',
        replace: true,
        scope: {
            condition: '=condition'
        },
        transclude: true,
        templateUrl: 'sdk-utils/status-button.tpl',
        link: function (scope, element, attrs) {

            function handlePromise(promise) {
                scope.isLoading = true;
                promise.then(function () {
                    scope.success = true;
                }, function () {
                    scope.error = true;
                }).finally(function () {
                    element[0].blur();
                    scope.isLoading = false;
                    $timeout(function () {
                        scope.success = false;
                        scope.error = false;
                    }, showStatusDelay);
                });
            }

            // Assign default classes
            if (!element.hasClass('btn')) {
                element.addClass('btn');
                element.addClass('btn-default');
            }

            // If function, bind to click
            if (typeof scope.condition === 'function') {
                element.bind('click', function () {
                    var promise = scope.condition();
                    if (isPromise(promise)) {
                        handlePromise(promise);
                    } else {
                        $log.warn('Status button function condition must return promise.');
                    }
                });
            // If promise, wait for it to complete
            } else if (isPromise(scope.condition)) {
                handlePromise(scope.condition);
            } else {
                // Assume boolean
                scope.isLoading = scope.condition;
                scope.$watch('condition', function (val) {
                    scope.isLoading = val;
                });
            }
        }
    }
}]);
