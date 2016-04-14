/**
 * @ngdoc directive
 * @name tagSelect
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('tagSelect', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tags: '=',
            selectedTags: '='
        },
        templateUrl: 'sdk-utils/tag-select.tpl',
        link: function (scope, element, attrs) {

            scope.toggleSelection = function (tag) {
                var index = scope.selectedTags.indexOf(tag);

                if ( index > -1 ) {
                    scope.selectedTags.splice(index, 1);
                } else {
                    scope.selectedTags.push(tag);
                }
            };

            scope.isSelected = function ( tag ) {
                return scope.selectedTags.indexOf( tag ) > -1;
            }
        }
    };
});
