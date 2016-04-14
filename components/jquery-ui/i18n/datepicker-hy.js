/* Armenian(UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['hy'] = {
        closeText: '\u0553\u0561\u056F\u0565\u056C',
        prevText: '&#x3C;\u0546\u0561\u056D.',
        nextText: '\u0540\u0561\u057B.&#x3E;',
        currentText: '\u0531\u0575\u057D\u0585\u0580',
        monthNames: [
            '\u0540\u0578\u0582\u0576\u057E\u0561\u0580',
            '\u0553\u0565\u057F\u0580\u057E\u0561\u0580',
            '\u0544\u0561\u0580\u057F',
            '\u0531\u057A\u0580\u056B\u056C',
            '\u0544\u0561\u0575\u056B\u057D',
            '\u0540\u0578\u0582\u0576\u056B\u057D',
            '\u0540\u0578\u0582\u056C\u056B\u057D',
            '\u0555\u0563\u0578\u057D\u057F\u0578\u057D',
            '\u054D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580',
            '\u0540\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580',
            '\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580',
            '\u0534\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580'
        ],
        monthNamesShort: [
            '\u0540\u0578\u0582\u0576\u057E',
            '\u0553\u0565\u057F\u0580',
            '\u0544\u0561\u0580\u057F',
            '\u0531\u057A\u0580',
            '\u0544\u0561\u0575\u056B\u057D',
            '\u0540\u0578\u0582\u0576\u056B\u057D',
            '\u0540\u0578\u0582\u056C',
            '\u0555\u0563\u057D',
            '\u054D\u0565\u057A',
            '\u0540\u0578\u056F',
            '\u0546\u0578\u0575',
            '\u0534\u0565\u056F'
        ],
        dayNames: [
            '\u056F\u056B\u0580\u0561\u056F\u056B',
            '\u0565\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B',
            '\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B',
            '\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B',
            '\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B',
            '\u0578\u0582\u0580\u0562\u0561\u0569',
            '\u0577\u0561\u0562\u0561\u0569'
        ],
        dayNamesShort: [
            '\u056F\u056B\u0580',
            '\u0565\u0580\u056F',
            '\u0565\u0580\u0584',
            '\u0579\u0580\u0584',
            '\u0570\u0576\u0563',
            '\u0578\u0582\u0580\u0562',
            '\u0577\u0562\u0569'
        ],
        dayNamesMin: [
            '\u056F\u056B\u0580',
            '\u0565\u0580\u056F',
            '\u0565\u0580\u0584',
            '\u0579\u0580\u0584',
            '\u0570\u0576\u0563',
            '\u0578\u0582\u0580\u0562',
            '\u0577\u0562\u0569'
        ],
        weekHeader: '\u0547\u0532\u054F',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['hy']);
    return datepicker.regional['hy'];
}));