/* Lithuanian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas@avalon.lt> */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['lt'] = {
        closeText: 'U\u017Edaryti',
        prevText: '&#x3C;Atgal',
        nextText: 'Pirmyn&#x3E;',
        currentText: '\u0160iandien',
        monthNames: [
            'Sausis',
            'Vasaris',
            'Kovas',
            'Balandis',
            'Gegu\u017E\u0117',
            'Bir\u017Eelis',
            'Liepa',
            'Rugpj\u016Btis',
            'Rugs\u0117jis',
            'Spalis',
            'Lapkritis',
            'Gruodis'
        ],
        monthNamesShort: [
            'Sau',
            'Vas',
            'Kov',
            'Bal',
            'Geg',
            'Bir',
            'Lie',
            'Rugp',
            'Rugs',
            'Spa',
            'Lap',
            'Gru'
        ],
        dayNames: [
            'sekmadienis',
            'pirmadienis',
            'antradienis',
            'tre\u010Diadienis',
            'ketvirtadienis',
            'penktadienis',
            '\u0161e\u0161tadienis'
        ],
        dayNamesShort: [
            'sek',
            'pir',
            'ant',
            'tre',
            'ket',
            'pen',
            '\u0161e\u0161'
        ],
        dayNamesMin: [
            'Se',
            'Pr',
            'An',
            'Tr',
            'Ke',
            'Pe',
            '\u0160e'
        ],
        weekHeader: 'SAV',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['lt']);
    return datepicker.regional['lt'];
}));