/**
 * @ngdoc directive
 * @name equals
 * @module enplug.sdk.utils.directives
 *
 * @param equal {String} scope value to compare to
 */
angular.module('enplug.sdk.utils').directive('equals', function() {

    function getter(property, object) {
        var splitModel = property.split('.');
        return splitModel.reduce(function (map, key) {
            return map[key];
        }, object);
    }

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function($scope, $element, $attrs, $ngModel) {

            // watch own value and re-validate on change
            $scope.$watch($attrs.ngModel, function() {
                validate();
            });

            // observe the other value and re-validate on change
            $scope.$watch($attrs.equals, function () {
                validate();
            });

            function validate() {
                // values
                var val1 = $ngModel.$viewValue;
                var val2 = getter($attrs.equals, $scope);
                // set validity
                $ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
            }
        }
    };
});
