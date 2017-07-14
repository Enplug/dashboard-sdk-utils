angular.module('enplug.sdk.utils').filter('themePickerStyle', function() {

  return function(theme, backgroundImage) {
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
        else if( theme.background.backgroundTypes[0] &&
                (!theme.background.backgroundTypes[1] ||
                  theme.background.backgroundTypes[1] && !backgroundImage)) {

                return {

                    'Solid': {
                      'background': 'rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ')'
                    },

                    'Vertical Gradient': {
                      'background': 'linear-gradient(rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                      theme.background.rgb[2] + ') , rgb(' + theme.background.rgb2[0] + ',' +
                      theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ')'
                    },

                    'Horizontal Gradient': {
                      'background': 'linear-gradient(-90deg, rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ') , rgb(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                      ',' + theme.background.rgb2[2] + ')'
                    },

                    'Radial Gradient': {
                      'background': 'radial-gradient(70vw at 50% 50%, rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + '), rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ') , rgb(' + theme.background.rgb2[0] + ',' +
                       theme.background.rgb2[1] + ',' + theme.background.rgb2[2] +')'
                    }
                }
      // IMAGE ONLY SELECTED
    }
      else if ( !theme.background.backgroundTypes[0] &&
              theme.background.backgroundTypes[1] &&
              backgroundImage) {

          return  {
              'Solid': {
                  'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                  theme.background.rgb[2] + ',' + 0 + ') , rgba(' + theme.background.rgb[0] + ',' +
                  theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + 0 + ')), url(' +
                  backgroundImage +')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Vertical Gradient': {
                  'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                  theme.background.rgb[2] + ', ' + 0 + ') , rgba(' + theme.background.rgb2[0] + ',' +
                  theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + 0 + ')), url(' +
                  backgroundImage +')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Horizontal Gradient': {
                  'background': 'linear-gradient(-90deg, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                  ',' + theme.background.rgb[2] + ',' + 0 + ') , rgba(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                  ',' + theme.background.rgb2[2] + ',' + 0 + ')), url(' +
                  backgroundImage + ')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Radial Gradient': {
                'background': 'radial-gradient(70vw at 50% 50%, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha2 +'), rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                ',' + theme.background.rgb[2] + ','+ 0 +') , rgba(' + theme.background.rgb2[0] + ',' +
                 theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + 0 +')), url(' +
                 backgroundImage +')',
                 'background-repeat': 'no-repeat',
                 'background-position': 'center',
                 'background-size': 'cover'
              }
          }
       }
    }
});
