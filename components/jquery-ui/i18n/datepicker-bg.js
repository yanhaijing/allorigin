/* Bulgarian initialisation for the jQuery UI date picker plugin. */
/* Written by Stoyan Kyosev (http://svest.org). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['bg'] = {
        closeText: '\u0437\u0430\u0442\u0432\u043E\u0440\u0438',
        prevText: '&#x3C;\u043D\u0430\u0437\u0430\u0434',
        nextText: '\u043D\u0430\u043F\u0440\u0435\u0434&#x3E;',
        nextBigText: '&#x3E;&#x3E;',
        currentText: '\u0434\u043D\u0435\u0441',
        monthNames: [
            '\u042F\u043D\u0443\u0430\u0440\u0438',
            '\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438',
            '\u041C\u0430\u0440\u0442',
            '\u0410\u043F\u0440\u0438\u043B',
            '\u041C\u0430\u0439',
            '\u042E\u043D\u0438',
            '\u042E\u043B\u0438',
            '\u0410\u0432\u0433\u0443\u0441\u0442',
            '\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438',
            '\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438',
            '\u041D\u043E\u0435\u043C\u0432\u0440\u0438',
            '\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438'
        ],
        monthNamesShort: [
            '\u042F\u043D\u0443',
            '\u0424\u0435\u0432',
            '\u041C\u0430\u0440',
            '\u0410\u043F\u0440',
            '\u041C\u0430\u0439',
            '\u042E\u043D\u0438',
            '\u042E\u043B\u0438',
            '\u0410\u0432\u0433',
            '\u0421\u0435\u043F',
            '\u041E\u043A\u0442',
            '\u041D\u043E\u0432',
            '\u0414\u0435\u043A'
        ],
        dayNames: [
            '\u041D\u0435\u0434\u0435\u043B\u044F',
            '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A',
            '\u0412\u0442\u043E\u0440\u043D\u0438\u043A',
            '\u0421\u0440\u044F\u0434\u0430',
            '\u0427\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A',
            '\u041F\u0435\u0442\u044A\u043A',
            '\u0421\u044A\u0431\u043E\u0442\u0430'
        ],
        dayNamesShort: [
            '\u041D\u0435\u0434',
            '\u041F\u043E\u043D',
            '\u0412\u0442\u043E',
            '\u0421\u0440\u044F',
            '\u0427\u0435\u0442',
            '\u041F\u0435\u0442',
            '\u0421\u044A\u0431'
        ],
        dayNamesMin: [
            '\u041D\u0435',
            '\u041F\u043E',
            '\u0412\u0442',
            '\u0421\u0440',
            '\u0427\u0435',
            '\u041F\u0435',
            '\u0421\u044A'
        ],
        weekHeader: 'Wk',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['bg']);
    return datepicker.regional['bg'];
}));