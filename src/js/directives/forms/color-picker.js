/**
 * @ngdoc directive
 * @name colorPicker
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('colorPicker', ['$document', '$timeout', 'ColorTools', 'PositionTools', 
    function ($document, $timeout, ColorTools, PositionTools) {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            hex: '=?',
            rgb: '=?',
            alpha: '=?'
        },
        templateUrl: 'sdk-utils/color-picker.tpl',

        link: function (scope, element, attrs) {

            /** link dom elements **/
            var labelAlpha = angular.element(element[0].querySelector('.channel-alpha')),
                labelRed = angular.element(element[0].querySelector('.channel-red')),
                labelGreen = angular.element(element[0].querySelector('.channel-green')),
                labelBlue = angular.element(element[0].querySelector('.channel-blue')),
                labelHex = angular.element(element[0].querySelector('.hex-input'));

            var $palette = angular.element(element[0].querySelector('.palette'));

            var $swatch = angular.element(element[0].querySelector('.swatch'));
            scope.opened = false;

            var $hue = angular.element(element[0].querySelector('.hue'));
            $hue[0].$cursor = angular.element($hue[0].querySelector('.cursor'));

            var $alpha = angular.element(element[0].querySelector('.alpha-slider'));
            $alpha[0].$cursor = angular.element($alpha[0].querySelector('.cursor'));
            
            var $saturation = angular.element(element[0].querySelector('.saturation'))
            $saturation[0].$cursor = angular.element($saturation[0].querySelector('.cursor'))

            /** Format 'rgb' vs 'hex' **/
            if ( attrs.hasOwnProperty('showAsRgb') ) {
                scope.showAs = 'rgb';
            } else {
                scope.showAs = 'hex';
            }
            scope.toggleShowAs = function () {
                scope.showAs = scope.showAs == 'hex' ? 'rgb' : 'hex';
            };

            /** alpha support **/
            scope.noAlpha = attrs.hasOwnProperty('noAlpha');

            /** Test: 
            scope.hex = scope.hex.replace(/^#/, '')
            console.log('HEX:', scope.hex)
            setRGB( ColorTools.hex2rgb( parseInt(scope.hex, 16) ) );
            console.log('RGB:', scope.rgb)
            var hsb = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
            console.log('HSB:', hsb, hsb[0]*360, hsb[1]*100, hsb[2]*100)
            var backToRGB =  ColorTools.hsl2rgb(hsb[0], hsb[1], hsb[2] );
            console.log('BACK TO RGB:', backToRGB)
            var backToHex = ColorTools.rgb2hex(backToRGB[0], backToRGB[1], backToRGB[2])
            console.log('BACK TO HEX:', backToHex)
            **/

            /** initialize color hex/rgb and alpha **/
            if ( scope.hasOwnProperty('hex') ) { // We're dealing with HEX string input/output
                setHEX( scope.hex.replace(/^#/, '') );
                setRGB( ColorTools.hex2rgb( parseInt(scope.hex, 16) ) );
                var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            } else if ( scope.hasOwnProperty('rgb') ) { // We're dealing with RGB array input/output
                setRGB( scope.rgb );
                setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            } else {
                console.warn('[ColorPicker] Something insane just happened!')
            }

            /** alpha **/
            if ( !scope.hasOwnProperty('alpha') || isNaN(scope.alpha) ) {
                scope.alpha = 1.0;
            }
            setAlpha(scope.alpha);

            /** Handle Saturation Panel Drag Events **/  
            $saturation.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var top = Math.max(0, Math.min($saturation[0].clientHeight, event.pageY - PositionTools.getTop($saturation[0])))
                          , left = Math.max(0, Math.min($saturation[0].clientWidth, event.pageX - PositionTools.getLeft($saturation[0])));
                        setSaturation( left/$saturation[0].clientWidth );
                        setBrightness( 1 - top/$saturation[0].clientHeight );
                        setRGB( ColorTools.hsl2rgb(scope.hue, scope.saturation, scope.brightness) );
                        setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });


            /** Handle Hue Panel Drag Events **/
            $hue.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var left = Math.max(0, Math.min($hue[0].clientWidth, event.pageX - PositionTools.getLeft($hue[0])));
                        setHue( 1 - left/$hue[0].clientWidth );
                        setRGB( ColorTools.hsl2rgb(scope.hue, scope.saturation, scope.brightness) );
                        setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });


            /** Handle Alpha Panel Drag Events **/
            $alpha.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var left = Math.max(0, Math.min($alpha[0].clientWidth, event.pageX - PositionTools.getLeft($alpha[0])));
                        setAlpha( left/$alpha[0].clientWidth );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });

            function setHEX(val) {
                scope.hex = val;
                scope.hexInput = val;
            }

            function setRGB (val) {
                scope.rgb = val;
                setRed( val[0] );
                setGreen( val[1] );
                setBlue( val[2] );
            }

            function setRed(val) {
                scope.red = Math.round(val);
            }
            function setGreen(val) {
                scope.green = Math.round(val);
            }
            function setBlue(val) {
                scope.blue = Math.round(val);
            }

            function setHue(val) {
                scope.hue = val;
                $hue[0].$cursor.css( 'left', (1-scope.hue) * $hue[0].clientWidth + 'px' );
            }

            function setSaturation(val) {
                scope.saturation = val;
                $saturation[0].$cursor.css( 'left', scope.saturation * $saturation[0].clientWidth + 'px' );
            }

            function setBrightness(val) {
                scope.brightness = val;
                $saturation[0].$cursor.css( 'top', (1-val) * $saturation[0].clientHeight + 'px' );
            }
            
            function setAlpha(val) {
                scope.alpha = parseFloat(val.toFixed(2));
                scope.alphaPercent = parseFloat( (scope.alpha*100).toFixed(2));
                if ( !scope.noAlpha ) {
                    $alpha[0].$cursor.css( 'left', scope.alpha * $alpha[0].clientWidth + 'px' );
                }
            }

            /** Handle UI changes **/
            scope.$watch('alphaPercent', function(){
                setAlpha( labelAlpha[0].value / 100 );
            });

            scope.getHueColor = function () {
                var rgb = ColorTools.hsl2rgb( scope.hue, 1, 1);
                var hex = ColorTools.rgb2hex( rgb[0], rgb[1], rgb[2] );
                return hex;
            }

            scope.watchRGBInputChange = function () {
                setRGB( [scope.red, scope.green, scope.blue] );
                var hsl = ColorTools.rgb2hsl(scope.red, scope.green, scope.blue);
                setHEX( ColorTools.rgb2hex(scope.red, scope.green, scope.blue) );
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            };

            scope.watchHEXInputChange = function () {
                if ( labelHex[0].value.match(/[^0-9a-fA-F\.]/g) ) {
                    labelHex[0].value = labelHex[0].value.replace(/[^0-9a-fA-F\.]/g, '');
                }
                var fixed = labelHex[0].value.split(''), hex='';
                for ( var i=0, l=6; i<l; i++ ) {
                    hex += i < fixed.length ? fixed[i] : 0;
                }
                scope.hex = hex; // make sure not to call setHEX instead!
                setRGB( ColorTools.hex2rgb(parseInt(scope.hex, 16)) );
                var hsl = ColorTools.rgb2hsl(scope.red, scope.green, scope.blue);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            };

            /** Close on outter click **/
            var outterClickHandler = function (event) {
                var isInside = event.pageY > PositionTools.getTop($palette[0]) 
                    && event.pageY < PositionTools.getTop($swatch[0]) + $swatch[0].clientHeight + $palette[0].clientHeight
                    && event.pageX > PositionTools.getLeft($palette[0]) 
                    && event.pageX < PositionTools.getLeft($palette[0]) + $palette[0].clientWidth

                if ( !isInside ) {
                    return scope.$apply(function() {
                        scope.opened = false;
                        $document.unbind("mousedown", outterClickHandler);
                    });
                }
            };

            scope.toggle = function () {
                scope.opened = !scope.opened;
                if ( scope.opened ) {
                    $timeout(function () {
                        setAlpha(scope.alpha);
                        var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                        setHue(hsl[0]);
                        setSaturation(hsl[1]);
                        setBrightness(hsl[2]);
                    });
                    $document.bind("mousedown", outterClickHandler);
                } else {
                    $document.unbind("mousedown", outterClickHandler);
                }
            }

            element.on('$destroy', function() {
                $document.unbind("mousedown", outterClickHandler);
            });
        }
    }
}]);
