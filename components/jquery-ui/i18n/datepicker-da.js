/* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['da'] = {
        closeText: 'Luk',
        prevText: '&#x3C;Forrige',
        nextText: 'N\xE6ste&#x3E;',
        currentText: 'Idag',
        monthNames: [
            'Januar',
            'Februar',
            'Marts',
            'April',
            'Maj',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'December'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Maj',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'S\xF8ndag',
            'Mandag',
            'Tirsdag',
            'Onsdag',
            'Torsdag',
            'Fredag',
            'L\xF8rdag'
        ],
        dayNamesShort: [
            'S\xF8n',
            'Man',
            'Tir',
            'Ons',
            'Tor',
            'Fre',
            'L\xF8r'
        ],
        dayNamesMin: [
            'S\xF8',
            'Ma',
            'Ti',
            'On',
            'To',
            'Fr',
            'L\xF8'
        ],
        weekHeader: 'Uge',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['da']);
    return datepicker.regional['da'];
}));