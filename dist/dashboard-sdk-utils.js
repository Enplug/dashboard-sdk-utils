angular.module('enplug.sdk.utils', ['enplug.sdk.utils.templates', 'gettext']);

angular.module('enplug.sdk.utils').run(['$templateCache', 'gettextCatalog', function ($templateCache, gettextCatalog) {

    gettextCatalog.setCurrentLanguage(navigator.browserLanguage || navigator.language);
    gettextCatalog.debug = false;

    // Update default pagination template for Smart Table to use our directive and icons
    $templateCache.put('template/smart-table/pagination.html',
        '<div ng-if="pages.length >= 2">' +
        '<st-summary></st-summary>' +
        '<ul class="pagination plain">' +
        '<li><a class="ion-chevron-left" ng-click="selectPage(currentPage - 1)" ng-class="{ disabled: currentPage == 1 }"></a></li>'+
        '<li><a class="ion-chevron-right" ng-click="selectPage(currentPage + 1)" ng-class="{ disabled: currentPage == numPages }"></a></li>' +
        '</ul></div>');

}]);

angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('es', {"A:":"A:","Add tags":"Agregar etiquetas","B:":"B:","Contain":"Contiene","Enplug Help Center":"Centro apoyo de Enplug ","G:":"G:","Need help? Go to the":"¿Necesitas ayuda? Ir a la ","Passwords must match.":"No se encontraron coincidencias.","Please enter a valid URL starting with http:// or https://":"Ingresa una URL válida empezando por http: // o https: //","Please enter a valid email address.":"Ingresa una URL válida empezando.","Position":"Posición","ProTip:":"ProTip:","R:":"R:","Something went wrong, please try again.":"Algo salió mal. Por favor, vuelva a intentarlo.","There was an error.":"Hubo un error.","This is required.":"Esto es necesario.","Upload Image":"Cargar imagen"});
    gettextCatalog.setStrings('pl', {"A lot of times, people don't know what they want until you show it to them.":"Wiele razy, ludzie nie wiedzą, co chcą dopóki nie pokażesz to do nich.","Enplug Help Center":"Centrum pomocy Enplug","Need help? Go to the":"Centrum pomocy Enplug"});
/* jshint +W100 */
}]);
angular.module('enplug.sdk.utils').constant('countries', [
    { name: 'United States', code: 'US' },
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Democratic People\'s Republic of Korea', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kosovo', code: 'XK' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'s Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
]);

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

// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').constant('quotes', {
    random: function () {
        var index = Math.floor(Math.random() * (this.quotes.length));
        return this.quotes[index];
    },
    quotes: [
        {
            text: gettext("All great achievements require time."),
            author: "Maya Angelou"
        },
        {
            text: gettext("You can't wait for inspiration. You have to go after it with a club."),
            author: "Jack London"
        },
        {
            text: gettext("The perfect is the enemy of the good."),
            author: "Voltaire"
        },
        {
            text: gettext("I play to win, whether during practice or a real game."),
            author: "Michael Jordan"
        },
        {
            text: gettext("Many of life's failures are people who did not realize how close they were to success when they gave up."),
            author: "Thomas Edison"
        },
        {
            text: gettext("At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since."),
            author: "Salvador Dali"
        },
        {
            text: gettext("Quality is more important than quantity. One home run is much better than two doubles."),
            author: "Steve Jobs"
        },
        {
            text: gettext("That's one small step for man, one giant leap for mankind."),
            author: "Neil Armstrong"
        },
        {
            text: gettext("Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep."),
            author: "Scott Adams"
        },
        {
            text: gettext("Nothing will work unless you do."),
            author: "Maya Angelou"
        },
        {
            text: gettext("The best way out is always through."),
            author: "Robert Frost"
        },
        {
            text: gettext("An ant on the move does more than a dozing ox."),
            author: "Lao Tzu"
        },
        {
            text: gettext("Show me a thoroughly satisfied man and I will show you a failure."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Our greatest glory is not in never failing, but in rising up every time we fail."),
            author: "Ralph Waldo Emerson"
        },
        {
            text: gettext("Every act of creation is first of all an act of destruction."),
            author: "Pablo Picasso"
        },
        {
            text: gettext("Fun is good."),
            author: "Dr. Seuss"
        },
        {
            text: gettext("I steal from every movie ever made."),
            author: "Quentin Tarantino"
        },
        {
            text: gettext("It is the working man who is the happy man. It is the idle man who is the miserable man."),
            author: "Ben Franklin"
        },
        {
            text: gettext("A person who never made a mistake never tried anything new."),
            author: "Albert Einstein"
        },
        {
            text: gettext("To be idle is a short road to death and to be diligent is a way of life."),
            author: "Buddha"
        },
        {
            text: gettext("The way to get started is to quit talking and begin doing."),
            author: "Walt Disney"
        },
        {
            text: gettext("For every dark night, there's a brigher day."),
            author: "Tupac Shakur"
        },
        {
            text: gettext("If you love life, don't waste time, for time is what life is made up of."),
            author: "Bruce Lee"
        },
        {
            text: gettext("You can never quit. Winners never quit, and quitters never win."),
            author: "Ted Turner"
        },
        {
            text: gettext("Work spares us from three evils: boredom, vice and need."),
            author: "Voltaire"
        },
        {
            text: gettext("Focus is a matter of deciding what things you're not going to do."),
            author: "John Carmack"
        },
        {
            text: gettext("I play to win, whether during practice or a real game."),
            author: "Michael Jordan"
        },
        {
            text: gettext("HULK SMASH!"),
            author: "The Incredible Hulk"
        },
        {
            text: gettext("The harder the conflict, the more glorious the triumph."),
            author: "Thomas Paine"
        },
        {
            text: gettext("Everything comes to him who hustles while he waits."),
            author: "Thomas Edison"
        },
        {
            text: gettext("You've got to jump off cliffs and build your wings on the way down."),
            author: "Ray Bradbury"
        },
        {
            text: gettext("Amateurs practice until they get it right. Professionals practice until they can't get it wrong."),
            author: "Unknown"
        },
        {
            text: gettext("Genius is one percent inspiration and ninety-nine percent perspiration."),
            author: "Thomas Edison"
        },
        {
            text: gettext("A lot of times, people don't know what they want until you show it to them."),
            author: "Steve Jobs"
        },
        {
            text: gettext("I don't know where I'm going, but I'm on my way."),
            author: "Carl Sagan"
        },
        {
            text: gettext("Lost time is never found again."),
            author: "Benjamin Franklin"
        },
        {
            text: gettext("Without pain, without sacrifice, we would have nothing."),
            author: "Tyler Durden"
        },
        {
            text: gettext("I pay no attention whatever to anybody's praise or blame. I simply follow my own feelings."),
            author: "Wolfgang Amadeus Mozart"
        },
        {
            text: gettext("You miss 100% of the shots you don't take."),
            author: "Wayne Gretzky"
        },
        {
            text: gettext("To have a great idea, have a lot of them."),
            author: "Thomas Edison"
        },
        {
            text: gettext("The value of an idea lies in the using of it."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Simplify, simplify, simplify."),
            author: "Henry David Thoreau"
        },
        {
            text: gettext("There's a way to do it better - find it."),
            author: "Thomas Edison"
        },
        {
            text: gettext("When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the steps."),
            author: "Confucius"
        },
        {
            text: gettext("During your life, never stop dreaming. No one can take away your dreams."),
            author: "Tupac Shakur"
        },
        {
            text: gettext("Things do not happen. Things are made to happen."),
            author: "John F. Kennedy"
        },
        {
            text: gettext("Ambition should be made of sterner stuff."),
            author: "William Shakespeare"
        },
        {
            text: gettext("If you spend too much time thinking about a thing, you'll never get it done."),
            author: "Bruce Lee"
        },
        {
            text: gettext("Success breeds success."),
            author: "Proverb"
        },
        {
            text: gettext("You are never too old to set another goal or to dream a new dream."),
            author: "C.S. Lewis"
        },
        {
            text: gettext("When you stop doing things for fun, you might as well be dead."),
            author: "Ernest Hemingway"
        },
        {
            text: gettext("There is no substitute for hard work."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Live long and prosper."),
            author: "Spock"
        },
        {
            text: gettext("I have not failed. I've just found 10,000 ways that won't work."),
            author: "Thomas Edison"
        },
        {
            text: gettext("It's lack of faith that makes people afraid of meeting challenges, and I believed in myself."),
            author: "Muhammad Ali"
        },
        {
            text: gettext("All our dreams can come true, if we have the courage to pursue them."),
            author: "Walt Disney"
        },
        {
            text: gettext("Make everything as simple as possible, but not simpler."),
            author: "Albert Einstein"
        },
        {
            text: gettext("Some people want it to happen, some wish it would happen, others make it happen."),
            author: "Michael Jordan"
        },
        {
            text: gettext("I've got a theory that if you give 100% all the time, somehow things will work out in the end."),
            author: "Larry Bird"
        },
        {
            text: gettext("The problem with the future is that it keeps turning into the present."),
            author: "Bill Watterson"
        },
        {
            text: gettext("May the Force be with you."),
            author: "Han Solo"
        },
        {
            text: gettext("Victory belongs to the most persevering."),
            author: "Napoleon Bonaparte"
        },
        {
            text: gettext("I hated every minute of training, but I said, 'Dont quit. Suffer now and live the rest of your life as a champion'."),
            author: "Muhammad Ali"
        },
        {
            text: gettext("Do things that have never been done before."),
            author: "Russell Kirsch"
        },
        {
            text: gettext("I've failed over and over and over again in my life and that is why I succeed."),
            author: "Michael Jordan"
        },
        {
            text: gettext("A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty."),
            author: "Winston Churchill"
        },
        {
            text: gettext("He who hesitates is lost."),
            author: "Proverb"
        },
        {
            text: gettext("Carpe diem, seize the day boys, make your lives extraordinary."),
            author: "John Keating"
        },
        {
            text: gettext("Doing the best at this moment puts you in the best place for the next moment."),
            author: "Oprah Winfrey"
        },
        {
            text: gettext("Luck is preparation meeting opportunity."),
            author: "Oprah Winfrey"
        },
        {
            text: gettext("I have no special talent. I am only passionately curious."),
            author: "Albert Einstein"
        }]
});

// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').constant('states', [
    { name: gettext('Alabama'), code: 'AL' },
    { name: gettext('Alaska'), code: 'AK' },
    { name: gettext('Arizona'), code: 'AZ' },
    { name: gettext('Arkansas'), code: 'AR' },
    { name: gettext('California'), code: 'CA' },
    { name: gettext('Colorado'), code: 'CO' },
    { name: gettext('Connecticut'), code: 'CT' },
    { name: gettext('Delaware'), code: 'DE' },
    { name: gettext('District of Columbia'), code: 'DC' },
    { name: gettext('Florida'), code: 'FL' },
    { name: gettext('Georgia'), code: 'GA' },
    { name: gettext('Hawaii'), code: 'HI' },
    { name: gettext('Idaho'), code: 'ID' },
    { name: gettext('Illinois'), code: 'IL' },
    { name: gettext('Indiana'), code: 'IN' },
    { name: gettext('Iowa'), code: 'IA' },
    { name: gettext('Kansa'), code: 'KS' },
    { name: gettext('Kentucky'), code: 'KY' },
    { name: gettext('Lousiana'), code: 'LA' },
    { name: gettext('Maine'), code: 'ME' },
    { name: gettext('Maryland'), code: 'MD' },
    { name: gettext('Massachusetts'), code: 'MA' },
    { name: gettext('Michigan'), code: 'MI' },
    { name: gettext('Minnesota'), code: 'MN' },
    { name: gettext('Mississippi'), code: 'MS' },
    { name: gettext('Missouri'), code: 'MO' },
    { name: gettext('Montana'), code: 'MT' },
    { name: gettext('Nebraska'), code: 'NE' },
    { name: gettext('Nevada'), code: 'NV' },
    { name: gettext('New Hampshire'), code: 'NH' },
    { name: gettext('New Jersey'), code: 'NJ' },
    { name: gettext('New Mexico'), code: 'NM' },
    { name: gettext('New York'), code: 'NY' },
    { name: gettext('North Carolina'), code: 'NC' },
    { name: gettext('North Dakota'), code: 'ND' },
    { name: gettext('Ohio'), code: 'OH' },
    { name: gettext('Oklahoma'), code: 'OK' },
    { name: gettext('Oregon'), code: 'OR' },
    { name: gettext('Pennsylvania'), code: 'PA' },
    { name: gettext('Rhode Island'), code: 'RI' },
    { name: gettext('South Carolina'), code: 'SC' },
    { name: gettext('South Dakota'), code: 'SD' },
    { name: gettext('Tennessee'), code: 'TN' },
    { name: gettext('Texas'), code: 'TX' },
    { name: gettext('Utah'), code: 'UT' },
    { name: gettext('Vermont'), code: 'VT' },
    { name: gettext('Virginia'), code: 'VA' },
    { name: gettext('Washington'), code: 'WA' },
    { name: gettext('West Virginia'), code: 'WV' },
    { name: gettext('Wisconsin'), code: 'WI' },
    { name: gettext('Wyoming'), code: 'WY' }
]);

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

/**
 * @ngdoc directive
 * @name alert
 * @module enplug.sdk.utils
 * @description shows an alert message
 */
angular.module('enplug.sdk.utils').directive('alert', function () {
    'use strict';

    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        replace: true,
        templateUrl: 'sdk-utils/alert.tpl'
    }
});

/**
 * @ngdoc directive
 * @name backgroundPicker
 * @module enplug.sdk.utils
 *
 * @param {Object} imageData
 * @param {number} screenWidth
 * @param {number} screenHeight
 *
 * @description Component for choosing and positioning a background image.
 */

'use strict';



angular.module('enplug.sdk.utils').directive('backgroundPicker', ['$enplugDashboard', 'gettext', function ($enplugDashboard, gettext) {
    return {
        restrict: 'E',
        scope: {
            imageData: '=',
            screenWidth: '=',
            screenHeight: '='
        },
        templateUrl: 'sdk-utils/background-picker.tpl',
        link: function (scope, element, attrs, arg) {
            /**
             * Checks whether the position button should be disabled.
             * @returns {boolean}
             */
            scope.isDisabled = function (position) {
                var screenRes = scope.screenWidth / scope.screenHeight;
                var imageRes = scope.imageData.BgWidth / scope.imageData.BgHeight;

                if (!scope.imageData || !scope.imageData.BgUrl) {
                    return true;
                }

                if (position == 'center') {
                    return false;
                } else if (scope.imageData.BgSize == 'contain') {
                    if (position == 'top' || position == 'bottom') {
                        return screenRes > imageRes;
                    } else if (position == 'left' || position == 'right') {
                        return screenRes < imageRes;
                    } else {
                        return true;
                    }
                } else { // cover
                    if (position == 'top' || position == 'bottom') {
                        return screenRes < imageRes;
                    } else if (position == 'left' || position == 'right') {
                        return screenRes > imageRes;
                    } else {
                        return true;
                    }
                }

                return false;
            }

            scope.removeUploadedFile = function() {
                scope.imageData.BgUrl = '';
                scope.imageData.BgFilename = '';
                scope.imageData.BgWidth = '';
                scope.imageData.BgHeight = '';
                scope.imageData.BgResolution = '';
            }


            scope.promptImageUpload = function () {
                $enplugDashboard.upload().then(function (uploads) {
                    if (uploads.length > 0) {
                    	var img = uploads[0];
                        scope.imageData.BgUrl = img.url;
                        scope.imageData.BgResolution = img.width / img.height;
                        scope.imageData.BgWidth = img.width;
                        scope.imageData.BgHeight = img.height;
                        scope.imageData.BgFilename = img.filename;
                    } else {
                        $enplugDashboard.errorIndicator(gettext('Something went wrong, please try again.'));
                    }
                });
            }
        }
    }
}]);

/**
* @ngdoc directive
* @name customDurationSlider
* @module enplug.sdk.utils
*
* @param ratio {String Duration}
*/
angular.module('enplug.sdk.utils').directive('customDurationSlider', ['$document', function ($document) {
    return {
        restrict: 'E',
        scope: {
            ratio: '=ratio'
        },
        templateUrl: 'sdk-utils/custom-duration-slider.tpl',

        link: function (scope, element, attrs, arg) {

            var startX = 0,
            padding = 2,
            $barWidth = angular.element(element[0].querySelector('.slider')),
            barWidth = $barWidth.prop('clientWidth'),
            $cursor = angular.element(element[0].querySelector('.slider-cursor')),
            cursorWidth = $cursor.prop('clientWidth'),
            scrollLength = barWidth - cursorWidth - padding,
            offset = 0;

            // Scope variable if user has made change on manual input
            scope.manualDuration = false;

            scope.ratio = preventFalseDuration();
            scope.placeholder = scope.ratio || '-';

            // Handling input keydown event, setting manual duration to true
            scope.handleKeyDown = function(event) {
                scope.manualDuration = true;
            }
            // Assigning ratio to prevent zero from being saved
            scope.checkRatioValue = function() {
                scope.ratio = preventFalseDuration();
            }
            // Watching changes on ratio. Moving cursor to reflect manual changes
            scope.$watch('ratio', function() {
                if(scope.manualDuration) {
                    offset = compareOffsetValue();
                    $cursor.css('transition', 'margin-left 0.5s ease-in');
                    $cursor.css('margin-left', offset+'px');
                }
            });

            scope.clearUndefined = function() {
                resolveUndefined();
            }

            function resolveUndefined() {
                if(!scope.ratio) {
                    scope.ratio = 1;
                    offset = compareOffsetValue();
                    $cursor.css('transition', 'margin-left 0.5s ease-in');
                    $cursor.css('margin-left', offset+'px');
                }
            }

            // Prevents false value from being saved. Must be at least 1 sec duration
            function preventFalseDuration() {
                if(scope.ratio <= 0) {
                    scope.ratio = undefined;
                    scope.placeholder = '-';
                }
                return scope.ratio;
            }
            // Function comparing offset to padding and scrollLength. Prevent cursor from overflowing slider
            function compareOffsetValue() {
                var difference = scope.ratio * scrollLength / 60;
                if ( difference < padding ) {
                    difference = padding;
                } else if ( difference > scrollLength )  {
                    difference = scrollLength;
                }
                return difference;
            }
            // Setting default values for slider on mousedown
            function setDefaultValues() {
                scope.manualDuration = false;
                $cursor.css('transition', 'none')
                startX = event.pageX;
                scope.ratio = preventFalseDuration();
            }
            // Immediately invoked to set margin when directive is instantiated
            (function() {
                offset = compareOffsetValue();
                $cursor.css('margin-left', offset+'px');
            })();

            return $cursor.on('mousedown', function(event) {
                var mousemove, mouseup;

                if(scope.ratio == undefined) {
                    scope.ratio = 1;
                    offset = compareOffsetValue();
                    $cursor.css('transition', 'margin-left 0.5s ease-in');
                    $cursor.css('margin-left', offset+'px');
                }

                mousemove = function(event) {
                    return scope.$apply(function() {
                        offset += (event.pageX - startX);
                        if ( offset < padding ) {
                            offset = padding;
                        } else if ( offset > scrollLength )  {
                            offset = scrollLength;
                        } else {
                            startX = event.pageX;
                        }
                        scope.ratio = Math.round(offset/scrollLength * 60);
                        if(scope.ratio == 0 || scope.ratio == '0') {
                            scope.ratio = 1
                        }
                        $cursor.css('margin-left', offset+'px')
                    })
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    return $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                setDefaultValues();
                $document.on('mousemove', mousemove);
                return $document.on('mouseup', mouseup);
            });

        }
    };
}]);

/**
 * @ngdoc directive
 * @name displayCounter
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('displayCounter', function () {
    return {

        restrict: 'E',

        replace: true,

        scope: {
            count: '=',
            showDanger: '=?',
            vertical: '=?',
            disabled: '=?'
        },

        templateUrl: 'sdk-utils/display-counter.tpl',

        link: function (scope, element, attrs) {

            scope.showDanger = 'showDanger' in attrs && scope.showDanger == false;

            scope.checkDanger = function () {
                if ( scope.showDanger && scope.count <= 0 ) {
                    element.addClass('danger');
                } else {
                    element.removeClass('danger');
                }
            };
            scope.checkDanger();

            if ( 'vertical' in scope && scope.vertical === true ) {
                element.addClass('vertical');
            }
            if ( 'disabled' in scope && scope.disabled === true ) {
                element.addClass('disabled');
            }

            scope.$watch('count', function(){
                scope.checkDanger();
            });

        }
    };
});

angular.module('enplug.sdk.utils').directive('downloadCsv', ['$document', '$log',
    function ($document, $log) {

        return {
            restrict: 'A',
            scope: {
                epDownloadCsv: '='
            },
            link: function (scope, element) {
                element.bind('click', function () {
                    var fileName = scope.epDownloadCsv.fileName;
                    var downloadFunction = scope.epDownloadCsv.downloadFunction;
                    $log.debug(fileName);
                    var promise = downloadFunction();
                    promise.then(function (data) {
                        var downloadLink = angular.element('<a></a>')
                            .attr('href', 'data:text/csv;charset=utf8,' + encodeURIComponent(data))
                            .attr('download', fileName);
                        downloadLink.insertAfter(element);

                        downloadLink.ready(function () {
                            downloadLink.get(0).click();
                            downloadLink.remove();
                        });
                    });
                });
            }
        };
    }
]);

/**
 * @ngdoc directive
 * @name dropdownMenu
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('dropdownMenu', function () {
    'use strict';
    return {
        link: function (scope, element) {

            element.addClass('dropdown-menu');

            // Close dropdown menu when we click on links in the dropdown menu that take us to a new page
            element.on('click', function (event) {
                var target = angular.element(event.target);
                if (target.attr('href') || target.parent().attr('href')) {
                    scope.$emit('dropdown:toggle');
                }
                scope.$apply(function () {
                    scope.$emit('dropdown:click');
                });
            });
        }
    }
});

/**
 * @ngdoc directive
 * @name dropdownToggle
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('dropdownToggle', function () {
   'use strict';
    return {
        link: function (scope, element) {

            element.addClass('dropdown-toggle');
            element.on('click', function () {
               scope.$apply(function () {
                  scope.$broadcast('dropdown:toggle');
               });
            });
        }
    }
});

/**
 * @ngdoc directive
 * @name dropdown
 * @module enplug.sdk.utils
 *
 */
angular.module('enplug.sdk.utils').directive('dropdown', ['$document', '$timeout', function ($document, $timeout) {
    return {
        scope: true,
        link: function (scope, element) {

            element.addClass('dropdown-wrap');

            function closeDropdown() {
                element.addClass('closing');
                $timeout(function () {
                    element.removeClass('open');
                    element.removeClass('closing');
                    $document.off('click', closeDropdown);
                }, 300);
            }

            // Event emitted by the dropdown-toggle directive
            scope.$on('dropdown:toggle', toggle);
            scope.$on('dropdown:click', toggle);

            function toggle() {
                if (element.hasClass('open')) {
                    closeDropdown();
                } else {
                    open();
                }
            }

            function open() {
                element.addClass('open');
                $document.on('click', function (event) {
                    if (!element[0].contains(event.target)) {
                        closeDropdown();
                    }
                });
            }

            scope.$on('$destroy', function () {
                $document.off('click', closeDropdown);
            });
        }
    }
}]);

/**
* @ngdoc directive
* @name durationSlider
* @module enplug.sdk.utils
*
* @param ratio {String Duration}
*/
angular.module('enplug.sdk.utils').directive('durationSlider', ['$document', function ($document) {
    return {
        restrict: 'E',
        scope: {
            ratio: '=ratio'
        },
        templateUrl: 'sdk-utils/duration-slider.tpl',

        link: function (scope, element, attrs, arg) {
            var startX = 0,
            padding = 3,
            $barWidth = angular.element(element[0].querySelector('.duration-slider')),
            barWidth = $barWidth.prop('clientWidth'),
            $cursor = angular.element(element[0].querySelector('.slider-cursor')),
            cursorWidth = $cursor.prop('clientWidth'),
            scrollLength = barWidth - cursorWidth - padding,
            offset = 0;

            function setPosition() {
                offset += scope.ratio * scrollLength / 60;
                $cursor.css('margin-left', offset+'px');
            }

            setPosition();

            scope.formatLabel = function(val) {
                return val > -1 ? Math.round(val)+' secs' : '-';
            }

            return element.on('mousedown', function(event) {
                var mousemove, mouseup;

                mousemove = function(event) {

                    return scope.$apply(function() {
                        offset += (event.pageX - startX);
                        if ( offset < padding ) {
                            offset = padding;
                        } else if ( offset > scrollLength )  {
                            offset = scrollLength;
                        } else {
                            startX = event.pageX;
                        }
                        scope.ratio = Math.round(offset/scrollLength * 60);
                        $cursor.css('margin-left', offset+'px')
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    return $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                startX = event.pageX;
                $document.on('mousemove', mousemove);
                return $document.on('mouseup', mouseup);
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name colorPicker
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('colorPicker', ['$document', '$timeout', 'ColorTools', 'PositionTools', 
    function ($document, $timeout, ColorTools, PositionTools) {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            hex: '=?',
            rgb: '=?',
            alpha: '=?'
        },
        templateUrl: 'sdk-utils/color-picker.tpl',

        link: function (scope, element, attrs) {

            /** link dom elements **/
            var labelAlpha = angular.element(element[0].querySelector('.channel-alpha')),
                labelRed = angular.element(element[0].querySelector('.channel-red')),
                labelGreen = angular.element(element[0].querySelector('.channel-green')),
                labelBlue = angular.element(element[0].querySelector('.channel-blue')),
                labelHex = angular.element(element[0].querySelector('.hex-input'));

            var $palette = angular.element(element[0].querySelector('.palette'));

            var $swatch = angular.element(element[0].querySelector('.swatch'));
            scope.opened = false;

            var $hue = angular.element(element[0].querySelector('.hue'));
            $hue[0].$cursor = angular.element($hue[0].querySelector('.cursor'));

            var $alpha = angular.element(element[0].querySelector('.alpha-slider'));
            $alpha[0].$cursor = angular.element($alpha[0].querySelector('.cursor'));
            
            var $saturation = angular.element(element[0].querySelector('.saturation'))
            $saturation[0].$cursor = angular.element($saturation[0].querySelector('.cursor'))

            /** Format 'rgb' vs 'hex' **/
            if ( attrs.hasOwnProperty('showAsRgb') ) {
                scope.showAs = 'rgb';
            } else {
                scope.showAs = 'hex';
            }
            scope.toggleShowAs = function () {
                scope.showAs = scope.showAs == 'hex' ? 'rgb' : 'hex';
            };

            /** alpha support **/
            scope.noAlpha = attrs.hasOwnProperty('noAlpha');

            /** Test: 
            scope.hex = scope.hex.replace(/^#/, '')
            console.log('HEX:', scope.hex)
            setRGB( ColorTools.hex2rgb( parseInt(scope.hex, 16) ) );
            console.log('RGB:', scope.rgb)
            var hsb = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
            console.log('HSB:', hsb, hsb[0]*360, hsb[1]*100, hsb[2]*100)
            var backToRGB =  ColorTools.hsl2rgb(hsb[0], hsb[1], hsb[2] );
            console.log('BACK TO RGB:', backToRGB)
            var backToHex = ColorTools.rgb2hex(backToRGB[0], backToRGB[1], backToRGB[2])
            console.log('BACK TO HEX:', backToHex)
            **/

            /** initialize color hex/rgb and alpha **/
            if ( scope.hasOwnProperty('hex') ) { // We're dealing with HEX string input/output
                setHEX( scope.hex.replace(/^#/, '') );
                setRGB( ColorTools.hex2rgb( parseInt(scope.hex, 16) ) );
                var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            } else if ( scope.hasOwnProperty('rgb') ) { // We're dealing with RGB array input/output
                setRGB( scope.rgb );
                setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            } else {
                console.warn('[ColorPicker] Something insane just happened!')
            }

            /** alpha **/
            if ( !scope.hasOwnProperty('alpha') || isNaN(scope.alpha) ) {
                scope.alpha = 1.0;
            }
            setAlpha(scope.alpha);

            /** Handle Saturation Panel Drag Events **/  
            $saturation.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var top = Math.max(0, Math.min($saturation[0].clientHeight, event.pageY - PositionTools.getTop($saturation[0])))
                          , left = Math.max(0, Math.min($saturation[0].clientWidth, event.pageX - PositionTools.getLeft($saturation[0])));
                        setSaturation( left/$saturation[0].clientWidth );
                        setBrightness( 1 - top/$saturation[0].clientHeight );
                        setRGB( ColorTools.hsl2rgb(scope.hue, scope.saturation, scope.brightness) );
                        setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });


            /** Handle Hue Panel Drag Events **/
            $hue.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var left = Math.max(0, Math.min($hue[0].clientWidth, event.pageX - PositionTools.getLeft($hue[0])));
                        setHue( 1 - left/$hue[0].clientWidth );
                        setRGB( ColorTools.hsl2rgb(scope.hue, scope.saturation, scope.brightness) );
                        setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });


            /** Handle Alpha Panel Drag Events **/
            $alpha.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var left = Math.max(0, Math.min($alpha[0].clientWidth, event.pageX - PositionTools.getLeft($alpha[0])));
                        setAlpha( left/$alpha[0].clientWidth );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });

            function setHEX(val) {
                scope.hex = val;
                scope.hexInput = val;
            }

            function setRGB (val) {
                scope.rgb = val;
                setRed( val[0] );
                setGreen( val[1] );
                setBlue( val[2] );
            }

            function setRed(val) {
                scope.red = Math.round(val);
            }
            function setGreen(val) {
                scope.green = Math.round(val);
            }
            function setBlue(val) {
                scope.blue = Math.round(val);
            }

            function setHue(val) {
                scope.hue = val;
                $hue[0].$cursor.css( 'left', (1-scope.hue) * $hue[0].clientWidth + 'px' );
            }

            function setSaturation(val) {
                scope.saturation = val;
                $saturation[0].$cursor.css( 'left', scope.saturation * $saturation[0].clientWidth + 'px' );
            }

            function setBrightness(val) {
                scope.brightness = val;
                $saturation[0].$cursor.css( 'top', (1-val) * $saturation[0].clientHeight + 'px' );
            }
            
            function setAlpha(val) {
                scope.alpha = parseFloat(val.toFixed(2));
                scope.alphaPercent = parseFloat( (scope.alpha*100).toFixed(2));
                if ( !scope.noAlpha ) {
                    $alpha[0].$cursor.css( 'left', scope.alpha * $alpha[0].clientWidth + 'px' );
                }
            }

            /** Handle UI changes **/
            scope.$watch('alphaPercent', function(){
                setAlpha( labelAlpha[0].value / 100 );
            });

            scope.getHueColor = function () {
                var rgb = ColorTools.hsl2rgb( scope.hue, 1, 1);
                var hex = ColorTools.rgb2hex( rgb[0], rgb[1], rgb[2] );
                return hex;
            }

            scope.watchRGBInputChange = function () {
                setRGB( [scope.red, scope.green, scope.blue] );
                var hsl = ColorTools.rgb2hsl(scope.red, scope.green, scope.blue);
                setHEX( ColorTools.rgb2hex(scope.red, scope.green, scope.blue) );
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            };

            scope.watchHEXInputChange = function () {
                if ( labelHex[0].value.match(/[^0-9a-fA-F\.]/g) ) {
                    labelHex[0].value = labelHex[0].value.replace(/[^0-9a-fA-F\.]/g, '');
                }
                var fixed = labelHex[0].value.split(''), hex='';
                for ( var i=0, l=6; i<l; i++ ) {
                    hex += i < fixed.length ? fixed[i] : 0;
                }
                scope.hex = hex; // make sure not to call setHEX instead!
                setRGB( ColorTools.hex2rgb(parseInt(scope.hex, 16)) );
                var hsl = ColorTools.rgb2hsl(scope.red, scope.green, scope.blue);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            };

            /** Close on outter click **/
            var outterClickHandler = function (event) {
                var isInside = event.pageY > PositionTools.getTop($palette[0]) 
                    && event.pageY < PositionTools.getTop($swatch[0]) + $swatch[0].clientHeight + $palette[0].clientHeight
                    && event.pageX > PositionTools.getLeft($palette[0]) 
                    && event.pageX < PositionTools.getLeft($palette[0]) + $palette[0].clientWidth

                if ( !isInside ) {
                    return scope.$apply(function() {
                        scope.opened = false;
                        $document.unbind("mousedown", outterClickHandler);
                    });
                }
            };

            scope.toggle = function () {
                scope.opened = !scope.opened;
                if ( scope.opened ) {
                    $timeout(function () {
                        setAlpha(scope.alpha);
                        var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                        setHue(hsl[0]);
                        setSaturation(hsl[1]);
                        setBrightness(hsl[2]);
                    });
                    $document.bind("mousedown", outterClickHandler);
                } else {
                    $document.unbind("mousedown", outterClickHandler);
                }
            }

            element.on('$destroy', function() {
                $document.unbind("mousedown", outterClickHandler);
            });
        }
    }
}]);

/**
 * @ngdoc directive
 * @name equals
 * @module enplug.sdk.utils.directives
 *
 * @param equal {String} scope value to compare to
 */
angular.module('enplug.sdk.utils').directive('equals', function() {

    function getter(property, object) {
        var splitModel = property.split('.');
        return splitModel.reduce(function (map, key) {
            return map[key];
        }, object);
    }

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function($scope, $element, $attrs, $ngModel) {

            // watch own value and re-validate on change
            $scope.$watch($attrs.ngModel, function() {
                validate();
            });

            // observe the other value and re-validate on change
            $scope.$watch($attrs.equals, function () {
                validate();
            });

            function validate() {
                // values
                var val1 = $ngModel.$viewValue;
                var val2 = getter($attrs.equals, $scope);
                // set validity
                $ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
            }
        }
    };
});

/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 * @param label {String} The input label
 */
angular.module('enplug.sdk.utils').directive('materialCheckbox', ['$log', '$compile', 'GUID', function ($log, $compile, GUID) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide', 'ng-repeat'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-checkbox.tpl',
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {

            $element.addClass('material-checkbox');
            $scope.id = GUID.new(); // better to use name?
            $scope.label = $attrs.label;

            // Copy any wrapped html into checkbox label
            $transclude(function(clone) {
                if (clone) {

                    // Check to see if our transcluded HTML includes an input
                    var hasInput = false;
                    for (var i = 0; i < clone.length; i++) {
                        if (clone[i].nodeName.toLowerCase() == 'input') {
                            hasInput = true;
                        }
                    }

                    if (hasInput) {

                        // Use this input
                        $element.find('input').remove();
                        $element.find('label').prepend(clone);
                        $element.find('input').attr('id', $scope.id);
                        $element.find('input').attr('type', 'checkbox');
                    } else {

                        // Label
                        angular.element($element[0].querySelector('.checkbox-label')).append(clone);
                    }
                }
            });

            var input = $element.find('input')[0];

            // Copy attributes over to input
            angular.forEach($attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    $element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            var checkbox = $element.find('label')[0];
            $compile(checkbox)($scope);
        }
    };
}]);

/**
 * @ngdoc directive
 * @name materialInput
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 * @param type {String} Input type
 * @param label {String} Input label
 * @param directives {Object} key:value of directives to assign to input. This directive creates isolate+transcluded scope, so remember to use $parent in values.
 * @param required {boolean},
 * @param autofocus {boolean} - causes this input to be focused after creation
 *
 * For better ways to do a lot of this, look to: https://github.com/angular/material/blob/master/src/components/input/input.js
 *
 */
angular.module('enplug.sdk.utils').directive('materialInput', ['$log', '$compile', '$parse', '$document', 'GUID', 'gettext',
    function ($log, $compile, $parse, $document, GUID, gettextCatalog) {
        'use strict';

        return {
            restrict: 'E',
            require: '^form',
            scope: {
                model: '=field'
            },
            transclude: true, // Allows us to wrap up custom html
            templateUrl: 'sdk-utils/material-input.tpl',
            link: function ($scope, $element, $attrs, $form, $transclude) {

                var ignoreAttributes = ['class', 'label', 'directives', 'field', 'focus', 'ng-if', 'ng-show', 'ng-hide'],
                    input = $document[0].createElement('input'),
                    directives = $parse($attrs.directives)($scope),
                    autofocus = typeof $attrs.autofocus !== 'undefined',
                    id = $attrs.field + '-' + GUID.new();

                $scope.id = id; // better to use name?
                $scope.label = $attrs.label;
                $element.removeAttr('label');
                $element.removeAttr('label');
                input.setAttribute('name', id);

                // Convenience method so we don't have to apply form-groups
                if (!$element.parent().hasClass('form-group')) {
                    $element.addClass('form-group');
                }

                // Copy attributes over to input
                angular.forEach($attrs, function (value, _attr) {
                    var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                        $element.removeAttr(attr);
                        input.setAttribute(attr, value);
                    }
                });

                // Type may have been set by copying attributes, if not default to text
                if (!input.getAttribute('type')) {
                    input.setAttribute('type', 'text');
                }

                // Set fields that used to be in HTML
                input.setAttribute('class', 'form-control');
                input.setAttribute('ng-model', 'model');
                input.setAttribute('ng-class', '{ active: model }');
                input.setAttribute('ng-model-options', '{ allowInvalid: true, debounce: 100 }');
                input.setAttribute('id', $scope.id);

                // Copy custom directives
                angular.forEach(directives, function (value, directive) {
                    input.setAttribute(directive, value);
                });

                $element.removeAttr('directives');

                // Copy any wrapped html into input template
                $transclude(function(clone) {

                    var hasInput = false;
                    if (clone) {

                        // Check to see if our transcluded HTML includes an input
                        var newInput;
                        for (var i = 0; i < clone.length; i++) {
                            if (clone[i].nodeName.toLowerCase() == 'input') {
                                hasInput = true;
                                newInput = clone[i];
                            }
                        }

                        if (hasInput) {

                            // Add default attributes to the transcluded input
                            newInput.setAttribute('class', 'form-control');
                            newInput.setAttribute('id', $scope.id);
                            input.setAttribute('name', $scope.id);

                            // Connect this input's model and scope to our directive's scope
                            // FIXME: Known bug when transcluded input is number type, and has an existing model value
                            newInput.setAttribute('ng-class', '{ active: model }');
                            newInput.setAttribute('ng-model', 'model');
                            $compile(clone)($scope);

                            // Add input and any other included HTML to beginning of input
                            // This case ignores all the work we did on the input above. Messy, needs refactoring.
                            $element.prepend(clone);
                        } else {
                            $element.append(clone);
                        }
                    }

                    if (!hasInput) {

                        // Add our manufactured input
                        $compile(input)($scope);
                        $element.prepend(input);
                    }
                });

                if (autofocus) {
                    input.focus();
                }

                $scope.formField = $form[id]; // used for ng-messages. Must retrieve after re-$compiling input

                // Stupid hack to get $dirty state to be correctly set, which bizarrely doesn't happen. WTF
                $scope.$watch('model', function (val) {
                    if (val !== undefined && val !== null && $scope.formField) {
                        $scope.formField.$dirty = true;
                    }
                });
            }
        };
    }
]);

/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 */
angular.module('enplug.sdk.utils').directive('materialRadio', ['$log', '$compile', function ($log, $compile) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide', 'ng-repeat'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        replace: true,
        templateUrl: 'sdk-utils/material-radio.tpl',
        link: function (scope, element, attrs) {

            element.addClass('material-radio');

            var input = element.find('input')[0];

            // Copy attributes over to input
            angular.forEach(attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            $compile(input)(scope);
        }
    };
}]);

/**
 * @ngdoc directive
 * @name materialSelect
 * @module enplug.sdk.utils
 * @description Wraps a select element, turning it into a material-select.
 */
angular.module('enplug.sdk.utils').directive('materialSelect', ['$timeout', function ($timeout) {
    'use strict';

    // Returns a JQLite object for the select element we transcluded, allowing us to
    // pick information from it
    function findSelect(clone) {
        for (var i = 0; i < clone.length; i++) {
            if (clone[i].nodeName.toLowerCase() == 'select') {
                return angular.element(clone[i]);
            }
        }
    }

    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        templateUrl: 'sdk-utils/material-select.tpl',
        link: function (scope, element, attrs, ctrl, transclude) {

            element.addClass('material-select');

            // Take the label from an attribute instead of scope because it'll usually just be a simple
            // string that doesn't need to be bound to
            scope.label = attrs.label;
            element.removeAttr('label');

            transclude(function (clone) {
                var select = findSelect(clone);
                if (select) {

                    // Watch for changes on our select element's model so that we can update the
                    // material-select label and selected state
                    scope.$watch('$parent.' + select.attr('ng-model'), function (val) {

                        if (typeof val !== 'undefined' && val !== null) {
                            element.addClass('selected');

                            // Wait until this digest cycle has completed so that the HTML <select> has
                            // updated its options
                            $timeout(function () {

                                // Access the label property on the currently-selected option from our select
                                // element
                                scope.label = select[0].options[select[0].selectedIndex].label
                            });
                        }
                    });
                } else {
                    console.warn('Warning: material-select requires a <select> element to be transcluded.');
                }
            });
        }
    };
}]);

angular.module('enplug.sdk.utils').directive('materialSwitch', function () {
    'use strict';

    // Returns a JQLite object for the select element we transcluded, allowing us to
    // pick information from it
    function findInput(clone) {
        for (var i = 0; i < clone.length; i++) {
            if (clone[i].nodeName.toLowerCase() == 'input') {
                return angular.element(clone[i]);
            }
        }
    }

    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'sdk-utils/material-switch.tpl',
        scope: { model: '=' },
        link: function (scope, element, attrs, ctrl, transclude) {

            // Keeps track of dirty state, without adding dependency on a form
            scope.dirty = false;

            // If transcluding input, remove other input
            transclude(function (clone) {
                if (findInput(clone)) {
                    angular.element(element[0].querySelector('.default-input')).remove();
                }
            });
        }
    }
});

angular.module('enplug.sdk.utils').directive('helpBlock', function () {
    'use strict';
    return {
        templateUrl: 'sdk-utils/help-block.tpl',
        restrict: 'E'
    }
});

angular.module('enplug.sdk.utils').directive('layoutToggle', ['$rootScope', function ($rootScope) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/layout-toggle.tpl',
        replace: true,
        link: function (scope) {

            if ($rootScope.showGridLayout !== false) {
                $rootScope.showGridLayout = true;
            }
            scope.toggleLayout = function () {
                $rootScope.showGridLayout = !$rootScope.showGridLayout;
            };
        }
    }
}]);

angular.module('enplug.sdk.utils').directive('gridLayout', function () {
    'use strict';

    return {
        link: function (scope, element) {
            scope.$watch('showGridLayout', function (bool) {
                if (bool) {
                    element.removeClass('ng-hide');
                } else {
                    element.addClass('ng-hide');
                }
            });
        }
    }
});

angular.module('enplug.sdk.utils').directive('tableLayout', function () {
    'use strict';

    return {
        link: function (scope, element) {
            scope.$watch('showGridLayout', function (bool) {
                if (bool) {
                    element.addClass('ng-hide');
                } else {
                    element.removeClass('ng-hide');
                }
            });
        }
    }
});

/**
 * @ngdoc directive
 * @name loading
 * @module enplug.sdk.utils
 * @description easy showing/hiding of content based on boolean value or promise.
 *
 * @param condition {promise|boolean} the condition to wait for showing the loading indicator.
 */
angular.module('enplug.sdk.utils').directive('loading', [function() {
    'use strict';

    // Todo: error handling
    // Todo: watch promises that are re-assigned

    function isPromise(val) {
        return typeof val === 'object' && typeof val.then === 'function';
    }

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/loading.tpl',
        transclude: true,
        replace: false,
        scope: {
            isLoading: '=condition'
        },
        link: function(scope, element) {

            element.addClass('loading-wrapper');

            if (isPromise(scope.isLoading)) {
                scope.loading = true;
                scope.isLoading.then(function () {
                    scope.loading = false;
                }, function () {
                    scope.error = true;
                });
            } else {

                // watch the property
                scope.loading = scope.isLoading;
                scope.$watch('isLoading', function (val) {
                    scope.loading = val;
                });
            }
        }
    };
}]);

/**
 * @ngdoc directive
 * @name locationAware
 * @module enplug.sdk.utils.directives
 *
 */
angular.module('enplug.sdk.utils').directive('locationAware', ['$location', function ($location) {
    'use strict';

    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {

            function getPath() {
                var path = attrs.href || attrs.ngHref || attrs.locationAware;
                if (!path) {

                    // search for a child link
                    var anchor = element.find('a');
                    if (anchor) {
                        path = anchor.attr('href') || anchor.attr('ngHref');
                    }
                }
                return path;
            }

            function checkActive() {
                var path = getPath();
                if (path === $location.path()) {
                    element.addClass('active');
                } else {
                    element.removeClass('active');
                }
            }

            checkActive();

            // We need to update active class every time route changes
            scope.$on('$routeChangeSuccess', checkActive);

        }
    };
}]);

/**
 * @ngdoc directive
 * @name notice
 * @module enplug.sdk.utils
 * @description shows a notice message
 */
angular.module('enplug.sdk.utils').directive('notice', function () {
    'use strict';

    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        replace: true,
        templateUrl: 'sdk-utils/alert.tpl',
        link: function (scope) {
            scope.notice = true;
        }
    }
});

/**
 * Created by aleross on 7/14/15. Copyright (c) Enplug, Inc.
 */

/**
 * @ngdoc directive
 * @name proTip
 * @module enplug
 *
 * @param tip {String} Path to tip to show from ProTips constant.
 */
angular.module('enplug.sdk.utils').directive('proTip', ['$log', 'ProTips', function ($log, ProTips) {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'sdk-utils/protip.tpl',
        link: function (scope, element, attrs) {

            // Get the protip config from ProTip constant
            var path = attrs.tip,
                config = _.get(ProTips, path);
            if (_.isString(config)) {
                scope.config = {
                    tip: config
                };
            } else if (_.isObject(config)) {
                scope.config = config;
            } else {
                $log.error('Did not find pro tip config for path:', path);
                element.remove();
            }
        }
    };
}]);

/**
 * @ngdoc directive
 * @name statusButton
 * @module enplug.sdk.utils
 * @description easy showing/hiding of loading indicator in a button based on bool, promise, or function returned promise
 *
 * @param condition {function|promise|boolean} the condition to wait for showing the loading indicator.
 * @param action {function} the click action which can take parameters and should return a promise
 */
angular.module('enplug.sdk.utils').directive('statusButton', ['$log', '$timeout', function ($log, $timeout) {
    'use strict';

    // TODO: animate the icons a bit

    var showStatusDelay = 2000; // milliseconds to show success/error icon before resetting

    function isPromise(val) {
        return typeof val === 'object' && typeof val.then === 'function';
    }

    return {
        restrict: 'E',
        replace: true,
        scope: {
            condition: '=condition',
            action: '&'
        },
        transclude: true,
        templateUrl: 'sdk-utils/status-button.tpl',
        link: function (scope, element, attrs) {

            // Assign default classes
            if (!element.hasClass('btn')) {
                element.addClass('btn');
                element.addClass('btn-default');
            }

            // Allow ng-click style function calls with parameters
            if (scope.action) {
                element.bind('click', function (event, data) {
                    scope.$apply(function () {
                        var promise = scope.action({ data: data });
                        if (isPromise(promise)) {
                            handlePromise(promise);
                        } else {
                            $log.warn('Status button action must return a promise.');
                        }
                    });
                });
            }

            function handlePromise(promise) {
                scope.isLoading = true;
                promise.then(function () {
                    scope.success = true;
                }, function () {
                    scope.error = true;
                }).finally(function () {
                    element[0].blur();
                    scope.isLoading = false;
                    $timeout(function () {
                        scope.success = false;
                        scope.error = false;
                    }, showStatusDelay);
                });
            }

            // Watch a property for changes
            if (typeof attrs.condition !== 'undefined') {
                scope.isLoading = scope.condition;
                scope.$watch('condition', function (val) {
                    scope.isLoading = val;
                });
            }
        }
    }
}]);

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

angular.module('enplug.sdk.utils').directive('stSummary', [function () {
    return {
        restrict: 'E',
        require: '^stTable',
        template: '<div class="summary">Showing {{ stRange.from }}-{{ stRange.to }} of {{ size }}</div>',
        link: function ($scope, $element, $attrs, $stTable) {

            // Watch for updates to data
            $scope.$watch($stTable.getFilteredCollection, function  (val) {
                $scope.size = (val || []).length;
            });

            // Watch for updates to pagination
            $scope.$watch('currentPage', function () {
                $scope.stRange = {
                    from: null,
                    to: null
                };

                $scope.stRange.from = $stTable.tableState().pagination.start + 1;
                $scope.stRange.to = $scope.currentPage === $scope.numPages ? $scope.size : ($scope.stRange.from + $scope.stItemsByPage - 1);
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name tagInput
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('tagInput', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tags: '='
        },
        templateUrl: 'sdk-utils/tag-input.tpl',
        link: function (scope, element, attrs) {

            scope.deleteTag = function(tag) {
                for ( var i=0,l=scope.tags.length; i<l; i++ ) {
                    if (  scope.tags[i] === tag ) {
                        scope.tags.splice(i, 1);
                    }
                }
            }

            scope.handleTextChange = function () {
                if ( scope.input == null ) {
                    return;  // filter empty input case
                }
                processTags(1);
            }

            scope.handleKeyPress = function (event) {
                if ( scope.input == null ) {
                    return;  // filter empty input case
                }
                if ( event.charCode != 13 && event.charCode != 32 ) {
                    return; // filter Enter Key and Space ONLY
                }
                if ( scope.input === ' ' || scope.input.length === 0) {
                    return; // filter edge cases
                }
                processTags(0);
            }

            function processTags(offset) {
                var words = scope.input.split(' ');
                for ( var i=offset; i<words.length; i++ ) {
                    if ( scope.tags.indexOf( words[i] ) === -1 ) {
                        scope.tags.push(words[i]);
                    }
                    words.splice(i--, 1);
                }
                scope.input = words.join(' ');
            }
        }
    };
});

/**
 * @ngdoc directive
 * @name tagSelect
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('tagSelect', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tags: '=',
            selectedTags: '='
        },
        templateUrl: 'sdk-utils/tag-select.tpl',
        link: function (scope, element, attrs) {

            scope.toggleSelection = function (tag) {
                var index = scope.selectedTags.indexOf(tag);

                if ( index > -1 ) {
                    scope.selectedTags.splice(index, 1);
                } else {
                    scope.selectedTags.push(tag);
                }
            };

            scope.isSelected = function ( tag ) {
                return scope.selectedTags.indexOf( tag ) > -1;
            }
        }
    };
});

/**
 * @ngdoc directive
 * @name tooltip
 * @module enplug.sdk.utils
 *
 * @param tip {String} Path to tip to show from ToolTips constant.
 */
angular.module('enplug.sdk.utils').directive('tooltip', ['Tooltips', function (Tooltips) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/tooltip.tpl',
        replace: true,
        scope: true,
        link: function (scope, element, attrs) {

            // Get the tooltip config from Tips constant
            var tip = attrs.tip,
                config = _.get(Tooltips, tip) || {};

            // Default position
            if (typeof config.position !== 'string') {
                config.position = 'top center'; // default position
            }

            // Allow for passing in string tips without a path
            if (!config.text) {
                config.text = tip;
            }

            // Add external link indicator if this isn't a local link
            if (config.link && ~config.link.location.indexOf('http')) {
                element.find('a').attr('target', '_blank');
            }

            scope.config = config;
        }
    };
}]);

/**
 * @ngdoc service
 * @name ColorTools
 * @module enplug.sdk.utils
 * @source https://gist.github.com/emanuel-sanabria-developer/5793377
 */

 angular.module('enplug.sdk.utils').factory('ColorTools', [function () {
    
    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   Number  r       The red color value
     * @param   Number  g       The green color value
     * @param   Number  b       The blue color value
     * @return  Array           The HSL representation
     */
    function rgb2hsl (r, g, b) {

        var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

        if (diff == 0) {
            h = s = 0;
        } else {
            s = diff / v;
            rr = diffc(r);
            gg = diffc(g);
            bb = diffc(b);

            if (r === v) {
                h = bb - gg;
            }else if (g === v) {
                h = (1 / 3) + rr - bb;
            }else if (b === v) {
                h = (2 / 3) + gg - rr;
            }
            if (h < 0) {
                h += 1;
            }else if (h > 1) {
                h -= 1;
            }
        }
        return [h, s, v ]
    }

    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Number  h       The hue
     * @param   Number  s       The saturation
     * @param   Number  l       The lightness
     * @return  Array           The RGB representation
     */
    function hsl2rgb (h,s,v) {
        var r,g,b,i,f,p,q,t,hue;
        if (h.h !=null){
            v=h.b;
            s=h.s;
            h=h.h;
        }
        h%=360;
        if (h<1) h*=360;
        s=s>1?1:s<0?0:s;
        v=v>1?1:v<0?0:v;
        hue=h
        if (s==0) r=g=b=v;
        else {
            h/=60;
            f=h-(i=Math.floor(h));
            p=v*(1-s);
            q=v*(1-s*f);
            t=v*(1-s*(1-f));
            switch (i) {
                case 0:r=v; g=t; b=p; break;
                case 1:r=q; g=v; b=p; break;
                case 2:r=p; g=v; b=t; break;
                case 3:r=p; g=q; b=v; break;
                case 4:r=t; g=p; b=v; break;
                case 5:r=v; g=p; b=q; break;
            }
        }
        return [ Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)]
    }

    /**
     * Converts HEX color value to Array of integer representing the Red Green Blue channels.
     *
     * @param   Number  hex     The hex value FFFFFF
     * @return  Array of 3 Number  The RGB value [ [0, 255], [0, 255], [0, 255] ].
     */
    function hex2rgb (hex) {
        return [ (hex >> 16) & 255, (hex >> 8) & 255, hex & 255 ];
    }

    /**
     * Converts RGB color value to array of hex representing the Red Green Blue channels.
     *
     * @param   Number  r           red [0,1]
     * @param   Number  g           red [0,1]
     * @param   Number  r           red [0,2]
     * @return  Array ofb3 Number   The RGB value [ [0, 255], [0, 255], [0, 255] ].
     */
    function rgb2hex ( r, g, b) {
        var hex = (r*65536+g*256+b).toString(16,6);
        while ( hex.length < 6 ) {
            hex = '0'+hex;
        }
        return hex;
    }

    return {
        rgb2hsl: rgb2hsl,
        hsl2rgb: hsl2rgb,
        hex2rgb: hex2rgb,
        rgb2hex: rgb2hex
    };
}]);

angular.module('enplug.sdk.utils').service('DetectChanges', ['$log', function ($log) {

    // TODO: remove lodash dependency

    'use strict';

    /**
     * Fields being watched for changes.
     * @type {Array}
     */
    var fields = [];

    /**
     * Convenience debug method.
     * @param field
     */
    function log(field) {
        $log.debug('Change detected:', field);
    }

    return {

        /**
         * Takes a single or array of fields to watch on the $scope.
         * Example: 'scheduling.times', or ['height', 'width']
         * Todo: is there any harm in using scope? should we be destroying the fields after route change?
         * @param watchForChanges
         * @param scope
         * @param verbose for debugging
         */
        watch: function (watchForChanges, scope, verbose) {
            fields = []; // reset any previous usages
            if (!_.isObject(scope)) {
                $log.error('Detect changes requires $scope.');
                return;
            }
            if (!_.isArray(watchForChanges)) {
                watchForChanges = [watchForChanges];
            }

            // Register watchers for each field
            watchForChanges.forEach(function (watcher) {
                var field = {
                    property: watcher,
                    changed: false
                };

                // Get the original value, can be as nested as we want
                field.original = _.cloneDeep(watcher.split('.').reduce(function (map, key) {
                    return map[key];
                }, scope));

                // Store the type for debugging/reference
                field.type = typeof field.original;

                // Track this field
                fields.push(field);

                // Register listeners based on data type
                if (_.isArray(field.original)) {
                    // Arrays need to be watched as a collection
                    scope.$watch(field.property, function (newValue, oldValue) {
                        // Todo add a property to track by instead of equality xor?
                        field.changed = !_.isEqual(newValue, field.original);
                        field.current = newValue;
                        if (verbose && newValue !== oldValue) {
                            log(field);
                        }
                    }, true);
                } else if (_.isDate(field.original)) {
                    field.type = 'Date';
                    scope.$watch(field.property, function (newValue) {
                        if (_.isDate(newValue)) {
                            field.changed = field.original.getTime() !== newValue.getTime();
                        } else {
                            field.changed = true;
                        }
                        field.current = newValue;
                        if (verbose) {
                            log(field);
                        }
                    });
                } else {
                    // Todo watch objects differently?
                    scope.$watch(field.property, function (newValue, oldValue) {
                        field.changed = newValue !== field.original;
                        field.current = newValue;
                        if (verbose && newValue !== oldValue) {
                            log(field);
                        }
                    });
                }
            });

            if (verbose) {
                $log.debug('[DetectChanges] Registered fields to watch:', fields);
            }
        },

        /**
         * Returns whether any properties being watched have changed.
         * @returns {boolean}
         */
        hasChanges: function () {
            var changed = _.filter(fields, { changed: true });
            return changed.length > 0;
        },

        /**
         * Returns array of property strings being watched for changes.
         * @returns {Array}
         */
        fieldsChanged: function () {
            return _.pluck(_.filter(fields, { changed: true }), 'property');
        },

        reset: function () {
            fields = [];
        }
    };
}]);

angular.module('enplug.sdk.utils').factory('GUID', [function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return {
        new: function() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    };
}]);

/**
 * @ngdoc service
 * @name PositionTools
 * @module enplug.sdk.utils
 * @source snippets from jquery library
 */

 angular.module('enplug.sdk.utils').factory('PositionTools', ['$window', function ($window) {
    
    function getOffset(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return {
            	top: rect.top + $window.pageYOffset - docElem.clientTop,
                left: rect.left + $window.pageXOffset - docElem.clientLeft
            };
        }
    }

	function getLeft(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return rect.left + $window.pageXOffset - docElem.clientLeft;
        }
    }

	function getTop(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return rect.top + $window.pageYOffset - docElem.clientTop;
        }
    }

    return {
        getOffset: getOffset,
        getLeft: getLeft,
        getTop: getTop
    };
}]);

angular.module('enplug.sdk.utils').factory('ScriptLoaderService', ['$q', '$document', '$timeout', function ($q, $document, $timeout) {
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
}]);

angular.module('enplug.sdk.utils.templates', []).run(['$templateCache', function($templateCache) {
    "use strict";
    $templateCache.put("sdk-utils/alert.tpl",
        "<div class=alert><i ng-hide=notice class=\"ion-alert-circled alert-icon\"></i> <i ng-show=notice class=\"ion-information-circled alert-icon\"></i><ng-transclude class=alert-body></ng-transclude></div>");
    $templateCache.put("sdk-utils/background-picker.tpl",
        "<div class=\"clearfix background-picker\"><div><button class=upload-image ng-hide=imageData.BgUrl ng-click=promptImageUpload() translate>Upload Image</button><div class=\"upload-image uploaded\" ng-show=imageData.BgUrl><span class=filename title={{imageData.BgFilename}}>{{imageData.BgFilename}}</span> <a class=remove ng-click=removeUploadedFile()>✕</a></div></div><div ng-show=imageData.BgUrl class=image-position><div class=\"one-third clearfix\"><ul class=\"alignement-widget clearfix\"><li class=top-left ng-click=\"imageData.BgPosition='top-left'\" ng-class=\"{ active: imageData.BgPosition=='top-left', disabled:isDisabled('top-left') }\"></li><li class=top ng-click=\"imageData.BgPosition='top'\" ng-class=\"{ active: imageData.BgPosition=='top', disabled:isDisabled('top') }\"></li><li class=top-right ng-click=\"imageData.BgPosition='top-right'\" ng-class=\"{ active: imageData.BgPosition=='top-right', disabled:isDisabled('top-right') }\"></li><li class=left ng-click=\"imageData.BgPosition='left'\" ng-class=\"{ active: imageData.BgPosition=='left', disabled:isDisabled('left') }\"></li><li class=center ng-click=\"imageData.BgPosition='center'\" ng-class=\"{ active: imageData.BgPosition=='center', disabled:isDisabled('center') }\"></li><li class=right ng-click=\"imageData.BgPosition='right'\" ng-class=\"{ active: imageData.BgPosition=='right', disabled:isDisabled('right') }\"></li><li class=bottom-left ng-click=\"imageData.BgPosition='bottom-left'\" ng-class=\"{ active: imageData.BgPosition=='bottom-left', disabled:isDisabled('bottom-left') }\"></li><li class=bottom ng-click=\"imageData.BgPosition='bottom'\" ng-class=\"{ active: imageData.BgPosition=='bottom', disabled:isDisabled('bottom') }\"></li><li class=bottom-right ng-click=\"imageData.BgPosition='bottom-right'\" ng-class=\"{ active: imageData.BgPosition=='bottom-right', disabled:isDisabled('bottom-right') }\"></li></ul><p translate>Position</p></div><div class=\"two-thirds clearfix\"><div class=\"full-width half-height\" ng-click=\"imageData.BgSize='contain'\" ng-class=\"{ active: imageData.BgSize=='contain' }\"><p class=\"icon icon-contain\" translate>Contain</p></div><div class=\"full-width half-height\" ng-click=\"imageData.BgSize='cover'\" ng-class=\"{ active: imageData.BgSize=='cover' }\"><p class=\"icon icon-cover\"><translate>Cover</translate><span class=sub-icon></span></p></div></div></div></div>");
    $templateCache.put("sdk-utils/color-picker.tpl",
        "<div class=color-picker ng-blur=close()><div class=swatch ng-style=\"{ 'background-color': '#' + hex }\" ng-click=toggle()></div><div class=transcluded ng-transclude ng-click=toggle()></div><div class=palette ng-class=\"{ 'opened': opened }\"><div class=saturation ng-class=\"{ 'no-alpha': noAlpha }\" ng-style=\"{ 'background-color': '#' + getHueColor() }\"><div class=cursor></div></div><div class=preview ng-style=\"{ 'background-color': '#' + hex }\"></div><div class=hue><div class=cursor></div></div><div class=numbers><ul class=clearfix ng-class=\"{ 'show-as-hex': showAs=='hex', 'show-as-rgb': showAs=='rgb'  }\"><li class=\"\"><label translate translate-comment=\"R represents 'red' in rgb\">R:</label><input class=channel-red type=number name=channel-red min=0 max=255 ng-model=red ng-change=watchRGBInputChange()></li><li class=\"\"><label translate translate-comment=\"G represents 'green' in rgb\">G:</label><input class=channel-green type=number name=channel-green min=0 max=255 ng-model=green ng-change=watchRGBInputChange()></li><li class=\"\"><label translate translate-comment=\"B represents 'blue' in rgb\">B:</label><input class=channel-blue type=number name=channel-blue min=0 max=255 ng-model=blue ng-change=watchRGBInputChange()></li><li class=iconic ng-click=toggleShowAs()><i class=\"icon ion-android-options\"></i></li><li class=hex-values><label>#</label><input class=hex-input name=hex-input maxlength=6 ng-model=hexInput ng-change=watchHEXInputChange()></li></ul></div><div class=alpha ng-hide=noAlpha><div class=field><label translate translate-comment=\"A represents 'Alpha'\">A:</label><input class=channel-alpha type=number name=channel-alpha min=0 max=100 ng-model=alphaPercent></div><div class=alpha-slider ng-style=\"{ 'background-color': '#' + hex }\"><div class=cursor></div></div></div></div></div>");
    $templateCache.put("sdk-utils/custom-duration-slider.tpl",
        "<div class=duration-slider-directive><div class=\"slider-container clearfix\"><div class=slider><div class=slider-cursor><i ng-show=ratio class=\"icon on ion-record\"><span>||</span></i> <i ng-hide=ratio class=\"icon on ion-record icon-undefined\"><span>&mdash;</span></i></div></div></div><input maxlength=5 ng-model=ratio placeholder={{placeholder}} class=slider-duration-input ng-blur=checkRatioValue() ng-focus=clearUndefined() ng-keydown=handleKeyDown($event)></div>");
    $templateCache.put("sdk-utils/display-counter.tpl",
        "<div class=display-counter><span ng-bind=count class=binding></span></div>");
    $templateCache.put("sdk-utils/duration-slider.tpl",
        "<div class=duration-slider><div class=slider-cursor><span>{{formatLabel(ratio)}}</span></div></div>");
    $templateCache.put("sdk-utils/help-block.tpl",
        "<footer class=\"footer-help block-center\"><div class=\"info-message text-gray\"><i class=\"ion-help-circled text-primary\"></i><translate translate-comment=\"The full paragraph for this string is the following: 'Need help? Go to the Enplug Help Center'\">Need help? Go to the</translate><a href=http://support.enplug.com/hc/en-us target=_blank><translate>Enplug Help Center</translate></a></div></footer>");
    $templateCache.put("sdk-utils/layout-toggle.tpl",
        "<div class=\"btn-group layout-toggle\"><button ng-click=toggleLayout() ng-disabled=showGridLayout class=\"btn btn-default btn-icon btn-sm ion-android-apps grid-toggle\"></button> <button ng-click=toggleLayout() ng-disabled=!showGridLayout class=\"btn btn-default btn-icon btn-sm ion-navicon table-toggle\"></button></div>");
    $templateCache.put("sdk-utils/loading.tpl",
        "<div class=loading-directive ng-show=loading><div class=loader ng-hide=error><svg class=circular><circle class=path cx=32 cy=32 r=30 fill=none stroke-width=2></circle></svg></div><div ng-show=error><p translate>There was an error.</p></div></div><ng-transclude class=loading-content ng-hide=loading></ng-transclude>");
    $templateCache.put("sdk-utils/material-checkbox.tpl",
        "<div class=checkbox><label for=\"{{ id }}\"><input id=\"{{ id }}\" type=checkbox ng-model=model> <span class=checkbox-material><span class=check></span></span> <span class=checkbox-label><span ng-bind=\"label | translate\"></span></span></label></div>");
    $templateCache.put("sdk-utils/material-input.tpl",
        "<label for=\"{{ ::id }}\" ng-bind=\"label | translate\"></label><div class=validation ng-messages=formField.$error ng-if=formField.$dirty><span class=text-danger ng-message=required translate>This is required.</span> <span class=text-danger ng-message=email translate>Please enter a valid email address.</span> <span class=text-danger ng-message=url translate>Please enter a valid URL starting with http:// or https://</span> <span class=text-danger ng-message=equals translate>Passwords must match.</span></div>");
    $templateCache.put("sdk-utils/material-radio.tpl",
        "<div class=radio><label><input type=radio ng-model=model> <span class=radio-on></span> <span class=radio-off></span><ng-transclude></ng-transclude></label></div>");
    $templateCache.put("sdk-utils/material-select.tpl",
        "<span class=form-label ng-bind=\"label | translate\"></span><ng-transclude></ng-transclude>");
    $templateCache.put("sdk-utils/material-switch.tpl",
        "<label class=material-switch ng-class=\"{ 'switch-on': model, 'switch-off': !model, dirty: dirty }\" ng-click=\"dirty = true\"><input class=default-input type=checkbox ng-model=model><ng-transclude></ng-transclude></label>");
    $templateCache.put("sdk-utils/protip.tpl",
        "<div class=pro-tip><i class=\"ion-flash text-primary\"></i> <strong translate>ProTip:</strong> <span ng-bind=\"config.tip | translate\"></span> <a ng-if=::config.link dynamic-click=::config.link.action dynamic-href=::config.link.location ng-bind=\"config.link.text | translate\"></a></div>");
    $templateCache.put("sdk-utils/status-button.tpl",
        "<button class=status-button><i class=ion-load-a ng-show=isLoading></i> <i class=ion-checkmark-circled ng-show=\"!isLoading && success\"></i> <i class=ion-alert-circled ng-show=\"!isLoading && error\"></i><ng-transclude></ng-transclude></button>");
    $templateCache.put("sdk-utils/tag-input.tpl",
        "<div class=\"tag-input clearfix\"><ul class=\"list clearfix\"><li class=tag ng-repeat=\"tag in tags track by $index\">{{tag}} <i ng-click=deleteTag(tag) class=\"icon ion-android-close\"></i></li><li><input name=fname placeholder=\"{{ 'Add tags' | translate }}\" ng-model=input ng-change=handleTextChange() ng-keypress=\"handleKeyPress($event)\"></li></ul></div>");
    $templateCache.put("sdk-utils/tag-select.tpl",
        "<div class=\"tag-select clearfix\"><ul class=\"list clearfix\"><li class=tag ng-repeat=\"tag in tags track by $index\" ng-click=toggleSelection(tag) ng-class=\"{ 'selected': isSelected(tag) }\">{{tag}}</li></ul></div>");
    $templateCache.put("sdk-utils/tooltip.tpl",
        "<span class=glossaryTip><sup ng-hide=::config.tooltip class=\"icon ion-help-circled text-gray-light\"></sup> <span class=tipText ng-show=::config.tooltip ng-bind=\"config.tooltip | translate\"></span> <span class=tip ng-class=::config.position><span class=\"tip-content radius shadow\"><span ng-if=config.title class=\"tipTitle text-gd\" ng-bind=\"config.title | translate\"></span> <span class=\"tipBody text-reset\" ng-bind=\"config.text | translate\" ng-class=\"{ pt: !config.title, pb: !config.link }\"></span> <a ng-if=::config.link class=link-reset ng-href=\"{{ ::config.link.location }}\" ng-bind=\"config.link.title | translate\"></a> <span class=tipArrow></span></span></span></span>");
}]);
