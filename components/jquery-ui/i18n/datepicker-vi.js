/* Vietnamese initialisation for the jQuery UI date picker plugin. */
/* Translated by Le Thanh Huy (lthanhhuy@cit.ctu.edu.vn). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['vi'] = {
        closeText: '\u0110\xF3ng',
        prevText: '&#x3C;Tr\u01B0\u1EDBc',
        nextText: 'Ti\u1EBFp&#x3E;',
        currentText: 'H\xF4m nay',
        monthNames: [
            'Th\xE1ng M\u1ED9t',
            'Th\xE1ng Hai',
            'Th\xE1ng Ba',
            'Th\xE1ng T\u01B0',
            'Th\xE1ng N\u0103m',
            'Th\xE1ng S\xE1u',
            'Th\xE1ng B\u1EA3y',
            'Th\xE1ng T\xE1m',
            'Th\xE1ng Ch\xEDn',
            'Th\xE1ng M\u01B0\u1EDDi',
            'Th\xE1ng M\u01B0\u1EDDi M\u1ED9t',
            'Th\xE1ng M\u01B0\u1EDDi Hai'
        ],
        monthNamesShort: [
            'Th\xE1ng 1',
            'Th\xE1ng 2',
            'Th\xE1ng 3',
            'Th\xE1ng 4',
            'Th\xE1ng 5',
            'Th\xE1ng 6',
            'Th\xE1ng 7',
            'Th\xE1ng 8',
            'Th\xE1ng 9',
            'Th\xE1ng 10',
            'Th\xE1ng 11',
            'Th\xE1ng 12'
        ],
        dayNames: [
            'Ch\u1EE7 Nh\u1EADt',
            'Th\u1EE9 Hai',
            'Th\u1EE9 Ba',
            'Th\u1EE9 T\u01B0',
            'Th\u1EE9 N\u0103m',
            'Th\u1EE9 S\xE1u',
            'Th\u1EE9 B\u1EA3y'
        ],
        dayNamesShort: [
            'CN',
            'T2',
            'T3',
            'T4',
            'T5',
            'T6',
            'T7'
        ],
        dayNamesMin: [
            'CN',
            'T2',
            'T3',
            'T4',
            'T5',
            'T6',
            'T7'
        ],
        weekHeader: 'Tu',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['vi']);
    return datepicker.regional['vi'];
}));