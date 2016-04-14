/* Luxembourgish initialisation for the jQuery UI date picker plugin. */
/* Written by Michel Weimerskirch <michel@weimerskirch.net> */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['lb'] = {
        closeText: 'F\xE4erdeg',
        prevText: 'Zr\xE9ck',
        nextText: 'Weider',
        currentText: 'Haut',
        monthNames: [
            'Januar',
            'Februar',
            'M\xE4erz',
            'Abr\xEBll',
            'Mee',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Dezember'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'M\xE4e',
            'Abr',
            'Mee',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dez'
        ],
        dayNames: [
            'Sonndeg',
            'M\xE9indeg',
            'D\xEBnschdeg',
            'M\xEBttwoch',
            'Donneschdeg',
            'Freideg',
            'Samschdeg'
        ],
        dayNamesShort: [
            'Son',
            'M\xE9i',
            'D\xEBn',
            'M\xEBt',
            'Don',
            'Fre',
            'Sam'
        ],
        dayNamesMin: [
            'So',
            'M\xE9',
            'D\xEB',
            'M\xEB',
            'Do',
            'Fr',
            'Sa'
        ],
        weekHeader: 'W',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['lb']);
    return datepicker.regional['lb'];
}));