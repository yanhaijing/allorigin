/* Swiss-French initialisation for the jQuery UI date picker plugin. */
/* Written Martin Voelkle (martin.voelkle@e-tc.ch). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['fr-CH'] = {
        closeText: 'Fermer',
        prevText: '&#x3C;Pr\xE9c',
        nextText: 'Suiv&#x3E;',
        currentText: 'Courant',
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
        weekHeader: 'Sm',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['fr-CH']);
    return datepicker.regional['fr-CH'];
}));