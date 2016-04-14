/* Bosnian i18n for the jQuery UI date picker plugin. */
/* Written by Kenan Konjo. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['bs'] = {
        closeText: 'Zatvori',
        prevText: '&#x3C;',
        nextText: '&#x3E;',
        currentText: 'Danas',
        monthNames: [
            'Januar',
            'Februar',
            'Mart',
            'April',
            'Maj',
            'Juni',
            'Juli',
            'August',
            'Septembar',
            'Oktobar',
            'Novembar',
            'Decembar'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Maj',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'Nedelja',
            'Ponedeljak',
            'Utorak',
            'Srijeda',
            '\u010Cetvrtak',
            'Petak',
            'Subota'
        ],
        dayNamesShort: [
            'Ned',
            'Pon',
            'Uto',
            'Sri',
            '\u010Cet',
            'Pet',
            'Sub'
        ],
        dayNamesMin: [
            'Ne',
            'Po',
            'Ut',
            'Sr',
            '\u010Ce',
            'Pe',
            'Su'
        ],
        weekHeader: 'Wk',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['bs']);
    return datepicker.regional['bs'];
}));