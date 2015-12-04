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

angular.module('enplug.sdk.utils').constant('months', [
    { name: 'January', short: 'Jan', code: '01' },
    { name: 'February', short: 'Feb', code: '02' },
    { name: 'March', short: 'Mar', code: '03' },
    { name: 'April', short: 'Apr', code: '04' },
    { name: 'May', short: 'May', code: '05' },
    { name: 'June', short: 'Jun', code: '06' },
    { name: 'July', short: 'Jul', code: '07' },
    { name: 'August', short: 'Aug', code: '08' },
    { name: 'September', short: 'Sep', code: '09' },
    { name: 'October', short: 'Oct', code: '10' },
    { name: 'November', short: 'Nov', code: '11' },
    { name: 'December', short: 'Dec', code: '12' }
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
    { name: 'Alabama', code: 'AL' },
    { name: 'Alaska', code: 'AK' },
    { name: 'Arizona', code: 'AZ' },
    { name: 'Arkansas', code: 'AR' },
    { name: 'California', code: 'CA' },
    { name: 'Colorado', code: 'CO' },
    { name: 'Connecticut', code: 'CT' },
    { name: 'Delaware', code: 'DE' },
    { name: 'District of Columbia', code: 'DC' },
    { name: 'Florida', code: 'FL' },
    { name: 'Georgia', code: 'GA' },
    { name: 'Hawaii', code: 'HI' },
    { name: 'Idaho', code: 'ID' },
    { name: 'Illinois', code: 'IL' },
    { name: 'Indiana', code: 'IN' },
    { name: 'Iowa', code: 'IA' },
    { name: 'Kansa', code: 'KS' },
    { name: 'Kentucky', code: 'KY' },
    { name: 'Lousiana', code: 'LA' },
    { name: 'Maine', code: 'ME' },
    { name: 'Maryland', code: 'MD' },
    { name: 'Massachusetts', code: 'MA' },
    { name: 'Michigan', code: 'MI' },
    { name: 'Minnesota', code: 'MN' },
    { name: 'Mississippi', code: 'MS' },
    { name: 'Missouri', code: 'MO' },
    { name: 'Montana', code: 'MT' },
    { name: 'Nebraska', code: 'NE' },
    { name: 'Nevada', code: 'NV' },
    { name: 'New Hampshire', code: 'NH' },
    { name: 'New Jersey', code: 'NJ' },
    { name: 'New Mexico', code: 'NM' },
    { name: 'New York', code: 'NY' },
    { name: 'North Carolina', code: 'NC' },
    { name: 'North Dakota', code: 'ND' },
    { name: 'Ohio', code: 'OH' },
    { name: 'Oklahoma', code: 'OK' },
    { name: 'Oregon', code: 'OR' },
    { name: 'Pennsylvania', code: 'PA' },
    { name: 'Rhode Island', code: 'RI' },
    { name: 'South Carolina', code: 'SC' },
    { name: 'South Dakota', code: 'SD' },
    { name: 'Tennessee', code: 'TN' },
    { name: 'Texas', code: 'TX' },
    { name: 'Utah', code: 'UT' },
    { name: 'Vermont', code: 'VT' },
    { name: 'Virginia', code: 'VA' },
    { name: 'Washington', code: 'WA' },
    { name: 'West Virginia', code: 'WV' },
    { name: 'Wisconsin', code: 'WI' },
    { name: 'Wyoming', code: 'WY' }
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
angular.module('enplug.sdk.utils').directive('dropdown', function ($document, $timeout) {
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
            hex: '=ngModel',
            onChange: '='
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

                    // scope callback
                    scope.onChange && scope.onChange(hex);
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
 * @param label {String} The input label
 */
angular.module('enplug.sdk.utils').directive('materialCheckbox', function ($log, $compile, GUID) {
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
});

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
angular.module('enplug.sdk.utils').directive('materialInput', ['$log', '$compile', '$parse', '$document', 'GUID',
    function ($log, $compile, $parse, $document, GUID) {
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
angular.module('enplug.sdk.utils').directive('materialSelect', function ($timeout) {
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
});

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

angular.module('enplug.sdk.utils').directive('layoutToggle', function ($rootScope) {
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
});

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
angular.module('enplug.sdk.utils').directive('locationAware', function ($location) {
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
});

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
angular.module('enplug.sdk.utils').directive('proTip', function ($log, ProTips) {
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
});

/**
 * @ngdoc directive
 * @name statusButton
 * @module enplug.sdk.utils
 * @description easy showing/hiding of loading indicator in a button based on bool, promise, or function returned promise
 *
 * @param condition {function|promise|boolean} the condition to wait for showing the loading indicator.
 * @param action {function} the click action which can take parameters and should return a promise
 */
angular.module('enplug.sdk.utils').directive('statusButton', function ($log, $timeout) {
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
});

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

angular.module('enplug.sdk.utils').factory('ScriptLoaderService', function ($q, $document, $timeout) {
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
});

angular.module('enplug.sdk.utils.templates', []).run(['$templateCache', function($templateCache) {
    "use strict";
    $templateCache.put("sdk-utils/alert.tpl",
        "<div class=alert><i ng-hide=notice class=\"ion-alert-circled alert-icon\"></i> <i ng-show=notice class=\"ion-information-circled alert-icon\"></i><ng-transclude class=alert-body></ng-transclude></div>");
    $templateCache.put("sdk-utils/color-picker.tpl",
        "<span class=color-picker><span class=swatch ng-style=\"{ 'background-color': '#' + hex }\"></span> <span class=color-picker-label ng-transclude></span></span>");
    $templateCache.put("sdk-utils/help-block.tpl",
        "<footer class=\"footer-help block-center\"><div class=\"info-message text-gray\"><i class=\"ion-help-circled text-primary\"></i> Need help? Go to the <a href=http://support.enplug.com target=_blank>Enplug Help Center</a></div></footer>");
    $templateCache.put("sdk-utils/layout-toggle.tpl",
        "<div class=\"btn-group layout-toggle\"><button ng-click=toggleLayout() ng-disabled=showGridLayout class=\"btn btn-default btn-icon btn-sm ion-android-apps grid-toggle\"></button> <button ng-click=toggleLayout() ng-disabled=!showGridLayout class=\"btn btn-default btn-icon btn-sm ion-navicon table-toggle\"></button></div>");
    $templateCache.put("sdk-utils/loading.tpl",
        "<div class=loading-directive ng-show=loading><div class=loader ng-hide=error><svg class=circular><circle class=path cx=32 cy=32 r=30 fill=none stroke-width=2></circle></svg></div><div ng-show=error><p>There was an error.</p></div></div><ng-transclude class=loading-content ng-hide=loading></ng-transclude>");
    $templateCache.put("sdk-utils/material-checkbox.tpl",
        "<div class=checkbox><label for=\"{{ id }}\"><input id=\"{{ id }}\" type=checkbox ng-model=model> <span class=checkbox-material><span class=check></span></span> <span class=checkbox-label><span ng-bind=label></span></span></label></div>");
    $templateCache.put("sdk-utils/material-input.tpl",
        "<input id=\"{{ ::id }}\" class=form-control ng-model=model ng-class=\"{ active: model }\" ng-model-options=\"{ allowInvalid: true, debounce: 100 }\"><label for=\"{{ ::id }}\" ng-bind=::label></label><div class=validation ng-messages=formField.$error ng-if=formField.$dirty><span class=text-danger ng-message=required>This is required.</span> <span class=text-danger ng-message=email>Please enter a valid email address.</span> <span class=text-danger ng-message=url>Please enter a valid URL starting with http:// or https://</span> <span class=text-danger ng-message=equals>Passwords must match.</span></div>");
    $templateCache.put("sdk-utils/material-radio.tpl",
        "<div class=radio><label><input type=radio ng-model=model> <span class=radio-on></span> <span class=radio-off></span><ng-transclude></ng-transclude></label></div>");
    $templateCache.put("sdk-utils/material-select.tpl",
        "<span class=form-label ng-bind=label></span><ng-transclude></ng-transclude>");
    $templateCache.put("sdk-utils/material-switch.tpl",
        "<label class=material-switch ng-class=\"{ 'switch-on': model, 'switch-off': !model, dirty: dirty }\" ng-click=\"dirty = true\"><input class=default-input type=checkbox ng-model=model><ng-transclude></ng-transclude></label>");
    $templateCache.put("sdk-utils/protip.tpl",
        "<div class=pro-tip><i class=\"ion-flash text-primary\"></i> <strong>ProTip:</strong> <span ng-bind=::config.tip></span> <a ng-if=::config.link dynamic-click=::config.link.action dynamic-href=::config.link.location ng-bind=::config.link.text></a></div>");
    $templateCache.put("sdk-utils/status-button.tpl",
        "<button class=status-button><i class=ion-load-a ng-show=isLoading></i> <i class=ion-checkmark-circled ng-show=\"!isLoading && success\"></i> <i class=ion-alert-circled ng-show=\"!isLoading && error\"></i><ng-transclude></ng-transclude></button>");
    $templateCache.put("sdk-utils/tooltip.tpl",
        "<span class=glossaryTip><sup ng-hide=::config.tooltip class=\"icon ion-help-circled text-gray-light\"></sup> <span class=tipText ng-show=::config.tooltip ng-bind=::config.tooltip></span> <span class=tip ng-class=::config.position><span class=\"tip-content radius shadow\"><span ng-if=config.title class=\"tipTitle text-gd\" ng-bind=::config.title></span> <span class=\"tipBody text-reset\" ng-bind=::config.text ng-class=\"{ pt: !config.title, pb: !config.link }\"></span> <a ng-if=::config.link class=link-reset ng-href=\"{{ ::config.link.location }}\" ng-bind=::config.link.title></a> <span class=tipArrow></span></span></span></span>");
}]);
