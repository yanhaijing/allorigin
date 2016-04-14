/* Tajiki (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Abdurahmon Saidov (saidovab@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['tj'] = {
        closeText: '\u0418\u0434\u043E\u043C\u0430',
        prevText: '&#x3c;\u049A\u0430\u0444\u043E',
        nextText: '\u041F\u0435\u0448&#x3e;',
        currentText: '\u0418\u043C\u0440\u04EF\u0437',
        monthNames: [
            '\u042F\u043D\u0432\u0430\u0440',
            '\u0424\u0435\u0432\u0440\u0430\u043B',
            '\u041C\u0430\u0440\u0442',
            '\u0410\u043F\u0440\u0435\u043B',
            '\u041C\u0430\u0439',
            '\u0418\u044E\u043D',
            '\u0418\u044E\u043B',
            '\u0410\u0432\u0433\u0443\u0441\u0442',
            '\u0421\u0435\u043D\u0442\u044F\u0431\u0440',
            '\u041E\u043A\u0442\u044F\u0431\u0440',
            '\u041D\u043E\u044F\u0431\u0440',
            '\u0414\u0435\u043A\u0430\u0431\u0440'
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
            '\u044F\u043A\u0448\u0430\u043D\u0431\u0435',
            '\u0434\u0443\u0448\u0430\u043D\u0431\u0435',
            '\u0441\u0435\u0448\u0430\u043D\u0431\u0435',
            '\u0447\u043E\u0440\u0448\u0430\u043D\u0431\u0435',
            '\u043F\u0430\u043D\u04B7\u0448\u0430\u043D\u0431\u0435',
            '\u04B7\u0443\u043C\u044A\u0430',
            '\u0448\u0430\u043D\u0431\u0435'
        ],
        dayNamesShort: [
            '\u044F\u043A\u0448',
            '\u0434\u0443\u0448',
            '\u0441\u0435\u0448',
            '\u0447\u043E\u0440',
            '\u043F\u0430\u043D',
            '\u04B7\u0443\u043C',
            '\u0448\u0430\u043D'
        ],
        dayNamesMin: [
            '\u042F\u043A',
            '\u0414\u0448',
            '\u0421\u0448',
            '\u0427\u0448',
            '\u041F\u0448',
            '\u04B6\u043C',
            '\u0428\u043D'
        ],
        weekHeader: '\u0425\u0444',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['tj']);
    return datepicker.regional['tj'];
}));