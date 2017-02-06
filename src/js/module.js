angular.module('enplug.sdk.utils', [
	'gettext',
	'enplug.sdk.utils.templates'
]);

angular.module('enplug.sdk.utils').run(function ($templateCache) {

    // Update default pagination template for Smart Table to use our directive and icons
    $templateCache.put('template/smart-table/pagination.html',
        '<div ng-if="pages.length >= 2">' +
        '<st-summary></st-summary>' +
        '<ul class="pagination plain">' +
        '<li><a class="ion-chevron-left" ng-click="selectPage(currentPage - 1)" ng-class="{ disabled: currentPage == 1 }"></a></li>'+
        '<li><a class="ion-chevron-right" ng-click="selectPage(currentPage + 1)" ng-class="{ disabled: currentPage == numPages }"></a></li>' +
        '</ul></div>');
});
