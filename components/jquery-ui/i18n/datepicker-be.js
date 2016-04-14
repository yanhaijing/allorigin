/* Belarusian initialisation for the jQuery UI date picker plugin. */
/* Written by Pavel Selitskas <p.selitskas@gmail.com> */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['be'] = {
        closeText: '\u0417\u0430\u0447\u044B\u043D\u0456\u0446\u044C',
        prevText: '&larr;\u041F\u0430\u043F\u044F\u0440.',
        nextText: '\u041D\u0430\u0441\u0442.&rarr;',
        currentText: '\u0421\u0451\u043D\u044C\u043D\u044F',
        monthNames: [
            '\u0421\u0442\u0443\u0434\u0437\u0435\u043D\u044C',
            '\u041B\u044E\u0442\u044B',
            '\u0421\u0430\u043A\u0430\u0432\u0456\u043A',
            '\u041A\u0440\u0430\u0441\u0430\u0432\u0456\u043A',
            '\u0422\u0440\u0430\u0432\u0435\u043D\u044C',
            '\u0427\u044D\u0440\u0432\u0435\u043D\u044C',
            '\u041B\u0456\u043F\u0435\u043D\u044C',
            '\u0416\u043D\u0456\u0432\u0435\u043D\u044C',
            '\u0412\u0435\u0440\u0430\u0441\u0435\u043D\u044C',
            '\u041A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A',
            '\u041B\u0456\u0441\u0442\u0430\u043F\u0430\u0434',
            '\u0421\u044C\u043D\u0435\u0436\u0430\u043D\u044C'
        ],
        monthNamesShort: [
            '\u0421\u0442\u0443',
            '\u041B\u044E\u0442',
            '\u0421\u0430\u043A',
            '\u041A\u0440\u0430',
            '\u0422\u0440\u0430',
            '\u0427\u044D\u0440',
            '\u041B\u0456\u043F',
            '\u0416\u043D\u0456',
            '\u0412\u0435\u0440',
            '\u041A\u0430\u0441',
            '\u041B\u0456\u0441',
            '\u0421\u044C\u043D'
        ],
        dayNames: [
            '\u043D\u044F\u0434\u0437\u0435\u043B\u044F',
            '\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A',
            '\u0430\u045E\u0442\u043E\u0440\u0430\u043A',
            '\u0441\u0435\u0440\u0430\u0434\u0430',
            '\u0447\u0430\u0446\u044C\u0432\u0435\u0440',
            '\u043F\u044F\u0442\u043D\u0456\u0446\u0430',
            '\u0441\u0443\u0431\u043E\u0442\u0430'
        ],
        dayNamesShort: [
            '\u043D\u0434\u0437',
            '\u043F\u043D\u0434',
            '\u0430\u045E\u0442',
            '\u0441\u0440\u0434',
            '\u0447\u0446\u0432',
            '\u043F\u0442\u043D',
            '\u0441\u0431\u0442'
        ],
        dayNamesMin: [
            '\u041D\u0434',
            '\u041F\u043D',
            '\u0410\u045E',
            '\u0421\u0440',
            '\u0427\u0446',
            '\u041F\u0442',
            '\u0421\u0431'
        ],
        weekHeader: '\u0422\u0434',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['be']);
    return datepicker.regional['be'];
}));