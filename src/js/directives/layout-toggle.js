angular.module('enplug.sdk.utils').directive('layoutToggle', function () {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/layout-toggle.tpl',
        replace: true,
        link: function (scope) {

            scope.showGridLayout = false;
            scope.toggleLayout = function () {
                scope.showGridLayout = !scope.showGridLayout;
            };
        }
    }
});

angular.module('enplug.sdk.utils').directive('gridLayout', function () {
    'use strict';

    return {
        link: function (scope, element) {
            scope.$watch('showGridLayout', function (bool) {
                if (bool) {
                    element.removeClass('ng-hide');
                } else {
                    element.addClass('ng-hide');
                }
            });
        }
    }
});

angular.module('enplug.sdk.utils').directive('tableLayout', function () {
    'use strict';

    return {
        link: function (scope, element) {
            scope.$watch('showGridLayout', function (bool) {
                if (bool) {
                    element.addClass('ng-hide');
                } else {
                    element.removeClass('ng-hide');
                }
            });
        }
    }
});
