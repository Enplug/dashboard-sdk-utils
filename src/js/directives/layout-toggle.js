angular.module('enplug.sdk.utils').directive('layoutToggle', function ($rootScope) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/layout-toggle.tpl',
        replace: true,
        link: function (scope) {

            if ($rootScope.showGridLayout !== false) {
                $rootScope.showGridLayout = true;
            }
            scope.toggleLayout = function () {
                $rootScope.showGridLayout = !$rootScope.showGridLayout;
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
