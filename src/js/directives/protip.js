/**
 * Created by aleross on 7/14/15. Copyright (c) Enplug, Inc.
 */

/**
 * @ngdoc directive
 * @name proTip
 * @module enplug
 *
 * @param tip {String} Path to tip to show from ProTips constant.
 */
angular.module('enplug.sdk.utils').directive('proTip', function ($log, ProTips) {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'sdk-utils/protip.tpl',
        link: function (scope, element, attrs) {

            // Get the protip config from ProTip constant
            var path = attrs.tip,
                config = _.get(ProTips, path);
            if (_.isString(config)) {
                scope.config = {
                    tip: config
                };
            } else if (_.isObject(config)) {
                scope.config = config;
            } else {
                $log.error('Did not find pro tip config for path:', path);
                element.remove();
            }
        }
    };
});
