angular.module('enplug.sdk.utils').filter('stNestedSearch', [function() {

    function getter(model, item) {
        var splitModel = model.split('.');
        return splitModel.reduce(function (map, key) {
            return map[key];
        }, item);
    }

    return function(items, filters) {
        var itemsLeft = items.slice();
        Object.keys(filters).forEach(function(model) {
            var value = filters[model];
            itemsLeft = itemsLeft.filter(function(item) {
                var compare = getter(model, item);
                if (compare !== null && compare !== undefined) {
                    return String(compare).toLowerCase().indexOf(value.toLowerCase()) >= 0;
                }
            });
        });
        return itemsLeft;
    };
}]);
