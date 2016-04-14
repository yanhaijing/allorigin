/* Esperanto initialisation for the jQuery UI date picker plugin. */
/* Written by Olivier M. (olivierweb@ifrance.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['eo'] = {
        closeText: 'Fermi',
        prevText: '&#x3C;Anta',
        nextText: 'Sekv&#x3E;',
        currentText: 'Nuna',
        monthNames: [
            'Januaro',
            'Februaro',
            'Marto',
            'Aprilo',
            'Majo',
            'Junio',
            'Julio',
            'A\u016Dgusto',
            'Septembro',
            'Oktobro',
            'Novembro',
            'Decembro'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Maj',
            'Jun',
            'Jul',
            'A\u016Dg',
            'Sep',
            'Okt',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'Diman\u0109o',
            'Lundo',
            'Mardo',
            'Merkredo',
            '\u0134a\u016Ddo',
            'Vendredo',
            'Sabato'
        ],
        dayNamesShort: [
            'Dim',
            'Lun',
            'Mar',
            'Mer',
            '\u0134a\u016D',
            'Ven',
            'Sab'
        ],
        dayNamesMin: [
            'Di',
            'Lu',
            'Ma',
            'Me',
            '\u0134a',
            'Ve',
            'Sa'
        ],
        weekHeader: 'Sb',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['eo']);
    return datepicker.regional['eo'];
}));