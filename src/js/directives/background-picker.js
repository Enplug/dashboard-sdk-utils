/**
 * @ngdoc directive
 * @name backgroundPicker
 * @module enplug.sdk.utils
 *
 * @param {Object} imageData
 * @param {number} screenWidth 
 * @param {number} screenHeight
 *
 * @description Component for choosing and positioning a background image.
 */

'use strict';



angular.module('enplug.sdk.utils').directive('backgroundPicker', function ($enplugDashboard) {
    return {
        restrict: 'E',
        scope: {
            imageData: '=',
            screenWidth: '=',
            screenHeight: '='
        },
        templateUrl: 'sdk-utils/background-picker.tpl',
        link: function (scope, element, attrs, arg) {
            /**
             * Checks whether the position button should be disabled.
             * @returns {boolean}
             */
            scope.isDisabled = function (position) {
                var screenRes = scope.screenWidth / scope.screenHeight;
                var imageRes = scope.imageData.bgWidth / scope.imageData.bgHeight;

                if (!scope.imageData || !scope.imageData.bgUrl) {
                    return true;
                }

                if (position == 'center') {
                    return false;
                } else if (scope.imageData.bgSize == 'contain') {
                    if (position == 'top' || position == 'bottom') {
                        return screenRes > imageRes;
                    } else if (position == 'left' || position == 'right') {
                        return screenRes < imageRes;
                    } else {
                        return true;
                    }
                } else { // cover
                    if (position == 'top' || position == 'bottom') {
                        return screenRes < imageRes;
                    } else if (position == 'left' || position == 'right') {
                        return screenRes > imageRes;
                    } else {
                        return true;
                    }
                }

                return false;
            }


            scope.promptImageUpload = function () {
                $enplugDashboard.upload().then(function (uploads) {
                    if (uploads.length > 0) {
                    	var img = uploads[0];
                        scope.imageData.bgUrl = img.url;
                        scope.imageData.bgResolution = img.width / img.height;
                        scope.imageData.bgWidth = img.width;
                        scope.imageData.bgHeight = img.height;
                    } else {
                        $enplugDashboard.errorIndicator('Something went wrong, please try again.');
                    }
                });
            }
        }
    }
});