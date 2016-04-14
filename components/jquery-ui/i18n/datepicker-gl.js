/* Galician localization for 'UI date picker' jQuery extension. */
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['gl'] = {
        closeText: 'Pechar',
        prevText: '&#x3C;Ant',
        nextText: 'Seg&#x3E;',
        currentText: 'Hoxe',
        monthNames: [
            'Xaneiro',
            'Febreiro',
            'Marzo',
            'Abril',
            'Maio',
            'Xu\xF1o',
            'Xullo',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Decembro'
        ],
        monthNamesShort: [
            'Xan',
            'Feb',
            'Mar',
            'Abr',
            'Mai',
            'Xu\xF1',
            'Xul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'Domingo',
            'Luns',
            'Martes',
            'M\xE9rcores',
            'Xoves',
            'Venres',
            'S\xE1bado'
        ],
        dayNamesShort: [
            'Dom',
            'Lun',
            'Mar',
            'M\xE9r',
            'Xov',
            'Ven',
            'S\xE1b'
        ],
        dayNamesMin: [
            'Do',
            'Lu',
            'Ma',
            'M\xE9',
            'Xo',
            'Ve',
            'S\xE1'
        ],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['gl']);
    return datepicker.regional['gl'];
}));