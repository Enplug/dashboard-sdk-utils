/**
 * @ngdoc directive
 * @name dropdownMenu
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('dropdownMenu', function () {
    'use strict';
    return {
        link: function (scope, element) {

            element.addClass('dropdown-menu');

            // Close dropdown menu when we click on links in the dropdown menu that take us to a new page
            element.on('click', function (event) {
                var target = angular.element(event.target);
                if (target.attr('href') || target.parent().attr('href')) {
                    scope.$emit('dropdown:toggle');
                }
                scope.$apply(function () {
                    scope.$emit('dropdown:click');
                });
            });
        }
    }
});
