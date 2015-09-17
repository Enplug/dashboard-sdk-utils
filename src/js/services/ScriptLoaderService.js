angular.module('enplug.sdk.utils').factory('ScriptLoaderService', function ($q, $document, $timeout) {
    'use strict';

    return {

        // Lazy-load the script
        loadScript: function (callback, src) {
            var defer = $q.defer();

            // Insert script into html
            var script = $document[0].createElement('script');
            script.src = src;
            $document[0].body.appendChild(script);

            // Script loaded
            script.onload = script.onreadystatechange = function () {
                $timeout(function () {
                    if (callback()) {
                        defer.resolve();
                    } else {
                        defer.reject('Error occurred. Please try again.');
                    }
                });
            };

            // Script failed to load
            script.onerror = function () {
                $timeout(function () {
                    defer.reject('Error. Please try again.');
                });
            };

            return defer.promise;
        }
    }
});
