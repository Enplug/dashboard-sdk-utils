angular.module('enplug.sdk.utils', ['enplug.sdk.utils.templates', 'gettext']);

angular.module('enplug.sdk.utils').run(function ($rootScope, $templateCache, gettextCatalog) {

    // gettextCatalog.setCurrentLanguage(navigator.browserLanguage || navigator.language);
    // gettextCatalog.debug = false;

    // Ng class that fixes broken formatting on default text. If currentLanguage different than default, value is set to false.

    // Update default pagination template for Smart Table to use our directive and icons
    $templateCache.put('template/smart-table/pagination.html',
        '<div ng-if="pages.length >= 2">' +
        '<st-summary></st-summary>' +
        '<ul class="pagination plain">' +
        '<li><a class="ion-chevron-left" ng-click="selectPage(currentPage - 1)" ng-class="{ disabled: currentPage == 1 }"></a></li>'+
        '<li><a class="ion-chevron-right" ng-click="selectPage(currentPage + 1)" ng-class="{ disabled: currentPage == numPages }"></a></li>' +
        '</ul></div>');

});
