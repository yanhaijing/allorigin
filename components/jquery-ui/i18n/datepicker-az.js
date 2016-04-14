/* Azerbaijani (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Jamil Najafov (necefov33@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['az'] = {
        closeText: 'Ba\u011Fla',
        prevText: '&#x3C;Geri',
        nextText: '\u0130r\u0259li&#x3E;',
        currentText: 'Bug\xFCn',
        monthNames: [
            'Yanvar',
            'Fevral',
            'Mart',
            'Aprel',
            'May',
            '\u0130yun',
            '\u0130yul',
            'Avqust',
            'Sentyabr',
            'Oktyabr',
            'Noyabr',
            'Dekabr'
        ],
        monthNamesShort: [
            'Yan',
            'Fev',
            'Mar',
            'Apr',
            'May',
            '\u0130yun',
            '\u0130yul',
            'Avq',
            'Sen',
            'Okt',
            'Noy',
            'Dek'
        ],
        dayNames: [
            'Bazar',
            'Bazar ert\u0259si',
            '\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131',
            '\xC7\u0259r\u015F\u0259nb\u0259',
            'C\xFCm\u0259 ax\u015Fam\u0131',
            'C\xFCm\u0259',
            '\u015E\u0259nb\u0259'
        ],
        dayNamesShort: [
            'B',
            'Be',
            '\xC7a',
            '\xC7',
            'Ca',
            'C',
            '\u015E'
        ],
        dayNamesMin: [
            'B',
            'B',
            '\xC7',
            '\u0421',
            '\xC7',
            'C',
            '\u015E'
        ],
        weekHeader: 'Hf',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['az']);
    return datepicker.regional['az'];
}));