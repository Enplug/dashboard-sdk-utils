/**
 * @ngdoc directive
 * @name locationAware
 * @module enplug.sdk.utils.directives
 *
 */
angular.module('enplug.sdk.utils').directive('locationAware', ['$location',
    function ($location) {
        return {
            restrict: 'A',
            replace: false,
            link: function ($scope, $element, $attrs) {

                var href = $attrs.href || $attrs.locationAware;

                function checkActive() {
                    if (!href) {
                        // search for a child link
                        var anchor = $element.find('a');
                        if (anchor) {
                            href = anchor.attr('href');
                        }
                    }
                    if (href === $location.path()) {
                        $element.addClass('active');
                    } else {
                        $element.removeClass('active');
                    }
                }

                checkActive();

                // We need to update active class every time route changes
                $scope.$on('$routeChangeSuccess', checkActive);

            }
        };
    }
]);
