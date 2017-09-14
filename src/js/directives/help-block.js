angular.module('enplug.sdk.utils').directive('helpBlock', function () {
    'use strict';
    return {
        templateUrl: 'sdk-utils/help-block.tpl',
        restrict: 'E',
        transclude: true,
        scope: {
          customization: '=?customization'
        },
        link: function (scope) {

        }
    }
});
