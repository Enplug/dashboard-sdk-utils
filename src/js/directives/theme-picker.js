/**
* @ngdoc directive
* @name themePicker
* @module enplug.sdk.utils
*
* @param selectedTheme {Object selected theme}
* @param selectedTheme {Object default or new theme to use as templatee}
* @param themeDefinition {Object constant of theme sections}
* @param customThemes {Array of saved custom themes}
* @param enplugThemes {Array of default enplug themes}
* @param asset {Object current asset}
*/
angular.module('enplug.sdk.utils').directive('themePicker', function ($document, $enplugDashboard, $enplugAccount, gettextCatalog, $filter, $route) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedTheme: '=',
            defaultTheme: '=',
            customThemes: '=',
            enplugThemes: '=',
            themeDefinition: '=',
            appUrl: '=',
            asset: '='
        },
        templateUrl: 'sdk-utils/theme-picker.tpl',

        link: function (scope, element, attrs, arg) {

            // Method to select theme
            scope.selectTheme = function( theme ) {

                if( typeof theme.Value == 'string' ) {
                    theme.Value = JSON.parse(theme.Value);
                }
                scope.selectedTheme = theme;
                scope.asset.ThemeId = theme.Id;
            }
            // Removing theme
            scope.removeTheme = function( theme ) {
                $enplugDashboard.openConfirm({
                    title: 'Delete "' +  theme.Name + '" ?',
                    text: 'Are you sure you want to cancel the changes you\'ve made? This action is not recoverable.',
                    confirmText: 'Delete',
                    cancelText: 'Cancel'
                }).then(function(){

                    $enplugAccount.deleteTheme(theme.Id);

                    var themeIndex = scope.customThemes.indexOf(theme);

                    if (themeIndex > -1) {
                        scope.customThemes.splice(themeIndex, 1);
                        scope.asset.ThemeId = null;
                        // Select default theme after one has been deleted
                        // scope.selectTheme( $filter('themeFilter')(scope.enplugThemes, 'Name', 'Grape') );
                    }
                });
            }

            // Creating new theme
            scope.createNewTheme = function() {

                saveTheme(scope.defaultTheme)
                     .then( function(newTheme) {
                         scope.customThemes.push(newTheme);
                         scope.selectTheme(newTheme);
                     });
            }
            // Copying default theme values
            scope.copyTheme = function( theme ) {
                var copy = scope.defaultTheme;
                copy.Name = gettextCatalog.getString('Copy of {{themeName}}', {themeName: theme.Name});
                copy.Value = theme.Value;

                saveTheme(copy)
                     .then( function(newTheme) {
                         scope.customThemes.push(newTheme);
                         scope.selectTheme(newTheme);

                     });
            }
            // Editing theme
            scope.editTheme = function( theme ) {

                saveTheme(theme)
                     .then( function(theme) {

                         var themeIndex = scope.customThemes.indexOf(theme);
                         var updatedTheme = angular.copy(theme);
                         scope.customThemes.splice(themeIndex, 1, updatedTheme);
                         scope.selectTheme(updatedTheme);

                     });
            }
            // Filtering background style for themes
            scope.filterStyle = function( theme ) {
                var themeContent = theme.Value.content;
                // Prevents undefined error if creating new theme is delayed before
                if( themeContent ) {
                    var style = $filter('themePickerStyle')(themeContent, themeContent.background.backgroundImage);
                    console.log(style);
                    return style[themeContent.background.gradient];
                }
            }
            // Function used to create, edit, and copy default theme to save
            function saveTheme( theme ) {
                return $enplugAccount.editTheme(scope.themeDefinition, theme, scope.appUrl, scope.asset);
            }
        }
    };
});
