/* Kazakh (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Dmitriy Karasyov (dmitriy.karasyov@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['kk'] = {
        closeText: '\u0416\u0430\u0431\u0443',
        prevText: '&#x3C;\u0410\u043B\u0434\u044B\u04A3\u0493\u044B',
        nextText: '\u041A\u0435\u043B\u0435\u0441\u0456&#x3E;',
        currentText: '\u0411\u04AF\u0433\u0456\u043D',
        monthNames: [
            '\u049A\u0430\u04A3\u0442\u0430\u0440',
            '\u0410\u049B\u043F\u0430\u043D',
            '\u041D\u0430\u0443\u0440\u044B\u0437',
            '\u0421\u04D9\u0443\u0456\u0440',
            '\u041C\u0430\u043C\u044B\u0440',
            '\u041C\u0430\u0443\u0441\u044B\u043C',
            '\u0428\u0456\u043B\u0434\u0435',
            '\u0422\u0430\u043C\u044B\u0437',
            '\u049A\u044B\u0440\u043A\u04AF\u0439\u0435\u043A',
            '\u049A\u0430\u0437\u0430\u043D',
            '\u049A\u0430\u0440\u0430\u0448\u0430',
            '\u0416\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D'
        ],
        monthNamesShort: [
            '\u049A\u0430\u04A3',
            '\u0410\u049B\u043F',
            '\u041D\u0430\u0443',
            '\u0421\u04D9\u0443',
            '\u041C\u0430\u043C',
            '\u041C\u0430\u0443',
            '\u0428\u0456\u043B',
            '\u0422\u0430\u043C',
            '\u049A\u044B\u0440',
            '\u049A\u0430\u0437',
            '\u049A\u0430\u0440',
            '\u0416\u0435\u043B'
        ],
        dayNames: [
            '\u0416\u0435\u043A\u0441\u0435\u043D\u0431\u0456',
            '\u0414\u04AF\u0439\u0441\u0435\u043D\u0431\u0456',
            '\u0421\u0435\u0439\u0441\u0435\u043D\u0431\u0456',
            '\u0421\u04D9\u0440\u0441\u0435\u043D\u0431\u0456',
            '\u0411\u0435\u0439\u0441\u0435\u043D\u0431\u0456',
            '\u0416\u04B1\u043C\u0430',
            '\u0421\u0435\u043D\u0431\u0456'
        ],
        dayNamesShort: [
            '\u0436\u043A\u0441',
            '\u0434\u0441\u043D',
            '\u0441\u0441\u043D',
            '\u0441\u0440\u0441',
            '\u0431\u0441\u043D',
            '\u0436\u043C\u0430',
            '\u0441\u043D\u0431'
        ],
        dayNamesMin: [
            '\u0416\u043A',
            '\u0414\u0441',
            '\u0421\u0441',
            '\u0421\u0440',
            '\u0411\u0441',
            '\u0416\u043C',
            '\u0421\u043D'
        ],
        weekHeader: '\u041D\u0435',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['kk']);
    return datepicker.regional['kk'];
}));