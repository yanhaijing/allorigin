/* Romanian initialisation for the jQuery UI date picker plugin.
 *
 * Written by Edmond L. (ll_edmond@walla.com)
 * and Ionut G. Stan (ionut.g.stan@gmail.com)
 */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ro'] = {
        closeText: '\xCEnchide',
        prevText: '&#xAB; Luna precedent\u0103',
        nextText: 'Luna urm\u0103toare &#xBB;',
        currentText: 'Azi',
        monthNames: [
            'Ianuarie',
            'Februarie',
            'Martie',
            'Aprilie',
            'Mai',
            'Iunie',
            'Iulie',
            'August',
            'Septembrie',
            'Octombrie',
            'Noiembrie',
            'Decembrie'
        ],
        monthNamesShort: [
            'Ian',
            'Feb',
            'Mar',
            'Apr',
            'Mai',
            'Iun',
            'Iul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'Duminic\u0103',
            'Luni',
            'Mar\u0163i',
            'Miercuri',
            'Joi',
            'Vineri',
            'S\xE2mb\u0103t\u0103'
        ],
        dayNamesShort: [
            'Dum',
            'Lun',
            'Mar',
            'Mie',
            'Joi',
            'Vin',
            'S\xE2m'
        ],
        dayNamesMin: [
            'Du',
            'Lu',
            'Ma',
            'Mi',
            'Jo',
            'Vi',
            'S\xE2'
        ],
        weekHeader: 'S\u0103pt',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ro']);
    return datepicker.regional['ro'];
}));