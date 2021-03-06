// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').directive('stSummary', [function () {
    return {
        restrict: 'E',
        require: '^stTable',
        template: '<div class="summary">{{ paginationLabel | translate }} {{stRange.from}}-{{stRange.to}} {{ paginationLabel2 | translate }} {{ size }}</div>',
        link: function ($scope, $element, $attrs, $stTable) {

            $scope.paginationLabel;

            console.log('Get text catalog: ', gettext)

            $scope.paginationLabel = gettext("Showing");

            $scope.paginationLabel2 = gettext("of");

            // Watch for updates to data
            $scope.$watch($stTable.getFilteredCollection, function  (val) {
                $scope.size = (val || []).length;
            });

            // Watch for updates to pagination
            $scope.$watch('currentPage', function () {
                $scope.stRange = {
                    from: null,
                    to: null
                };

                $scope.stRange.from = $stTable.tableState().pagination.start + 1;
                $scope.stRange.to = $scope.currentPage === $scope.numPages ? $scope.size : ($scope.stRange.from + $scope.stItemsByPage - 1);
            });
        }
    };
}]);
