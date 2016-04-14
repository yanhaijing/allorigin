/* Polish initialisation for the jQuery UI date picker plugin. */
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['pl'] = {
        closeText: 'Zamknij',
        prevText: '&#x3C;Poprzedni',
        nextText: 'Nast\u0119pny&#x3E;',
        currentText: 'Dzi\u015B',
        monthNames: [
            'Stycze\u0144',
            'Luty',
            'Marzec',
            'Kwiecie\u0144',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpie\u0144',
            'Wrzesie\u0144',
            'Pa\u017Adziernik',
            'Listopad',
            'Grudzie\u0144'
        ],
        monthNamesShort: [
            'Sty',
            'Lu',
            'Mar',
            'Kw',
            'Maj',
            'Cze',
            'Lip',
            'Sie',
            'Wrz',
            'Pa',
            'Lis',
            'Gru'
        ],
        dayNames: [
            'Niedziela',
            'Poniedzia\u0142ek',
            'Wtorek',
            '\u015Aroda',
            'Czwartek',
            'Pi\u0105tek',
            'Sobota'
        ],
        dayNamesShort: [
            'Nie',
            'Pn',
            'Wt',
            '\u015Ar',
            'Czw',
            'Pt',
            'So'
        ],
        dayNamesMin: [
            'N',
            'Pn',
            'Wt',
            '\u015Ar',
            'Cz',
            'Pt',
            'So'
        ],
        weekHeader: 'Tydz',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['pl']);
    return datepicker.regional['pl'];
}));