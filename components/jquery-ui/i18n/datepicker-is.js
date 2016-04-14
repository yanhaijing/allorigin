/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['is'] = {
        closeText: 'Loka',
        prevText: '&#x3C; Fyrri',
        nextText: 'N\xE6sti &#x3E;',
        currentText: '\xCD dag',
        monthNames: [
            'Jan\xFAar',
            'Febr\xFAar',
            'Mars',
            'Apr\xEDl',
            'Ma\xED',
            'J\xFAn\xED',
            'J\xFAl\xED',
            '\xC1g\xFAst',
            'September',
            'Okt\xF3ber',
            'N\xF3vember',
            'Desember'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Ma\xED',
            'J\xFAn',
            'J\xFAl',
            '\xC1g\xFA',
            'Sep',
            'Okt',
            'N\xF3v',
            'Des'
        ],
        dayNames: [
            'Sunnudagur',
            'M\xE1nudagur',
            '\xDEri\xF0judagur',
            'Mi\xF0vikudagur',
            'Fimmtudagur',
            'F\xF6studagur',
            'Laugardagur'
        ],
        dayNamesShort: [
            'Sun',
            'M\xE1n',
            '\xDEri',
            'Mi\xF0',
            'Fim',
            'F\xF6s',
            'Lau'
        ],
        dayNamesMin: [
            'Su',
            'M\xE1',
            '\xDEr',
            'Mi',
            'Fi',
            'F\xF6',
            'La'
        ],
        weekHeader: 'Vika',
        dateFormat: 'dd.mm.yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['is']);
    return datepicker.regional['is'];
}));