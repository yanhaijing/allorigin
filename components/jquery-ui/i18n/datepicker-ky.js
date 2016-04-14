/* Kyrgyz (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Sergey Kartashov (ebishkek@yandex.ru). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ky'] = {
        closeText: '\u0416\u0430\u0431\u0443\u0443',
        prevText: '&#x3c;\u041C\u0443\u0440',
        nextText: '\u041A\u0438\u0439&#x3e;',
        currentText: '\u0411\u04AF\u0433\u04AF\u043D',
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
            '\u0436\u0435\u043A\u0448\u0435\u043C\u0431\u0438',
            '\u0434\u04AF\u0439\u0448\u04E9\u043C\u0431\u04AF',
            '\u0448\u0435\u0439\u0448\u0435\u043C\u0431\u0438',
            '\u0448\u0430\u0440\u0448\u0435\u043C\u0431\u0438',
            '\u0431\u0435\u0439\u0448\u0435\u043C\u0431\u0438',
            '\u0436\u0443\u043C\u0430',
            '\u0438\u0448\u0435\u043C\u0431\u0438'
        ],
        dayNamesShort: [
            '\u0436\u0435\u043A',
            '\u0434\u04AF\u0439',
            '\u0448\u0435\u0439',
            '\u0448\u0430\u0440',
            '\u0431\u0435\u0439',
            '\u0436\u0443\u043C',
            '\u0438\u0448\u0435'
        ],
        dayNamesMin: [
            '\u0416\u043A',
            '\u0414\u0448',
            '\u0428\u0448',
            '\u0428\u0440',
            '\u0411\u0448',
            '\u0416\u043C',
            '\u0418\u0448'
        ],
        weekHeader: '\u0416\u0443\u043C',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ky']);
    return datepicker.regional['ky'];
}));