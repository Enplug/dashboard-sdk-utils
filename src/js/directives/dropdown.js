/**
 * @ngdoc directive
 * @name dropdown
 * @module enplug.sdk.utils
 *
 */
angular.module('enplug.sdk.utils').directive('dropdown', function ($document) {
    return {
        scope: true,
        link: function (scope, element) {
            element.addClass('dropdown-wrap');
            angular.element(element[0].querySelector('.root')).on('click', function () {
                if (element.hasClass('open')) {
                    element.removeClass('open');
                } else {
                    element.addClass('open');
                }
            });

            function closeDropdown(event) {
                if (!element[0].contains(event.target)) {
                    element.removeClass('open');
                }
            }

            $document.on('click', closeDropdown);

            scope.$on('$destroy', function () {
                $document.off('click', closeDropdown);
            });
        }
    }
});
