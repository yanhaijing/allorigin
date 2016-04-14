/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '&#x3C;Ant',
        nextText: 'Sig&#x3E;',
        currentText: 'Hoy',
        monthNames: [
            'enero',
            'febrero',
            'marzo',
            'abril',
            'mayo',
            'junio',
            'julio',
            'agosto',
            'septiembre',
            'octubre',
            'noviembre',
            'diciembre'
        ],
        monthNamesShort: [
            'ene',
            'feb',
            'mar',
            'abr',
            'may',
            'jun',
            'jul',
            'ago',
            'sep',
            'oct',
            'nov',
            'dic'
        ],
        dayNames: [
            'domingo',
            'lunes',
            'martes',
            'mi\xE9rcoles',
            'jueves',
            'viernes',
            's\xE1bado'
        ],
        dayNamesShort: [
            'dom',
            'lun',
            'mar',
            'mi\xE9',
            'jue',
            'vie',
            's\xE1b'
        ],
        dayNamesMin: [
            'D',
            'L',
            'M',
            'X',
            'J',
            'V',
            'S'
        ],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['es']);
    return datepicker.regional['es'];
}));