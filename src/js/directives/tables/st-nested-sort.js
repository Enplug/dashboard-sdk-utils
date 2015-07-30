angular.module('enplug.sdk.utils').filter('stNestedSort', [function() {

    // Todo remove lodash and custom-properties dependency

    return function(input, filter, descending) {
        if (_.isArray(input)) {
            if (descending) {
                filter = '-' + filter;
            }
            // Sortby sorts in place, so we need to clone for when sorting is removed
            return _.clone(input).sortBy(filter);
        }
        return input;
    };
}]);
