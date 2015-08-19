/**
 * @ngdoc directive
 * @name dropdown
 * @module enplug.sdk.utils
 *
 */
angular.module('enplug.sdk.utils').directive('dropdown', function ($document, $timeout) {
    return {
        scope: true,
        link: function (scope, element) {

            element.addClass('dropdown-wrap');

            function closeDropdown() {
                element.addClass('closing');
                $timeout(function () {
                    element.removeClass('open');
                    element.removeClass('closing');
                    $document.off('click', closeDropdown);
                }, 300);
            }

            // Event emitted by the dropdown-toggle directive
            scope.$on('dropdown:toggle', toggle);
            scope.$on('dropdown:click', toggle);

            function toggle() {
                if (element.hasClass('open')) {
                    closeDropdown();
                } else {
                    open();
                }
            }

            function open() {
                element.addClass('open');
                $document.on('click', function (event) {
                    if (!element[0].contains(event.target)) {
                        closeDropdown();
                    }
                });
            }

            scope.$on('$destroy', function () {
                $document.off('click', closeDropdown);
            });
        }
    }
});
