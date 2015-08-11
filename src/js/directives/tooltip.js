/**
 * @ngdoc directive
 * @name tooltip
 * @module enplug.sdk.utils
 *
 * @param tip {String} Path to tip to show from ToolTips constant.
 */
angular.module('enplug.sdk.utils').directive('tooltip', function (Tooltips) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/tooltip.tpl',
        replace: true,
        scope: true,
        link: function (scope, element, attrs) {

            // Get the tooltip config from Tips constant
            var tip = attrs.tip,
                config = _.get(Tooltips, tip) || {};

            // Default position
            if (typeof config.position !== 'string') {
                config.position = 'top center'; // default position
            }

            // Allow for passing in string tips without a path
            if (!config.text) {
                config.text = tip;
            }

            // Add external link indicator if this isn't a local link
            if (config.link && ~config.link.location.indexOf('http')) {
                element.find('a').attr('target', '_blank');
            }

            scope.config = config;
        }
    };
});
