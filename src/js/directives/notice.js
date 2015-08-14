/**
 * @ngdoc directive
 * @name notice
 * @module enplug.sdk.utils
 * @description shows a notice message
 */
angular.module('enplug.sdk.utils').directive('notice', function () {
    'use strict';

    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        templateUrl: 'sdk-utils/alert.tpl',
        link: function (scope) {
            scope.notice = true;
        }
    }
});
