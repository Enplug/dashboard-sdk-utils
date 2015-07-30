/**
 * @ngdoc directive
 * @name dropdownToggle
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('dropdownToggle', function () {
   'use strict';
    return {
        link: function (scope, element) {

            element.addClass('dropdown-toggle');
            element.on('click', function () {
               scope.$apply(function () {
                  scope.$broadcast('dropdown:toggle');
               });
            });
        }
    }
});
