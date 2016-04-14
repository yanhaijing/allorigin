/* Canadian-French initialisation for the jQuery UI date picker plugin. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['fr-CA'] = {
        closeText: 'Fermer',
        prevText: 'Pr\xE9c\xE9dent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: [
            'janvier',
            'f\xE9vrier',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'ao\xFBt',
            'septembre',
            'octobre',
            'novembre',
            'd\xE9cembre'
        ],
        monthNamesShort: [
            'janv.',
            'f\xE9vr.',
            'mars',
            'avril',
            'mai',
            'juin',
            'juil.',
            'ao\xFBt',
            'sept.',
            'oct.',
            'nov.',
            'd\xE9c.'
        ],
        dayNames: [
            'dimanche',
            'lundi',
            'mardi',
            'mercredi',
            'jeudi',
            'vendredi',
            'samedi'
        ],
        dayNamesShort: [
            'dim.',
            'lun.',
            'mar.',
            'mer.',
            'jeu.',
            'ven.',
            'sam.'
        ],
        dayNamesMin: [
            'D',
            'L',
            'M',
            'M',
            'J',
            'V',
            'S'
        ],
        weekHeader: 'Sem.',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['fr-CA']);
    return datepicker.regional['fr-CA'];
}));