/* Swedish initialisation for the jQuery UI date picker plugin. */
/* Written by Anders Ekdahl ( anders@nomadiz.se). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['sv'] = {
        closeText: 'St\xE4ng',
        prevText: '&#xAB;F\xF6rra',
        nextText: 'N\xE4sta&#xBB;',
        currentText: 'Idag',
        monthNames: [
            'Januari',
            'Februari',
            'Mars',
            'April',
            'Maj',
            'Juni',
            'Juli',
            'Augusti',
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
        dayNamesShort: [
            'S\xF6n',
            'M\xE5n',
            'Tis',
            'Ons',
            'Tor',
            'Fre',
            'L\xF6r'
        ],
        dayNames: [
            'S\xF6ndag',
            'M\xE5ndag',
            'Tisdag',
            'Onsdag',
            'Torsdag',
            'Fredag',
            'L\xF6rdag'
        ],
        dayNamesMin: [
            'S\xF6',
            'M\xE5',
            'Ti',
            'On',
            'To',
            'Fr',
            'L\xF6'
        ],
        weekHeader: 'Ve',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['sv']);
    return datepicker.regional['sv'];
}));