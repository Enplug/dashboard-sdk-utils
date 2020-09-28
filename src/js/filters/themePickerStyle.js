angular.module('enplug.sdk.utils').filter('themePickerStyle', function() {

    function hexToRGB(color) {
        return color.match(/[A-Za-z0-9]{2}/g)
          .map(function(hexValue){
            return parseInt(hexValue, 16)
          });
    }

    return function(theme, backgroundImage) {

      theme.background.rgb = hexToRGB(theme.background.backgroundColor);
      theme.background.rgb2 = hexToRGB(theme.background.backgroundColor2);

      // Both image and color selected
      if (theme.background.backgroundTypes[0] &&
          theme.background.backgroundTypes[1] &&
          backgroundImage) {

              return  {
                  'Solid': {
                      'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                      theme.background.rgb[2] + ', ' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb[0] + ',' +
                      theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ')), url(' +
                      backgroundImage +')',
                      'background-repeat': 'no-repeat',
                      'background-position': 'center',
                      'background-size': 'cover'
                  },

                  'Vertical Gradient': {
                      'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                      theme.background.rgb[2] + ', ' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' +
                      theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 + ')), url(' +
                      backgroundImage +')',
                      'background-repeat': 'no-repeat',
                      'background-position': 'center',
                      'background-size': 'cover'
                  },

                  'Horizontal Gradient': {
                      'background': 'linear-gradient(-90deg, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                      ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 + ')), url(' +
                      backgroundImage + ')',
                      'background-repeat': 'no-repeat',
                      'background-position': 'center',
                      'background-size': 'cover'
                  },

                  'Radial Gradient': {
                    'background': 'radial-gradient(70vw at 50% 50%, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha2 +'), rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                    ',' + theme.background.rgb[2] + ','+ theme.background.backgroundAlpha +') , rgba(' + theme.background.rgb2[0] + ',' +
                     theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 +')), url(' +
                     backgroundImage +')',
                     'background-repeat': 'no-repeat',
                     'background-position': 'center',
                     'background-size': 'cover'
                  }
              }
      }  // Only color selected, Or both are selected but no background image has been uploaded yet
        else if(theme.background.backgroundTypes[0] ||
                !backgroundImage) {
                return {

                    'Solid': {
                      'background': 'rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ', ' + theme.background.backgroundAlpha + ')'
                    },

                    'Vertical Gradient': {
                      'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                      theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' +
                      theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ', ' + theme.background.backgroundAlpha2 + ')'
                    },

                    'Horizontal Gradient': {
                      'background': 'linear-gradient(-90deg, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                      ',' + theme.background.rgb2[2] + ', ' + theme.background.backgroundAlpha2 + ')'
                    },

                    'Radial Gradient': {
                      'background': 'radial-gradient(70vw at 50% 50%, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + '), rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ', ' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' +
                       theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ', ' + theme.background.backgroundAlpha2 +')'
                    }
                }

    } // Only image selected. No color selected
      else if (theme.background.backgroundTypes[1]) {

          return  {
              'Solid': {
                  'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                  theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb[0] + ',' +
                  theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha2 + ')), url(' +
                  backgroundImage +')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Vertical Gradient': {
                  'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                  theme.background.rgb[2] + ', ' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' +
                  theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 + ')), url(' +
                  backgroundImage +')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Horizontal Gradient': {
                  'background': 'linear-gradient(-90deg, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                  ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                  ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 + ')), url(' +
                  backgroundImage + ')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Radial Gradient': {
                'background': 'radial-gradient(70vw at 50% 50%, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha2 +'), rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                ',' + theme.background.rgb[2] + ','+ theme.background.backgroundAlpha +') , rgba(' + theme.background.rgb2[0] + ',' +
                 theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 +')), url(' +
                 backgroundImage +')',
                 'background-repeat': 'no-repeat',
                 'background-position': 'center',
                 'background-size': 'cover'
              }
          }
       }
    }
});
