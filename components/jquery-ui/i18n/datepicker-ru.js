/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ru'] = {
        closeText: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
        prevText: '&#x3C;\u041F\u0440\u0435\u0434',
        nextText: '\u0421\u043B\u0435\u0434&#x3E;',
        currentText: '\u0421\u0435\u0433\u043E\u0434\u043D\u044F',
        monthNames: [
            '\u042F\u043D\u0432\u0430\u0440\u044C',
            '\u0424\u0435\u0432\u0440\u0430\u043B\u044C',
            '\u041C\u0430\u0440\u0442',
            '\u0410\u043F\u0440\u0435\u043B\u044C',
            '\u041C\u0430\u0439',
            '\u0418\u044E\u043D\u044C',
            '\u0418\u044E\u043B\u044C',
            '\u0410\u0432\u0433\u0443\u0441\u0442',
            '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C',
            '\u041E\u043A\u0442\u044F\u0431\u0440\u044C',
            '\u041D\u043E\u044F\u0431\u0440\u044C',
            '\u0414\u0435\u043A\u0430\u0431\u0440\u044C'
        ],
        monthNamesShort: [
            '\u042F\u043D\u0432',
            '\u0424\u0435\u0432',
            '\u041C\u0430\u0440',
            '\u0410\u043F\u0440',
            '\u041C\u0430\u0439',
            '\u0418\u044E\u043D',
            '\u0418\u044E\u043B',
            '\u0410\u0432\u0433',
            '\u0421\u0435\u043D',
            '\u041E\u043A\u0442',
            '\u041D\u043E\u044F',
            '\u0414\u0435\u043A'
        ],
        dayNames: [
            '\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435',
            '\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A',
            '\u0432\u0442\u043E\u0440\u043D\u0438\u043A',
            '\u0441\u0440\u0435\u0434\u0430',
            '\u0447\u0435\u0442\u0432\u0435\u0440\u0433',
            '\u043F\u044F\u0442\u043D\u0438\u0446\u0430',
            '\u0441\u0443\u0431\u0431\u043E\u0442\u0430'
        ],
        dayNamesShort: [
            '\u0432\u0441\u043A',
            '\u043F\u043D\u0434',
            '\u0432\u0442\u0440',
            '\u0441\u0440\u0434',
            '\u0447\u0442\u0432',
            '\u043F\u0442\u043D',
            '\u0441\u0431\u0442'
        ],
        dayNamesMin: [
            '\u0412\u0441',
            '\u041F\u043D',
            '\u0412\u0442',
            '\u0421\u0440',
            '\u0427\u0442',
            '\u041F\u0442',
            '\u0421\u0431'
        ],
        weekHeader: '\u041D\u0435\u0434',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ru']);
    return datepicker.regional['ru'];
}));