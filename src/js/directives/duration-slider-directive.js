/**
* @ngdoc directive
* @name durationSlider
* @module enplug.sdk.utils
*
* @param ratio {String Duration}
*/
angular.module('enplug.sdk.utils').directive('durationSlider', function ($document) {
    return {
        restrict: 'E',
        scope: {
            ratio: '=ratio'
        },
        templateUrl: 'sdk-utils/duration-slider.tpl',

        link: function (scope, element, attrs, arg) {
            var startX = 0,
            padding = 3,
            $barWidth = angular.element(element[0].querySelector('.duration-slider')),
            barWidth = $barWidth.prop('clientWidth'),
            $cursor = angular.element(element[0].querySelector('.slider-cursor')),
            cursorWidth = $cursor.prop('clientWidth'),
            scrollLength = barWidth - cursorWidth - padding,
            offset = 0;

            function setPosition() {
                offset += scope.ratio * scrollLength / 60;
                $cursor.css('margin-left', offset+'px');
            }

            setPosition();

            scope.formatLabel = function(val) {
                return val > -1 ? Math.round(val)+' secs' : '-';
            }

            return element.on('mousedown', function(event) {
                var mousemove, mouseup;

                mousemove = function(event) {

                    return scope.$apply(function() {
                        offset += (event.pageX - startX);
                        if ( offset < padding ) {
                            offset = padding;
                        } else if ( offset > scrollLength )  {
                            offset = scrollLength;
                        } else {
                            startX = event.pageX;
                        }
                        scope.ratio = Math.round(offset/scrollLength * 60);
                        $cursor.css('margin-left', offset+'px')
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    return $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                startX = event.pageX;
                $document.on('mousemove', mousemove);
                return $document.on('mouseup', mouseup);
            });
        }
    };
});
