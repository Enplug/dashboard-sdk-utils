angular.module('enplug.sdk.utils', ['enplug.sdk.utils.templates', 'gettext']);

angular.module('enplug.sdk.utils').run(function ($templateCache, gettextCatalog) {

    // gettextCatalog.setCurrentLanguage(navigator.browserLanguage || navigator.language);
    gettextCatalog.setCurrentLanguage('es');
    console.log(gettextCatalog)
    console.log('coming from SDKKKKKKKKK UTILS')
    console.log(window.location.origin + "dist/i18n/translations.json")
    gettextCatalog.loadRemote(window.location.origin + "dist/i18n/translations.json");
    // When set to true, the untranslated strings will be displayed with [MISSING]
    // next to them.
    gettextCatalog.debug = false;

    // Update default pagination template for Smart Table to use our directive and icons
    $templateCache.put('template/smart-table/pagination.html',
        '<div ng-if="pages.length >= 2">' +
        '<st-summary></st-summary>' +
        '<ul class="pagination plain">' +
        '<li><a class="ion-chevron-left" ng-click="selectPage(currentPage - 1)" ng-class="{ disabled: currentPage == 1 }"></a></li>'+
        '<li><a class="ion-chevron-right" ng-click="selectPage(currentPage + 1)" ng-class="{ disabled: currentPage == numPages }"></a></li>' +
        '</ul></div>');

});
