angular.module('enplug.sdk.utils').filter('stNestedSort', [function() {

    // Returns nested property value: nested.property
    function getter(property, item) {
        var properties = property.split('.');
        return properties.reduce(function (map, key) {
            return map[key];
        }, item);
    }

    return function(input, property, descending) {
        if (Array.isArray(input)) {

            // Sort sorts in place, so we need to clone for when sorting is removed
            return input.concat().sort(function (a, b) {
                var sortOrder = 1;
                if (descending) {
                    sortOrder = -1;
                }

                var aVal = getter(property, a),
                    bVal = getter(property, b),
                    result = (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
                return result * sortOrder;
            });
        }
        return input;
    };
}]);
