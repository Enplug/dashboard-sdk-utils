/**
 * @ngdoc directive
 * @name colorPicker
 * @module enplug.sdk.utils
 * @description requires jQuery and colpick.js
 *
 * @param ngModel {expression=} The model value to bind the color hex value to.
 */
angular.module('enplug.sdk.utils').directive('colorPicker', [function () {
    'use strict';
    return {
        require: 'ngModel',
        transclude: true,
        replace: true,
        scope: {
            hex: '=ngModel'
        },
        templateUrl: 'sdk-utils/color-picker.tpl',
        link: function (scope, element, attr, ngModel) {
            var
                /**
                 * instance of color picker return from initialization
                 * @type {Object}
                 */
                colorPicker,

                /**
                 * default options for color picker plugin
                 * @type {Object}
                 */
                defaultOptions = {
                    onChange: onChange,
                    onSubmit: onSubmit,
                    layout: 'hex'
                };

            /**
             * wrapper for onChange events, intercepts and calls specified function
             * @param hsb
             * @param hex
             * @param rgb
             * @param el
             * @param bySetColor
             */
            function onChange(hsb, hex, rgb, el, bySetColor) {
                // handle on change
                scope.$apply(function () {
                    ngModel.$setViewValue(hex);
                });

                // call user-supplied fn if exists
                options._onChange && options._onChange.apply(this, arguments);
            }

            /**
             * wrapper for onSubmit events, intercepts to update model and calls user-supplied function
             * @param hsb
             * @param hex
             * @param rgb
             * @param el
             * @param bySetColor
             */
            function onSubmit(hsb, hex, rgb, el, bySetColor) {
                // hide on submit
                colorPicker.colpickHide();

                scope.$apply(function () {
                    ngModel.$setViewValue(hex);
                });

                // call user-supplied fn if exists
                options._onSubmit && options._onSubmit.apply(this, arguments);
            };

            // get user configuration
            var options = scope.$eval(attr.colorPicker) || {};

            // override onChange fn
            if (options.onChange) {
                options._onChange = angular.copy(options.onChange);
                delete options.onChange;
            }

            // override onSubmit fn
            if (options.onSubmit) {
                options._onSubmit = angular.copy(options.onSubmit);
                delete options.onSubmit;
            }

            // extend options, instantiate plugin
            options = angular.extend(defaultOptions, options);
            colorPicker = $(element).colpick(options);
        }
    }
}]);
