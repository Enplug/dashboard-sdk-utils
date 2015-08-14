angular.module('enplug.sdk.utils', ['enplug.sdk.utils.templates']);

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

angular.module('enplug.sdk.utils').constant('countries', [
        {name: "UNITED STATES", code: "US"},
        {name: "AFGHANISTAN", code: "AF"},
        {name: "ALAND ISLANDS", code: "AX"},
        {name: "ALBANIA", code: "AL"},
        {name: "ALGERIA", code: "DZ"},
        {name: "AMERICAN SAMOA", code: "AS"},
        {name: "ANDORRA", code: "AD"},
        {name: "ANGOLA", code: "AO"},
        {name: "ANGUILLA", code: "AI"},
        {name: "ANTARCTICA", code: "AQ"},
        {name: "ANTIGUA AND BARBUDA", code: "AG"},
        {name: "ARGENTINA", code: "AR"},
        {name: "ARMENIA", code: "AM"},
        {name: "ARUBA", code: "AW"},
        {name: "AUSTRALIA", code: "AU"},
        {name: "AUSTRIA", code: "AT"},
        {name: "AZERBAIJAN", code: "AZ"},
        {name: "BAHAMAS", code: "BS"},
        {name: "BAHRAIN", code: "BH"},
        {name: "BANGLADESH", code: "BD"},
        {name: "BARBADOS", code: "BB"},
        {name: "BELARUS", code: "BY"},
        {name: "BELGIUM", code: "BE"},
        {name: "BELIZE", code: "BZ"},
        {name: "BENIN", code: "BJ"},
        {name: "BERMUDA", code: "BM"},
        {name: "BHUTAN", code: "BT"},
        {name: "BOLIVIA, PLURINATIONAL STATE OF", code: "BO"},
        {name: "BONAIRE, SINT EUSTATIUS AND SABA", code: "BQ"},
        {name: "BOSNIA AND HERZEGOVINA", code: "BA"},
        {name: "BOTSWANA", code: "BW"},
        {name: "BOUVET ISLAND", code: "BV"},
        {name: "BRAZIL", code: "BR"},
        {name: "BRITISH INDIAN OCEAN TERRITORY", code: "IO"},
        {name: "BRUNEI DARUSSALAM", code: "BN"},
        {name: "BULGARIA", code: "BG"},
        {name: "BURKINA FASO", code: "BF"},
        {name: "BURUNDI", code: "BI"},
        {name: "CAMBODIA", code: "KH"},
        {name: "CAMEROON", code: "CM"},
        {name: "CANADA", code: "CA"},
        {name: "CAPE VERDE", code: "CV"},
        {name: "CAYMAN ISLANDS", code: "KY"},
        {name: "CENTRAL AFRICAN REPUBLIC", code: "CF"},
        {name: "CHAD", code: "TD"},
        {name: "CHILE", code: "CL"},
        {name: "CHINA", code: "CN"},
        {name: "CHRISTMAS ISLAND", code: "CX"},
        {name: "COCOS (KEELING) ISLANDS", code: "CC"},
        {name: "COLOMBIA", code: "CO"},
        {name: "COMOROS", code: "KM"},
        {name: "CONGO", code: "CG"},
        {name: "CONGO, THE DEMOCRATIC REPUBLIC OF THE", code: "CD"},
        {name: "COOK ISLANDS", code: "CK"},
        {name: "COSTA RICA", code: "CR"},
        {name: "CÔTE D'IVOIRE", code: "CI"},
        {name: "CROATIA", code: "HR"},
        {name: "CUBA", code: "CU"},
        {name: "CURAÇAO", code: "CW"},
        {name: "CYPRUS", code: "CY"},
        {name: "CZECH REPUBLIC", code: "CZ"},
        {name: "DENMARK", code: "DK"},
        {name: "DJIBOUTI", code: "DJ"},
        {name: "DOMINICA", code: "DM"},
        {name: "DOMINICAN REPUBLIC", code: "DO"},
        {name: "ECUADOR", code: "EC"},
        {name: "EGYPT", code: "EG"},
        {name: "EL SALVADOR", code: "SV"},
        {name: "EQUATORIAL GUINEA", code: "GQ"},
        {name: "ERITREA", code: "ER"},
        {name: "ESTONIA", code: "EE"},
        {name: "ETHIOPIA", code: "ET"},
        {name: "FALKLAND ISLANDS (MALVINAS)", code: "FK"},
        {name: "FAROE ISLANDS", code: "FO"},
        {name: "FIJI", code: "FJ"},
        {name: "FINLAND", code: "FI"},
        {name: "FRANCE", code: "FR"},
        {name: "FRENCH GUIANA", code: "GF"},
        {name: "FRENCH POLYNESIA", code: "PF"},
        {name: "FRENCH SOUTHERN TERRITORIES", code: "TF"},
        {name: "GABON", code: "GA"},
        {name: "GAMBIA", code: "GM"},
        {name: "GEORGIA", code: "GE"},
        {name: "GERMANY", code: "DE"},
        {name: "GHANA", code: "GH"},
        {name: "GIBRALTAR", code: "GI"},
        {name: "GREECE", code: "GR"},
        {name: "GREENLAND", code: "GL"},
        {name: "GRENADA", code: "GD"},
        {name: "GUADELOUPE", code: "GP"},
        {name: "GUAM", code: "GU"},
        {name: "GUATEMALA", code: "GT"},
        {name: "GUERNSEY", code: "GG"},
        {name: "GUINEA", code: "GN"},
        {name: "GUINEA-BISSAU", code: "GW"},
        {name: "GUYANA", code: "GY"},
        {name: "HAITI", code: "HT"},
        {name: "HEARD ISLAND AND MCDONALD ISLANDS", code: "HM"},
        {name: "HOLY SEE (VATICAN CITY STATE)", code: "VA"},
        {name: "HONDURAS", code: "HN"},
        {name: "HONG KONG", code: "HK"},
        {name: "HUNGARY", code: "HU"},
        {name: "ICELAND", code: "IS"},
        {name: "INDIA", code: "IN"},
        {name: "INDONESIA", code: "ID"},
        {name: "IRAN, ISLAMIC REPUBLIC OF", code: "IR"},
        {name: "IRAQ", code: "IQ"},
        {name: "IRELAND", code: "IE"},
        {name: "ISLE OF MAN", code: "IM"},
        {name: "ISRAEL", code: "IL"},
        {name: "ITALY", code: "IT"},
        {name: "JAMAICA", code: "JM"},
        {name: "JAPAN", code: "JP"},
        {name: "JERSEY", code: "JE"},
        {name: "JORDAN", code: "JO"},
        {name: "KAZAKHSTAN", code: "KZ"},
        {name: "KENYA", code: "KE"},
        {name: "KIRIBATI", code: "KI"},
        {name: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF", code: "KP"},
        {name: "KOREA, REPUBLIC OF", code: "KR"},
        {name: "KUWAIT", code: "KW"},
        {name: "KYRGYZSTAN", code: "KG"},
        {name: "LAO PEOPLE'S DEMOCRATIC REPUBLIC", code: "LA"},
        {name: "LATVIA", code: "LV"},
        {name: "LEBANON", code: "LB"},
        {name: "LESOTHO", code: "LS"},
        {name: "LIBERIA", code: "LR"},
        {name: "LIBYA", code: "LY"},
        {name: "LIECHTENSTEIN", code: "LI"},
        {name: "LITHUANIA", code: "LT"},
        {name: "LUXEMBOURG", code: "LU"},
        {name: "MACAO", code: "MO"},
        {name: "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF", code: "MK"},
        {name: "MADAGASCAR", code: "MG"},
        {name: "MALAWI", code: "MW"},
        {name: "MALAYSIA", code: "MY"},
        {name: "MALDIVES", code: "MV"},
        {name: "MALI", code: "ML"},
        {name: "MALTA", code: "MT"},
        {name: "MARSHALL ISLANDS", code: "MH"},
        {name: "MARTINIQUE", code: "MQ"},
        {name: "MAURITANIA", code: "MR"},
        {name: "MAURITIUS", code: "MU"},
        {name: "MAYOTTE", code: "YT"},
        {name: "MEXICO", code: "MX"},
        {name: "MICRONESIA, FEDERATED STATES OF", code: "FM"},
        {name: "MOLDOVA, REPUBLIC OF", code: "MD"},
        {name: "MONACO", code: "MC"},
        {name: "MONGOLIA", code: "MN"},
        {name: "MONTENEGRO", code: "ME"},
        {name: "MONTSERRAT", code: "MS"},
        {name: "MOROCCO", code: "MA"},
        {name: "MOZAMBIQUE", code: "MZ"},
        {name: "MYANMAR", code: "MM"},
        {name: "NAMIBIA", code: "NA"},
        {name: "NAURU", code: "NR"},
        {name: "NEPAL", code: "NP"},
        {name: "NETHERLANDS", code: "NL"},
        {name: "NEW CALEDONIA", code: "NC"},
        {name: "NEW ZEALAND", code: "NZ"},
        {name: "NICARAGUA", code: "NI"},
        {name: "NIGER", code: "NE"},
        {name: "NIGERIA", code: "NG"},
        {name: "NIUE", code: "NU"},
        {name: "NORFOLK ISLAND", code: "NF"},
        {name: "NORTHERN MARIANA ISLANDS", code: "MP"},
        {name: "NORWAY", code: "NO"},
        {name: "OMAN", code: "OM"},
        {name: "PAKISTAN", code: "PK"},
        {name: "PALAU", code: "PW"},
        {name: "PALESTINE, STATE OF", code: "PS"},
        {name: "PANAMA", code: "PA"},
        {name: "PAPUA NEW GUINEA", code: "PG"},
        {name: "PARAGUAY", code: "PY"},
        {name: "PERU", code: "PE"},
        {name: "PHILIPPINES", code: "PH"},
        {name: "PITCAIRN", code: "PN"},
        {name: "POLAND", code: "PL"},
        {name: "PORTUGAL", code: "PT"},
        {name: "PUERTO RICO", code: "PR"},
        {name: "QATAR", code: "QA"},
        {name: "RÉUNION", code: "RE"},
        {name: "ROMANIA", code: "RO"},
        {name: "RUSSIAN FEDERATION", code: "RU"},
        {name: "RWANDA", code: "RW"},
        {name: "SAINT BARTHÉLEMY", code: "BL"},
        {name: "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA", code: "SH"},
        {name: "SAINT KITTS AND NEVIS", code: "KN"},
        {name: "SAINT LUCIA", code: "LC"},
        {name: "SAINT MARTIN (FRENCH PART)", code: "MF"},
        {name: "SAINT PIERRE AND MIQUELON", code: "PM"},
        {name: "SAINT VINCENT AND THE GRENADINES", code: "VC"},
        {name: "SAMOA", code: "WS"},
        {name: "SAN MARINO", code: "SM"},
        {name: "SAO TOME AND PRINCIPE", code: "ST"},
        {name: "SAUDI ARABIA", code: "SA"},
        {name: "SENEGAL", code: "SN"},
        {name: "SERBIA", code: "RS"},
        {name: "SEYCHELLES", code: "SC"},
        {name: "SIERRA LEONE", code: "SL"},
        {name: "SINGAPORE", code: "SG"},
        {name: "SINT MAARTEN (DUTCH PART)", code: "SX"},
        {name: "SLOVAKIA", code: "SK"},
        {name: "SLOVENIA", code: "SI"},
        {name: "SOLOMON ISLANDS", code: "SB"},
        {name: "SOMALIA", code: "SO"},
        {name: "SOUTH AFRICA", code: "ZA"},
        {name: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", code: "GS"},
        {name: "SOUTH SUDAN", code: "SS"},
        {name: "SPAIN", code: "ES"},
        {name: "SRI LANKA", code: "LK"},
        {name: "SUDAN", code: "SD"},
        {name: "SURINAME", code: "SR"},
        {name: "SVALBARD AND JAN MAYEN", code: "SJ"},
        {name: "SWAZILAND", code: "SZ"},
        {name: "SWEDEN", code: "SE"},
        {name: "SWITZERLAND", code: "CH"},
        {name: "SYRIAN ARAB REPUBLIC", code: "SY"},
        {name: "TAIWAN, PROVINCE OF CHINA", code: "TW"},
        {name: "TAJIKISTAN", code: "TJ"},
        {name: "TANZANIA, UNITED REPUBLIC OF", code: "TZ"},
        {name: "THAILAND", code: "TH"},
        {name: "TIMOR-LESTE", code: "TL"},
        {name: "TOGO", code: "TG"},
        {name: "TOKELAU", code: "TK"},
        {name: "TONGA", code: "TO"},
        {name: "TRINIDAD AND TOBAGO", code: "TT"},
        {name: "TUNISIA", code: "TN"},
        {name: "TURKEY", code: "TR"},
        {name: "TURKMENISTAN", code: "TM"},
        {name: "TURKS AND CAICOS ISLANDS", code: "TC"},
        {name: "TUVALU", code: "TV"},
        {name: "UGANDA", code: "UG"},
        {name: "UKRAINE", code: "UA"},
        {name: "UNITED ARAB EMIRATES", code: "AE"},
        {name: "UNITED KINGDOM", code: "GB"},
        {name: "UNITED STATES MINOR OUTLYING ISLANDS", code: "UM"},
        {name: "URUGUAY", code: "UY"},
        {name: "UZBEKISTAN", code: "UZ"},
        {name: "VANUATU", code: "VU"},
        {name: "VENEZUELA, BOLIVARIAN REPUBLIC OF", code: "VE"},
        {name: "VIET NAM", code: "VN"},
        {name: "VIRGIN ISLANDS, BRITISH", code: "VG"},
        {name: "VIRGIN ISLANDS, U.S.", code: "VI"},
        {name: "WALLIS AND FUTUNA", code: "WF"},
        {name: "WESTERN SAHARA", code: "EH"},
        {name: "YEMEN", code: "YE"},
        {name: "ZAMBIA", code: "ZM"},
        {name: "ZIMBABWE", code: "ZW"}
]);

angular.module('enplug.sdk.utils').constant('months', [
    {
        label: '01 - Jan',
        value: '01'
    }, {
        label: '02 - Feb',
        value: '02'
    }, {
        label: '03 - Mar',
        value: '03'
    }, {
        label: '04 - Apr',
        value: '04'
    }, {
        label: '05 - May',
        value: '05'
    }, {
        label: '06 - Jun',
        value: '06'
    }, {
        label: '07 - Jul',
        value: '07'
    }, {
        label: '08 - Aug',
        value: '08'
    }, {
        label: '09 - Sep',
        value: '09'
    }, {
        label: '10 - Oct',
        value: '10'
    }, {
        label: '11 - Nov',
        value: '11'
    }, {
        label: '12 - Dec',
        value: '12'
    }
]);

angular.module('enplug.sdk.utils').constant('quotes', {
    random: function () {
        var index = Math.floor(Math.random() * (this.quotes.length));
        return this.quotes[index];
    },
    quotes: [
        {
            text: "All great achievements require time.",
            author: "Maya Angelou"
        },
        {
            text: "You can't wait for inspiration. You have to go after it with a club.",
            author: "Jack London"
        },
        {
            text: "The perfect is the enemy of the good.",
            author: "Voltaire"
        },
        {
            text: "I play to win, whether during practice or a real game.",
            author: "Michael Jordan"
        },
        {
            text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
            author: "Thomas Edison"
        },
        {
            text: "At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.",
            author: "Salvador Dali"
        },
        {
            text: "Quality is more important than quantity. One home run is much better than two doubles.",
            author: "Steve Jobs"
        },
        {
            text: "That's one small step for man, one giant leap for mankind.",
            author: "Neil Armstrong"
        },
        {
            text: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
            author: "Scott Adams"
        },
        {
            text: "Nothing will work unless you do.",
            author: "Maya Angelou"
        },
        {
            text: "The best way out is always through.",
            author: "Robert Frost"
        },
        {
            text: "An ant on the move does more than a dozing ox.",
            author: "Lao Tzu"
        },
        {
            text: "Show me a thoroughly satisfied man and I will show you a failure.",
            author: "Thomas Edison"
        },
        {
            text: "Our greatest glory is not in never failing, but in rising up every time we fail.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "Every act of creation is first of all an act of destruction.",
            author: "Pablo Picasso"
        },
        {
            text: "Fun is good.",
            author: "Dr. Seuss"
        },
        {
            text: "I steal from every movie ever made.",
            author: "Quentin Tarantino"
        },
        {
            text: "It is the working man who is the happy man. It is the idle man who is the miserable man.",
            author: "Ben Franklin"
        },
        {
            text: "A person who never made a mistake never tried anything new.",
            author: "Albert Einstein"
        },
        {
            text: "To be idle is a short road to death and to be diligent is a way of life.",
            author: "Buddha"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "For every dark night, there's a brigher day.",
            author: "Tupac Shakur"
        },
        {
            text: "If you love life, don't waste time, for time is what life is made up of.",
            author: "Bruce Lee"
        },
        {
            text: "You can never quit. Winners never quit, and quitters never win.",
            author: "Ted Turner"
        },
        {
            text: "Work spares us from three evils: boredom, vice and need.",
            author: "Voltaire"
        },
        {
            text: "Focus is a matter of deciding what things you're not going to do.",
            author: "John Carmack"
        },
        {
            text: "I play to win, whether during practice or a real game.",
            author: "Michael Jordan"
        },
        {
            text: "HULK SMASH!",
            author: "The Incredible Hulk"
        },
        {
            text: "The harder the conflict, the more glorious the triumph.",
            author: "Thomas Paine"
        },
        {
            text: "Everything comes to him who hustles while he waits.",
            author: "Thomas Edison"
        },
        {
            text: "You've got to jump off cliffs and build your wings on the way down.",
            author: "Ray Bradbury"
        },
        {
            text: "Amateurs practice until they get it right. Professionals practice until they can't get it wrong.",
            author: "Unknown"
        },
        {
            text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
            author: "Thomas Edison"
        },
        {
            text: "A lot of times, people don't know what they want until you show it to them.",
            author: "Steve Jobs"
        },
        {
            text: "I don't know where I'm going, but I'm on my way.",
            author: "Carl Sagan"
        },
        {
            text: "Lost time is never found again.",
            author: "Benjamin Franklin"
        },
        {
            text: "Without pain, without sacrifice, we would have nothing.",
            author: "Tyler Durden"
        },
        {
            text: "I pay no attention whatever to anybody's praise or blame. I simply follow my own feelings.",
            author: "Wolfgang Amadeus Mozart"
        },
        {
            text: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzky"
        },
        {
            text: "To have a great idea, have a lot of them.",
            author: "Thomas Edison"
        },
        {
            text: "The value of an idea lies in the using of it.",
            author: "Thomas Edison"
        },
        {
            text: "Simplify, simplify, simplify.",
            author: "Henry David Thoreau"
        },
        {
            text: "There's a way to do it better - find it.",
            author: "Thomas Edison"
        },
        {
            text: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the steps.",
            author: "Confucius"
        },
        {
            text: "During your life, never stop dreaming. No one can take away your dreams.",
            author: "Tupac Shakur"
        },
        {
            text: "Things do not happen. Things are made to happen.",
            author: "John F. Kennedy"
        },
        {
            text: "Ambition should be made of sterner stuff.",
            author: "William Shakespeare"
        },
        {
            text: "If you spend too much time thinking about a thing, you'll never get it done.",
            author: "Bruce Lee"
        },
        {
            text: "Success breeds success.",
            author: "Proverb"
        },
        {
            text: "You are never too old to set another goal or to dream a new dream.",
            author: "C.S. Lewis"
        },
        {
            text: "When you stop doing things for fun, you might as well be dead.",
            author: "Ernest Hemingway"
        },
        {
            text: "There is no substitute for hard work.",
            author: "Thomas Edison"
        },
        {
            text: "Live long and prosper.",
            author: "Spock"
        },
        {
            text: "I have not failed. I've just found 10,000 ways that won't work.",
            author: "Thomas Edison"
        },
        {
            text: "It's lack of faith that makes people afraid of meeting challenges, and I believed in myself.",
            author: "Muhammad Ali"
        },
        {
            text: "All our dreams can come true, if we have the courage to pursue them.",
            author: "Walt Disney"
        },
        {
            text: "Make everything as simple as possible, but not simpler.",
            author: "Albert Einstein"
        },
        {
            text: "Some people want it to happen, some wish it would happen, others make it happen.",
            author: "Michael Jordan"
        },
        {
            text: "I've got a theory that if you give 100% all the time, somehow things will work out in the end.",
            author: "Larry Bird"
        },
        {
            text: "The problem with the future is that it keeps turning into the present.",
            author: "Bill Watterson"
        },
        {
            text: "May the Force be with you.",
            author: "Han Solo"
        },
        {
            text: "Victory belongs to the most persevering.",
            author: "Napoleon Bonaparte"
        },
        {
            text: "I hated every minute of training, but I said, 'Dont quit. Suffer now and live the rest of your life as a champion'.",
            author: "Muhammad Ali"
        },
        {
            text: "Do things that have never been done before.",
            author: "Russell Kirsch"
        },
        {
            text: "I've failed over and over and over again in my life and that is why I succeed.",
            author: "Michael Jordan"
        },
        {
            text: "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
            author: "Winston Churchill"
        },
        {
            text: "He who hesitates is lost.",
            author: "Proverb"
        },
        {
            text: "Carpe diem, seize the day boys, make your lives extraordinary.",
            author: "John Keating"
        },
        {
            text: "Doing the best at this moment puts you in the best place for the next moment.",
            author: "Oprah Winfrey"
        },
        {
            text: "Luck is preparation meeting opportunity.",
            author: "Oprah Winfrey"
        },
        {
            text: "I have no special talent. I am only passionately curious.",
            author: "Albert Einstein"
        }]
});

angular.module('enplug.sdk.utils').constant('states', [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
]);

angular.module('enplug.sdk.utils').constant('timezone', [
    "(UTC-10:00) Hawaii",
    "(UTC-09:00) Alaska",
    "(UTC-08:00) Pacific Time (US & Canada)",
    "(UTC-07:00) Arizona",
    "(UTC-07:00) Mountain Time (US & Canada)",
    "(UTC-06:00) Central Time (US & Canada)",
    "(UTC-05:00) Eastern Time (US & Canada)",
    "(UTC-05:00) Bogota, Lima, Quito, Rio Branco",
    "(UTC-05:00) Indiana (East)",
    "(UTC-03:00) Brasilia",
    "(UTC) Dublin, Edinburgh, Lisbon, London",
    "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    "(UTC+02:00) Athens, Bucharest",
    "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
    "(UTC+08:00) Kuala Lumpur, Singapore",
    "(UTC+08:00) Perth",
    "(UTC+09:00) Osaka, Sapporo, Tokyo",
    "(UTC+09:30) Adelaide",
    "(UTC+10:00) Guam, Port Moresby",
    "(UTC+10:00) Brisbane",
    "(UTC+12:00) Auckland, Wellington"
]);

angular.module('enplug.sdk.utils').constant('years', ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']);

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
        templateUrl: 'sdk-utils/alert.tpl'
    }
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
angular.module('enplug.sdk.utils').directive('dropdown', function ($document) {
    return {
        scope: true,
        link: function (scope, element) {
            element.addClass('dropdown-wrap');
            angular.element(element[0].querySelector('.root')).on('click', function () {
                if (element.hasClass('open')) {
                    element.removeClass('open');
                } else {
                    element.addClass('open');
                }
            });

            function closeDropdown(event) {
                if (!element[0].contains(event.target)) {
                    element.removeClass('open');
                }
            }

            $document.on('click', closeDropdown);

            scope.$on('$destroy', function () {
                $document.off('click', closeDropdown);
            });
        }
    }
});

/**
 * @ngdoc directive
 * @name colorPicker
 * @module enplug.sdk.utils
 * @description requires jQuery and colpick.js
 *
 * @param ngModel {expression=} The model value to bind the color hex value to.
 */
angular.module('enplug.sdk.utils').directive('colorPicker', [function () {
    'use strict';
    return {
        require: 'ngModel',
        transclude: true,
        replace: true,
        scope: {
            hex: '=ngModel'
        },
        templateUrl: 'sdk-utils/color-picker.tpl',
        link: function (scope, element, attr, ngModel) {
            var
                /**
                 * instance of color picker return from initialization
                 * @type {Object}
                 */
                colorPicker,

                /**
                 * default options for color picker plugin
                 * @type {Object}
                 */
                defaultOptions = {
                    onChange: onChange,
                    onSubmit: onSubmit,
                    layout: 'hex'
                };

            /**
             * wrapper for onChange events, intercepts and calls specified function
             * @param hsb
             * @param hex
             * @param rgb
             * @param el
             * @param bySetColor
             */
            function onChange(hsb, hex, rgb, el, bySetColor) {
                // handle on change
                scope.$apply(function () {
                    ngModel.$setViewValue(hex);
                });

                // call user-supplied fn if exists
                options._onChange && options._onChange.apply(this, arguments);
            }

            /**
             * wrapper for onSubmit events, intercepts to update model and calls user-supplied function
             * @param hsb
             * @param hex
             * @param rgb
             * @param el
             * @param bySetColor
             */
            function onSubmit(hsb, hex, rgb, el, bySetColor) {
                // hide on submit
                colorPicker.colpickHide();

                scope.$apply(function () {
                    ngModel.$setViewValue(hex);
                });

                // call user-supplied fn if exists
                options._onSubmit && options._onSubmit.apply(this, arguments);
            };

            // get user configuration
            var options = scope.$eval(attr.colorPicker) || {};

            // override onChange fn
            if (options.onChange) {
                options._onChange = angular.copy(options.onChange);
                delete options.onChange;
            }

            // override onSubmit fn
            if (options.onSubmit) {
                options._onSubmit = angular.copy(options.onSubmit);
                delete options.onSubmit;
            }

            // extend options, instantiate plugin
            options = angular.extend(defaultOptions, options);
            colorPicker = $(element).colpick(options);
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
 * @param label {String} The input label // todo this could just be transclusion?
 */
angular.module('enplug.sdk.utils').directive('materialCheckbox', ['$log', '$compile', 'GUID', function ($log, $compile, GUID) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-checkbox.tpl',
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {

            var input = $element.find('input')[0];

            $scope.id = GUID.new(); // better to use name?
            $scope.label = $attrs.label;
            // Todo update to allow for directive pass-through?
            if (!$scope.label) {
                $log.warn('WARNING: Material checkbox missing label.');
            }

            $element.addClass('material-checkbox');

            // Copy attributes over to input
            angular.forEach($attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    $element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            // Copy any wrapped html into checkbox label
            $transclude(function(clone) {
                angular.element($element[0].querySelector('.checkbox-label')).append(clone);
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
 * @param name {String} Input name
 * @param directives {Object} key:value of directives to assign to input. This directive creates isolate+transcluded scope, so remember to use $parent in values.
 * @param required {boolean},
 * @param autofocus {boolean} - causes this input to be focused after creation
 */
angular.module('enplug.sdk.utils').directive('materialInput', ['$log', '$compile', 'GUID', '$parse',
    function ($log, $compile, GUID, $parse) {
        'use strict';

        // Todo remove Lodash dependency
        // Todo help block attribute
        // Todo fix partial reference
        // FIXME: label id/for probably isn't necessary because input is wrapped in label

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
                    input = $element.find('input')[0],
                    name = $attrs.name,
                    directives = $parse($attrs.directives)($scope),
                    autofocus = typeof $attrs.autofocus !== 'undefined';

                $scope.id = name + '-' + GUID.new(); // better to use name?
                $scope.label = $attrs.label;
                $element.removeAttr('label');

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

                // Copy custom directives
                angular.forEach(directives, function (value, directive) {
                    input.setAttribute(directive, value);
                });
                $element.removeAttr('directives');

                // Copy any wrapped html into input template
                $transclude(function(clone) {
                    $element.append(clone);
                });

                // Compile input, causing AngularJS to reprocess HTML after all changes we've made, directives applied etc
                $compile(input)($scope);

                if (autofocus) {
                    input.focus();
                }

                $scope.formField = $form[name]; // used for ng-messages. Must retrieve after re-$compiling input
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

    var ignoreAttributes = ['class', 'field'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-radio.tpl',
        link: function (scope, element, attrs) {

            var input = element.find('input')[0];

            scope.name = attrs.name;
            scope.value = attrs.value;
            element.removeAttr('name');
            element.removeAttr('value');

            $compile(input)(scope);
        }
    };
}]);

/**
 * @ngdoc directive
 * @name materialSelect
 * @module enplug.sdk.utils
 * @description This directive creates isolate+transcluded scope, so remember to use $parent in values.
 * Write option sets using value:label as the key:value. E.g. Venue (system-friendly):Administrator (user-friendly)
 *
 * @param field {expression=} The model value to bind the input to.
 * @param label {String} Input label
 * @param name {String} Input name
 * @param options {String} ng-options setup
 * @param optionSet {Object} key-value of options
 * @param directives {Object} key:value of directives to assign to input.
 * @param required {boolean},
 */
angular.module('enplug.sdk.utils').directive('materialSelect', ['$compile', '$parse', function ($compile, $parse) {
    'use strict';
    return {
        restrict: 'E',
        scope: {
            model: '=field',
            options: '=optionSet'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-select.tpl',
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {

            // Todo remove lodash dependency

            $element.addClass('material-select');

            var ignoreAttributes = ['class', 'label', 'directives', 'field', 'options', 'ng-if', 'ng-show', 'ng-hide'],
                select = $element.find('select')[0],
                directives = $parse($attrs.directives)($scope);

            $scope.label = $attrs.label;
            $element.removeAttr('label');

            // Copy attributes over to input
            angular.forEach($attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    $element.removeAttr(attr);
                    select.setAttribute(attr, value);
                }
            });

            // Copy custom directives
            angular.forEach(directives, function (value, directive) {
                select.setAttribute(directive, value);
            });
            $element.removeAttr('directives');

            // Get options via attribute string (ng-options) or transcluded hard-coded options
            if ($attrs.options) {
                select.setAttribute('ng-options', $attrs.options);
                $element.removeAttr('options');
            } else {
                // Transclude options
                $transclude(function (clone) {
                    $element.find('select').append(clone);
                });
            }

            $scope.$watch('model', function (val) {
                if (!_.isUndefined(val) && !_.isNull(val)) {
                    $element.addClass('selected');
                    $scope.label = $scope.options[val];
                }
            });

            // Register directives etc with Angular
            $compile(select)($scope);
        }
    };
}]);

angular.module('enplug.sdk.utils').directive('helpBlock', function () {
    'use strict';
    return {
        templateUrl: 'sdk-utils/help-block.tpl',
        restrict: 'E'
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
        link: function(scope) {

            // If boolean, watch the property
            if (typeof scope.isLoading === 'boolean') {
                scope.loading = scope.isLoading;
                scope.$watch('isLoading', function (val) {
                    scope.loading = val;
                });
            } else if (isPromise(scope.isLoading)) {
                scope.loading = true;
                scope.isLoading.then(function () {
                    scope.loading = false;
                }, function () {
                    // Todo error handling
                    scope.error = true;
                });
            } else {
                // Something went wrong
                scope.error = true;
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
angular.module('enplug.sdk.utils').directive('locationAware', ['$location',
    function ($location) {
        return {
            restrict: 'A',
            replace: false,
            link: function ($scope, $element, $attrs) {

                var href = $attrs.href || $attrs.locationAware;

                function checkActive() {
                    if (!href) {
                        // search for a child link
                        var anchor = $element.find('a');
                        if (anchor) {
                            href = anchor.attr('href');
                        }
                    }
                    if (href === $location.path()) {
                        $element.addClass('active');
                    } else {
                        $element.removeClass('active');
                    }
                }

                checkActive();

                // We need to update active class every time route changes
                $scope.$on('$routeChangeSuccess', checkActive);

            }
        };
    }
]);

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
        templateUrl: 'sdk-utils/alert.tpl',
        link: function (scope) {
            scope.notice = true;
        }
    }
});

/**
 * @ngdoc directive
 * @name statusButton
 * @module enplug.sdk.utils
 * @description easy showing/hiding of loading indicator in a button based on bool, promise, or function returned promise
 *
 * @param condition {function|promise|boolean} the condition to wait for showing the loading indicator.
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
            condition: '=condition'
        },
        transclude: true,
        templateUrl: 'sdk-utils/status-button.tpl',
        link: function (scope, element, attrs) {

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

            // Assign default classes
            if (!element.hasClass('btn')) {
                element.addClass('btn');
                element.addClass('btn-default');
            }

            // If function, bind to click
            if (typeof scope.condition === 'function') {
                element.bind('click', function () {
                    var promise = scope.condition();
                    if (isPromise(promise)) {
                        handlePromise(promise);
                    } else {
                        $log.warn('Status button function condition must return promise.');
                    }
                });

            // If boolean, watch the property
            } else if (typeof scope.condition === 'boolean') {
                scope.isLoading = scope.condition;
                scope.$watch('condition', function (val) {
                    scope.isLoading = val;
                });

            // If promise, wait for it to complete
            } else if (isPromise(scope.condition)) {
                handlePromise(scope.condition);
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
 * @name tooltip
 * @module enplug.sdk.utils
 *
 * @param tip {String} Path to tip to show from ToolTips constant.
 */
angular.module('enplug.sdk.utils').directive('tooltip', function (Tooltips) {
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
});

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

angular.module('enplug.sdk.utils.templates', []).run(['$templateCache', function($templateCache) {
    "use strict";
    $templateCache.put("sdk-utils/alert.tpl",
        "<div class=alert><i ng-hide=notice class=\"ion-alert-circled alert-icon\"></i> <i ng-show=notice class=\"ion-information-circled alert-icon\"></i><ng-transclude class=alert-body></ng-transclude></div>");
    $templateCache.put("sdk-utils/color-picker.tpl",
        "<span class=color-picker><span class=swatch ng-style=\"{ 'background-color': '#' + hex }\"></span> <span class=color-picker-label ng-transclude></span></span>");
    $templateCache.put("sdk-utils/help-block.tpl",
        "<footer class=\"footer-help block-center\"><div class=\"info-message text-gray\"><i class=\"ion-help-circled text-primary\"></i> Need help? Go to the <a href=http://support.enplug.com target=_blank>Enplug Help Center</a></div></footer>");
    $templateCache.put("sdk-utils/loading.tpl",
        "<div class=loading-directive ng-show=loading><div class=loader ng-hide=error><svg class=circular><circle class=path cx=32 cy=32 r=30 fill=none stroke-width=2></circle></svg></div><div ng-show=error><p>There was an error.</p></div></div><ng-transclude ng-hide=loading></ng-transclude>");
    $templateCache.put("sdk-utils/material-checkbox.tpl",
        "<div class=checkbox><label for=\"{{ id }}\"><input id=\"{{ id }}\" type=checkbox ng-model=model> <span class=checkbox-material><span class=check></span></span> <span class=checkbox-label><span ng-bind=label></span></span></label></div>");
    $templateCache.put("sdk-utils/material-input.tpl",
        "<input id=\"{{ ::id }}\" class=form-control ng-model=model ng-class=\"{ active: model }\" ng-model-options=\"{ allowInvalid: true, debounce: 100 }\"><label for=\"{{ ::id }}\" ng-bind=::label></label><div class=validation ng-messages=formField.$error ng-if=formField.$dirty><span class=text-danger ng-message=required>This is required.</span> <span class=text-danger ng-message=email>Please enter a valid email address.</span> <span class=text-danger ng-message=url>Please enter a valid URL starting with http:// or https://</span> <span class=text-danger ng-message=equals>Passwords must match.</span></div>");
    $templateCache.put("sdk-utils/material-radio.tpl",
        "<div class=radio><label><input type=radio name=\"{{ name }}\" value=\"{{ value }}\" ng-model=model> <span class=radio-on></span> <span class=radio-off></span><ng-transclude></ng-transclude></label></div>");
    $templateCache.put("sdk-utils/material-select.tpl",
        "<span class=form-label ng-bind=label></span><select ng-model=model></select>");
    $templateCache.put("sdk-utils/status-button.tpl",
        "<button class=status-button><i class=ion-load-a ng-show=isLoading></i> <i class=ion-checkmark-circled ng-show=\"!isLoading && success\"></i> <i class=ion-alert-circled ng-show=\"!isLoading && error\"></i><ng-transclude></ng-transclude></button>");
    $templateCache.put("sdk-utils/tooltip.tpl",
        "<span class=glossaryTip><sup ng-hide=::config.tooltip class=\"icon ion-help-circled text-gray-light\"></sup> <span class=\"tipText text-gray-light\" ng-show=::config.tooltip ng-bind=::config.tooltip></span> <span class=tip ng-class=::config.position><span class=\"tip-content radius shadow\"><span ng-if=config.title class=\"tipTitle text-gd\" ng-bind=::config.title></span> <span class=\"tipBody text-reset\" ng-bind=::config.text ng-class=\"{ pv: !config.title }\"></span> <a ng-if=::config.link class=link-reset ng-href=\"{{ ::config.link.location }}\" ng-bind=::config.link.title></a> <span class=tipArrow></span></span></span></span>");
}]);
