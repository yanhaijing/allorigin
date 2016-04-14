/* Faroese initialisation for the jQuery UI date picker plugin */
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['fo'] = {
        closeText: 'Lat aftur',
        prevText: '&#x3C;Fyrra',
        nextText: 'N\xE6sta&#x3E;',
        currentText: '\xCD dag',
        monthNames: [
            'Januar',
            'Februar',
            'Mars',
            'Apr\xEDl',
            'Mei',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Desember'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Mei',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Des'
        ],
        dayNames: [
            'Sunnudagur',
            'M\xE1nadagur',
            'T\xFDsdagur',
            'Mikudagur',
            'H\xF3sdagur',
            'Fr\xEDggjadagur',
            'Leyardagur'
        ],
        dayNamesShort: [
            'Sun',
            'M\xE1n',
            'T\xFDs',
            'Mik',
            'H\xF3s',
            'Fr\xED',
            'Ley'
        ],
        dayNamesMin: [
            'Su',
            'M\xE1',
            'T\xFD',
            'Mi',
            'H\xF3',
            'Fr',
            'Le'
        ],
        weekHeader: 'Vk',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['fo']);
    return datepicker.regional['fo'];
}));