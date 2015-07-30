angular.module('enplug.sdk.utils').directive('downloadCsv', ['$document', '$log',
    function ($document, $log) {

        return {
            restrict: 'A',
            scope: {
                epDownloadCsv: '='
            },
            link: function (scope, element) {
                element.bind('click', function () {
                    var fileName = scope.epDownloadCsv.fileName;
                    var downloadFunction = scope.epDownloadCsv.downloadFunction;
                    $log.debug(fileName);
                    var promise = downloadFunction();
                    promise.then(function (data) {
                        var downloadLink = angular.element('<a></a>')
                            .attr('href', 'data:text/csv;charset=utf8,' + encodeURIComponent(data))
                            .attr('download', fileName);
                        downloadLink.insertAfter(element);

                        downloadLink.ready(function () {
                            downloadLink.get(0).click();
                            downloadLink.remove();
                        });
                    });
                });
            }
        };
    }
]);
