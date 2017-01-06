// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').constant('months', [
    { name: gettext('January'), short: gettext('Jan'), code: '01' },
    { name: gettext('February'), short: gettext('Feb'), code: '02' },
    { name: gettext('March'), short: gettext('Mar'), code: '03' },
    { name: gettext('April'), short: gettext('Apr'), code: '04' },
    { name: gettext('May'), short: gettext('May'), code: '05' },
    { name: gettext('June'), short: gettext('Jun'), code: '06' },
    { name: gettext('July'), short: gettext('Jul'), code: '07' },
    { name: gettext('August'), short: gettext('Aug'), code: '08' },
    { name: gettext('September'), short: gettext('Sep'), code: '09' },
    { name: gettext('October'), short: gettext('Oct'), code: '10' },
    { name: gettext('November'), short: gettext('Nov'), code: '11' },
    { name: gettext('December'), short: gettext('Dec'), code: '12' }
]);
