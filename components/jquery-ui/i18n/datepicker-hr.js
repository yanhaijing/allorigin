/* Croatian i18n for the jQuery UI date picker plugin. */
/* Written by Vjekoslav Nesek. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['hr'] = {
        closeText: 'Zatvori',
        prevText: '&#x3C;',
        nextText: '&#x3E;',
        currentText: 'Danas',
        monthNames: [
            'Sije\u010Danj',
            'Velja\u010Da',
            'O\u017Eujak',
            'Travanj',
            'Svibanj',
            'Lipanj',
            'Srpanj',
            'Kolovoz',
            'Rujan',
            'Listopad',
            'Studeni',
            'Prosinac'
        ],
        monthNamesShort: [
            'Sij',
            'Velj',
            'O\u017Eu',
            'Tra',
            'Svi',
            'Lip',
            'Srp',
            'Kol',
            'Ruj',
            'Lis',
            'Stu',
            'Pro'
        ],
        dayNames: [
            'Nedjelja',
            'Ponedjeljak',
            'Utorak',
            'Srijeda',
            '\u010Cetvrtak',
            'Petak',
            'Subota'
        ],
        dayNamesShort: [
            'Ned',
            'Pon',
            'Uto',
            'Sri',
            '\u010Cet',
            'Pet',
            'Sub'
        ],
        dayNamesMin: [
            'Ne',
            'Po',
            'Ut',
            'Sr',
            '\u010Ce',
            'Pe',
            'Su'
        ],
        weekHeader: 'Tje',
        dateFormat: 'dd.mm.yy.',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['hr']);
    return datepicker.regional['hr'];
}));