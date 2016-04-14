/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['uk'] = {
        closeText: '\u0417\u0430\u043A\u0440\u0438\u0442\u0438',
        prevText: '&#x3C;',
        nextText: '&#x3E;',
        currentText: '\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456',
        monthNames: [
            '\u0421\u0456\u0447\u0435\u043D\u044C',
            '\u041B\u044E\u0442\u0438\u0439',
            '\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C',
            '\u041A\u0432\u0456\u0442\u0435\u043D\u044C',
            '\u0422\u0440\u0430\u0432\u0435\u043D\u044C',
            '\u0427\u0435\u0440\u0432\u0435\u043D\u044C',
            '\u041B\u0438\u043F\u0435\u043D\u044C',
            '\u0421\u0435\u0440\u043F\u0435\u043D\u044C',
            '\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C',
            '\u0416\u043E\u0432\u0442\u0435\u043D\u044C',
            '\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434',
            '\u0413\u0440\u0443\u0434\u0435\u043D\u044C'
        ],
        monthNamesShort: [
            '\u0421\u0456\u0447',
            '\u041B\u044E\u0442',
            '\u0411\u0435\u0440',
            '\u041A\u0432\u0456',
            '\u0422\u0440\u0430',
            '\u0427\u0435\u0440',
            '\u041B\u0438\u043F',
            '\u0421\u0435\u0440',
            '\u0412\u0435\u0440',
            '\u0416\u043E\u0432',
            '\u041B\u0438\u0441',
            '\u0413\u0440\u0443'
        ],
        dayNames: [
            '\u043D\u0435\u0434\u0456\u043B\u044F',
            '\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A',
            '\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A',
            '\u0441\u0435\u0440\u0435\u0434\u0430',
            '\u0447\u0435\u0442\u0432\u0435\u0440',
            '\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F',
            '\u0441\u0443\u0431\u043E\u0442\u0430'
        ],
        dayNamesShort: [
            '\u043D\u0435\u0434',
            '\u043F\u043D\u0434',
            '\u0432\u0456\u0432',
            '\u0441\u0440\u0434',
            '\u0447\u0442\u0432',
            '\u043F\u0442\u043D',
            '\u0441\u0431\u0442'
        ],
        dayNamesMin: [
            '\u041D\u0434',
            '\u041F\u043D',
            '\u0412\u0442',
            '\u0421\u0440',
            '\u0427\u0442',
            '\u041F\u0442',
            '\u0421\u0431'
        ],
        weekHeader: '\u0422\u0438\u0436',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['uk']);
    return datepicker.regional['uk'];
}));