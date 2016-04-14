/* Thai initialisation for the jQuery UI date picker plugin. */
/* Written by pipo (pipo@sixhead.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['th'] = {
        closeText: '\u0E1B\u0E34\u0E14',
        prevText: '&#xAB;&#xA0;\u0E22\u0E49\u0E2D\u0E19',
        nextText: '\u0E16\u0E31\u0E14\u0E44\u0E1B&#xA0;&#xBB;',
        currentText: '\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49',
        monthNames: [
            '\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21',
            '\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C',
            '\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21',
            '\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19',
            '\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21',
            '\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19',
            '\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21',
            '\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21',
            '\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19',
            '\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21',
            '\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19',
            '\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21'
        ],
        monthNamesShort: [
            '\u0E21.\u0E04.',
            '\u0E01.\u0E1E.',
            '\u0E21\u0E35.\u0E04.',
            '\u0E40\u0E21.\u0E22.',
            '\u0E1E.\u0E04.',
            '\u0E21\u0E34.\u0E22.',
            '\u0E01.\u0E04.',
            '\u0E2A.\u0E04.',
            '\u0E01.\u0E22.',
            '\u0E15.\u0E04.',
            '\u0E1E.\u0E22.',
            '\u0E18.\u0E04.'
        ],
        dayNames: [
            '\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C',
            '\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C',
            '\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23',
            '\u0E1E\u0E38\u0E18',
            '\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35',
            '\u0E28\u0E38\u0E01\u0E23\u0E4C',
            '\u0E40\u0E2A\u0E32\u0E23\u0E4C'
        ],
        dayNamesShort: [
            '\u0E2D\u0E32.',
            '\u0E08.',
            '\u0E2D.',
            '\u0E1E.',
            '\u0E1E\u0E24.',
            '\u0E28.',
            '\u0E2A.'
        ],
        dayNamesMin: [
            '\u0E2D\u0E32.',
            '\u0E08.',
            '\u0E2D.',
            '\u0E1E.',
            '\u0E1E\u0E24.',
            '\u0E28.',
            '\u0E2A.'
        ],
        weekHeader: 'Wk',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['th']);
    return datepicker.regional['th'];
}));