/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimić. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['sr'] = {
        closeText: '\u0417\u0430\u0442\u0432\u043E\u0440\u0438',
        prevText: '&#x3C;',
        nextText: '&#x3E;',
        currentText: '\u0414\u0430\u043D\u0430\u0441',
        monthNames: [
            '\u0408\u0430\u043D\u0443\u0430\u0440',
            '\u0424\u0435\u0431\u0440\u0443\u0430\u0440',
            '\u041C\u0430\u0440\u0442',
            '\u0410\u043F\u0440\u0438\u043B',
            '\u041C\u0430\u0458',
            '\u0408\u0443\u043D',
            '\u0408\u0443\u043B',
            '\u0410\u0432\u0433\u0443\u0441\u0442',
            '\u0421\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440',
            '\u041E\u043A\u0442\u043E\u0431\u0430\u0440',
            '\u041D\u043E\u0432\u0435\u043C\u0431\u0430\u0440',
            '\u0414\u0435\u0446\u0435\u043C\u0431\u0430\u0440'
        ],
        monthNamesShort: [
            '\u0408\u0430\u043D',
            '\u0424\u0435\u0431',
            '\u041C\u0430\u0440',
            '\u0410\u043F\u0440',
            '\u041C\u0430\u0458',
            '\u0408\u0443\u043D',
            '\u0408\u0443\u043B',
            '\u0410\u0432\u0433',
            '\u0421\u0435\u043F',
            '\u041E\u043A\u0442',
            '\u041D\u043E\u0432',
            '\u0414\u0435\u0446'
        ],
        dayNames: [
            '\u041D\u0435\u0434\u0435\u0459\u0430',
            '\u041F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A',
            '\u0423\u0442\u043E\u0440\u0430\u043A',
            '\u0421\u0440\u0435\u0434\u0430',
            '\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043A',
            '\u041F\u0435\u0442\u0430\u043A',
            '\u0421\u0443\u0431\u043E\u0442\u0430'
        ],
        dayNamesShort: [
            '\u041D\u0435\u0434',
            '\u041F\u043E\u043D',
            '\u0423\u0442\u043E',
            '\u0421\u0440\u0435',
            '\u0427\u0435\u0442',
            '\u041F\u0435\u0442',
            '\u0421\u0443\u0431'
        ],
        dayNamesMin: [
            '\u041D\u0435',
            '\u041F\u043E',
            '\u0423\u0442',
            '\u0421\u0440',
            '\u0427\u0435',
            '\u041F\u0435',
            '\u0421\u0443'
        ],
        weekHeader: '\u0421\u0435\u0434',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['sr']);
    return datepicker.regional['sr'];
}));