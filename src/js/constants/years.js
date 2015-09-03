angular.module('enplug.sdk.utils').constant('years', function () {
    'use strict';

    // Returns an array of name/code objects with years as strings
    var yearsToShow = 20,
        thisYear = (new Date()).getFullYear(),
        years = [];
    for (var year = thisYear; year < thisYear + yearsToShow; year++) {
        years.push({ name: year.toString(), code: year.toString().slice(-2) });
    }

    return years;
}());
