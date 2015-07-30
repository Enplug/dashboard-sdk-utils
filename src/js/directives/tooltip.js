/**
 * @ngdoc directive
 * @name tooltip
 * @module enplug.sdk.utils
 *
 * @param tip {String} Path to tip to show from ToolTips constant.
 */
angular.module('enplug.sdk.utils').directive('tooltip', ['Tooltips', '$log', function (Tooltips, $log) {
    'use strict';

    // Todo support no tooltip constant

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/tooltip.tpl',
        replace: true,
        scope: true,
        link: function ($scope, $element, $attrs) {

            // Get the tooltip config from Tips constant
            var path = $attrs.tip,
                config = _.get(Tooltips, path);
            if (_.isObject(config)) {
                if (!_.isString(config.position)) {
                    config.position = 'top left'; // default position
                }
                $scope.config = config;
            } else {
                $log.error('Did not find tooltip config for path:', path);
                $element.hide();
            }
        }
    };
}]);
