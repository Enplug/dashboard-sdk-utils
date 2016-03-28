/**
 * @ngdoc directive
 * @name tagInput
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('tagInput', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tags: '='
        },
        templateUrl: 'sdk-utils/tag-input.tpl',
        link: function (scope, element, attrs) {

            scope.deleteTag = function(tag) {
                for ( var i=0,l=scope.tags.length; i<l; i++ ) {
                    if (  scope.tags[i] === tag ) {
                        scope.tags.splice(i, 1);
                    }
                }
            }

            scope.handleTextChange = function () {
                if ( scope.input == null ) {
                    return;  // filter empty input case
                }
                processTags(1);
            }

            scope.handleKeyPress = function (event) {
                if ( scope.input == null ) {
                    return;  // filter empty input case
                }
                if ( event.charCode != 13 && event.charCode != 32 ) {
                    return; // filter Enter Key and Space ONLY
                }
                if ( scope.input === ' ' || scope.input.length === 0) {
                    return; // filter edge cases
                }
                processTags(0);
            }

            function processTags(offset) {
                var words = scope.input.split(' ');
                for ( var i=offset; i<words.length; i++ ) {
                    if ( scope.tags.indexOf( words[i] ) === -1 ) {
                        scope.tags.push(words[i]);
                    }
                    words.splice(i--, 1);
                }
                scope.input = words.join(' ');
            }
        }
    };
});
