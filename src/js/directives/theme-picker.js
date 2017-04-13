/**
* @ngdoc directive
* @name themePicker
* @module enplug.sdk.utils
*
* @param selectedTheme {Object selected theme}
* @param defaultTheme {Object default or new theme to use as templatee}
* @param themeDefinition {Object constant of theme sections}
* @param customThemes {Array of saved custom themes}
* @param defaultThemes {Array of default enplug themes}
* @param previewUrl {Url of current app}
* @param previewAsset {Object of current asset being used in preview editor}
* @param previewCheck {Promise, when available will only open theme preview if resolved}
*/
angular.module('enplug.sdk.utils').directive('themePicker', function ($document, $enplugDashboard, $enplugAccount, gettextCatalog, $filter, $route) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedTheme: '=',
            defaultTheme: '=',
            customThemes: '=',
            defaultThemes: '=',
            themeDefinition: '=',
            previewUrl: '=',
            previewAsset: '=',
            previewCheck: '&'
        },
        templateUrl: 'sdk-utils/theme-picker.tpl',

        link: function (scope, element, attrs, arg) {

            // Method to select theme
            scope.selectTheme = function( theme ) {

                if( typeof theme.Value == 'string' ) {
                    theme.Value = JSON.parse(theme.Value);
                }
                scope.selectedTheme = theme;
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
                        scope.selectTheme(scope.defaultThemes[0]);
                    }
                });
            }

            // Creating new theme
            scope.createNewTheme = function() {

                var newTheme = scope.defaultTheme ? scope.defaultTheme : scope.defaultThemes[0];

                if( scope.previewCheck ) {

                    scope.previewCheck().then(function() {
                        saveTheme(newTheme).then( function(newTheme) {
                            scope.customThemes.push(newTheme);
                            scope.selectTheme(newTheme);
                        });
                    });


                } else {

                    saveTheme(newTheme).then( function(newTheme) {
                        scope.customThemes.push(newTheme);
                        scope.selectTheme(newTheme);
                    });
                }
            }
            // Copying default theme values
            scope.copyTheme = function( theme ) {

                var copy = angular.copy(theme);
                copy.Id = null;
                copy.Name = gettextCatalog.getString('Copy of {{themeName}}', {themeName: theme.Name});
                copy.isDefault = false;

                if( scope.previewCheck ) {

                    scope.previewCheck().then(function() {
                        saveTheme(copy).then( function(newTheme) {
                            scope.customThemes.push(newTheme);
                            scope.selectTheme(newTheme);
                        });
                    });

                } else {

                    saveTheme(copy).then( function(newTheme) {
                        scope.customThemes.push(newTheme);
                        scope.selectTheme(newTheme);
                    });
                }
            }
            // Editing theme
            scope.editTheme = function( theme ) {

                if( scope.previewCheck ) {

                    scope.previewCheck().then(function() {
                        saveTheme(theme).then( function(theme) {
                             var themeIndex = scope.customThemes.indexOf(theme);
                             var updatedTheme = angular.copy(theme);
                             scope.customThemes.splice(themeIndex, 1, updatedTheme);
                             scope.selectTheme(updatedTheme);
                        });
                    });
                } else {

                    saveTheme(theme).then( function(theme) {
                         var themeIndex = scope.customThemes.indexOf(theme);
                         var updatedTheme = angular.copy(theme);
                         scope.customThemes.splice(themeIndex, 1, updatedTheme);
                         scope.selectTheme(updatedTheme);
                    });
                }
            }
            // Filtering background style for themes
            scope.filterStyle = function( theme ) {

                var themeContent = theme.Value.content;
                // Prevents undefined error if creating new theme is delayed before
                if( themeContent ) {
                    var style = $filter('themePickerStyle')(themeContent, themeContent.background.backgroundImage);
                    return style[themeContent.background.gradient];
                }
            }
            // Function used to create, edit, and copy default theme to save
            function saveTheme( theme ) {

                return $enplugAccount.editTheme(scope.themeDefinition, theme, scope.previewUrl, scope.previewAsset);
            }
        }
    };
});
