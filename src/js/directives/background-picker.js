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
        scope: {
            imageData: '='
        },
        templateUrl: 'sdk-utils/background-picker.tpl',
        link: function (scope, element, attrs, arg) {
            /**
             * Checks whether the position button should be disabled.
             * @returns {boolean}
             */
            scope.isDisabled = function (position) {
                // TODO(michal): get this data from the caller of the directive
            	return false;
                var res = 1080 / 1920;

                if (!scope.imageData || !scope.imageData.url) {
                    return true;
                }

                if (position == 'center') {
                    return false;
                } else if (scope.imageData.bgSize == 'contain') {
                    if (position == 'top' || position == 'bottom') {
                        return res > scope.imageData.bgResolution;
                    } else if (position == 'left' || position == 'right') {
                        return res < scope.imageData.bgResolution;
                    } else {
                        return true;
                    }
                } else { // cover
                    if (position == 'top' || position == 'bottom') {
                        return res < scope.imageData.bgResolution;
                    } else if (position == 'left' || position == 'right') {
                        return res > scope.imageData.bgResolution;
                    } else {
                        return true;
                    }
                }

                return;
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