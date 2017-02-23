angular.module('enplug.sdk.utils').directive('stSummary', [function (gettextCatalog) {
    return {
        restrict: 'E',
        require: '^stTable',
        template: '<div class="summary">{{ paginationLabe l}}</div>',
        link: function ($scope, $element, $attrs, $stTable) {

            $scope.paginationLabel;

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

                $scope.paginationLabel = gettextCatalog.getString("Showing {{ stRangeFrom }}-{{ stRangeTo}} of {{size}}", {stRangeFrom: $scope.stRange.from, stRangeTo: $scope.stRange.to, size: $scope.size})
            });

            $scope.paginationLabel = gettextCatalog.getString("Showing {{ stRangeFrom }}-{{ stRangeTo}} of {{size}}", {stRangeFrom: $scope.stRange.from, stRangeTo: $scope.stRange.to, size: $scope.size})

        }
    };
}]);
