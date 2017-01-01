angular.module('enplug.sdk.utils').directive('helpBlock', function (gettextCatalog) {
    'use strict';
    return {
        templateUrl: 'sdk-utils/help-block.tpl',
        restrict: 'E',
        link: function(scope) {
            // gettextCatalog.setCurrentLanguage(navigator.browserLanguage || navigator.language);
            gettextCatalog.setCurrentLanguage('es');
            console.log('coming from SDKKKKKKKKK UTILS')
            gettextCatalog.loadRemote("../dist/i18n/translations.json");
            // When set to true, the untranslated strings will be displayed with [MISSING]
            // next to them.
            gettextCatalog.debug = true;
        }
    }
});
