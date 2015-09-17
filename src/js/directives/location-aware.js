/**
 * @ngdoc directive
 * @name locationAware
 * @module enplug.sdk.utils.directives
 *
 */
angular.module('enplug.sdk.utils').directive('locationAware', function ($location) {
    'use strict';

    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {

            function getPath() {
                var path = attrs.href || attrs.ngHref || attrs.locationAware;
                if (!path) {

                    // search for a child link
                    var anchor = element.find('a');
                    if (anchor) {
                        path = anchor.attr('href') || anchor.attr('ngHref');
                    }
                }
                return path;
            }

            function checkActive() {
                var path = getPath();
                if (path === $location.path()) {
                    element.addClass('active');
                } else {
                    element.removeClass('active');
                }
            }

            checkActive();

            // We need to update active class every time route changes
            scope.$on('$routeChangeSuccess', checkActive);

        }
    };
});
