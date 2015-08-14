/**
 * @ngdoc directive
 * @name alert
 * @module enplug.sdk.utils
 * @description shows an alert message
 */
angular.module('enplug.sdk.utils').directive('alert', function () {
    'use strict';

    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        templateUrl: 'sdk-utils/alert.tpl'
    }
});
