/* Slovak initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['sk'] = {
        closeText: 'Zavrie\u0165',
        prevText: '&#x3C;Predch\xE1dzaj\xFAci',
        nextText: 'Nasleduj\xFAci&#x3E;',
        currentText: 'Dnes',
        monthNames: [
            'janu\xE1r',
            'febru\xE1r',
            'marec',
            'apr\xEDl',
            'm\xE1j',
            'j\xFAn',
            'j\xFAl',
            'august',
            'september',
            'okt\xF3ber',
            'november',
            'december'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'M\xE1j',
            'J\xFAn',
            'J\xFAl',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'nede\u013Ea',
            'pondelok',
            'utorok',
            'streda',
            '\u0161tvrtok',
            'piatok',
            'sobota'
        ],
        dayNamesShort: [
            'Ned',
            'Pon',
            'Uto',
            'Str',
            '\u0160tv',
            'Pia',
            'Sob'
        ],
        dayNamesMin: [
            'Ne',
            'Po',
            'Ut',
            'St',
            '\u0160t',
            'Pia',
            'So'
        ],
        weekHeader: 'Ty',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['sk']);
    return datepicker.regional['sk'];
}));