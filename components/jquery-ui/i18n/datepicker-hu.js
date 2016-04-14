/* Hungarian initialisation for the jQuery UI date picker plugin. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['hu'] = {
        closeText: 'bez\xE1r',
        prevText: 'vissza',
        nextText: 'el\u0151re',
        currentText: 'ma',
        monthNames: [
            'Janu\xE1r',
            'Febru\xE1r',
            'M\xE1rcius',
            '\xC1prilis',
            'M\xE1jus',
            'J\xFAnius',
            'J\xFAlius',
            'Augusztus',
            'Szeptember',
            'Okt\xF3ber',
            'November',
            'December'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'M\xE1r',
            '\xC1pr',
            'M\xE1j',
            'J\xFAn',
            'J\xFAl',
            'Aug',
            'Szep',
            'Okt',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'Vas\xE1rnap',
            'H\xE9tf\u0151',
            'Kedd',
            'Szerda',
            'Cs\xFCt\xF6rt\xF6k',
            'P\xE9ntek',
            'Szombat'
        ],
        dayNamesShort: [
            'Vas',
            'H\xE9t',
            'Ked',
            'Sze',
            'Cs\xFC',
            'P\xE9n',
            'Szo'
        ],
        dayNamesMin: [
            'V',
            'H',
            'K',
            'Sze',
            'Cs',
            'P',
            'Szo'
        ],
        weekHeader: 'H\xE9t',
        dateFormat: 'yy.mm.dd.',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['hu']);
    return datepicker.regional['hu'];
}));