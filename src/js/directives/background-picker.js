/**
 * @ngdoc directive
 * @name backgroundPicker
 * @module enplug.sdk.utils
 *
 * @param ratio {String Duration}
 */

'use strict';



angular.module('enplug.sdk.utils').directive('backgroundPicker', function ($enplugDashboard) {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'sdk-utils/background-picker.tpl',
        link: function (scope, element, attrs, arg) {

            scope.imageData = {
            	url: 'http://keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg'
            };

            /**
             * Checks whether the position button should be disabled.
             * @returns {boolean}
             */
            scope.isDisabled(position) {
                if (position == 'center') {
                    return false;
                } else if (imageData.size == 'contain') {
                    if (position == 'top' || position == 'bottom') {
                        return res > imageData.resolution;
                    } else if (position == 'left' || position == 'right') {
                        return res < imageData.resolution;
                    } else {
                        return true;
                    }
                } else { // cover
                    if (position == 'top' || position == 'bottom') {
                        return res < imageData.resolution;
                    } else if (position == 'left' || position == 'right') {
                        return res > imageData.resolution;
                    } else {
                        return true;
                    }
                }

                return;
            }


            scope.promptImageUpload = function () {
                $enplugDashboard.upload().then(function (uploads) {
                    if (uploads.length > 0) {
                        imageData.url = url;
                        imageData.resolution = resolution;
                    } else {
                        $enplugDashboard.errorIndicator('Something went wrong, please try again.');
                    }
                });
            }
        }
    }
});