/* Inicialització en català per a l'extensió 'UI date picker' per jQuery. */
/* Writers: (joan.leon@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ca'] = {
        closeText: 'Tanca',
        prevText: 'Anterior',
        nextText: 'Seg\xFCent',
        currentText: 'Avui',
        monthNames: [
            'gener',
            'febrer',
            'mar\xE7',
            'abril',
            'maig',
            'juny',
            'juliol',
            'agost',
            'setembre',
            'octubre',
            'novembre',
            'desembre'
        ],
        monthNamesShort: [
            'gen',
            'feb',
            'mar\xE7',
            'abr',
            'maig',
            'juny',
            'jul',
            'ag',
            'set',
            'oct',
            'nov',
            'des'
        ],
        dayNames: [
            'diumenge',
            'dilluns',
            'dimarts',
            'dimecres',
            'dijous',
            'divendres',
            'dissabte'
        ],
        dayNamesShort: [
            'dg',
            'dl',
            'dt',
            'dc',
            'dj',
            'dv',
            'ds'
        ],
        dayNamesMin: [
            'dg',
            'dl',
            'dt',
            'dc',
            'dj',
            'dv',
            'ds'
        ],
        weekHeader: 'Set',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ca']);
    return datepicker.regional['ca'];
}));