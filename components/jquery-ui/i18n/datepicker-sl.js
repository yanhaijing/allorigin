/* Slovenian initialisation for the jQuery UI date picker plugin. */
/* Written by Jaka Jancar (jaka@kubje.org). */
/* c = č, s = š z = ž C = Č S = Š Z = Ž */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['sl'] = {
        closeText: 'Zapri',
        prevText: '&#x3C;Prej\u0161nji',
        nextText: 'Naslednji&#x3E;',
        currentText: 'Trenutni',
        monthNames: [
            'Januar',
            'Februar',
            'Marec',
            'April',
            'Maj',
            'Junij',
            'Julij',
            'Avgust',
            'September',
            'Oktober',
            'November',
            'December'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Maj',
            'Jun',
            'Jul',
            'Avg',
            'Sep',
            'Okt',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'Nedelja',
            'Ponedeljek',
            'Torek',
            'Sreda',
            '\u010Cetrtek',
            'Petek',
            'Sobota'
        ],
        dayNamesShort: [
            'Ned',
            'Pon',
            'Tor',
            'Sre',
            '\u010Cet',
            'Pet',
            'Sob'
        ],
        dayNamesMin: [
            'Ne',
            'Po',
            'To',
            'Sr',
            '\u010Ce',
            'Pe',
            'So'
        ],
        weekHeader: 'Teden',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['sl']);
    return datepicker.regional['sl'];
}));