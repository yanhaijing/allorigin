/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ko'] = {
        closeText: '\uB2EB\uAE30',
        prevText: '\uC774\uC804\uB2EC',
        nextText: '\uB2E4\uC74C\uB2EC',
        currentText: '\uC624\uB298',
        monthNames: [
            '1\uC6D4',
            '2\uC6D4',
            '3\uC6D4',
            '4\uC6D4',
            '5\uC6D4',
            '6\uC6D4',
            '7\uC6D4',
            '8\uC6D4',
            '9\uC6D4',
            '10\uC6D4',
            '11\uC6D4',
            '12\uC6D4'
        ],
        monthNamesShort: [
            '1\uC6D4',
            '2\uC6D4',
            '3\uC6D4',
            '4\uC6D4',
            '5\uC6D4',
            '6\uC6D4',
            '7\uC6D4',
            '8\uC6D4',
            '9\uC6D4',
            '10\uC6D4',
            '11\uC6D4',
            '12\uC6D4'
        ],
        dayNames: [
            '\uC77C\uC694\uC77C',
            '\uC6D4\uC694\uC77C',
            '\uD654\uC694\uC77C',
            '\uC218\uC694\uC77C',
            '\uBAA9\uC694\uC77C',
            '\uAE08\uC694\uC77C',
            '\uD1A0\uC694\uC77C'
        ],
        dayNamesShort: [
            '\uC77C',
            '\uC6D4',
            '\uD654',
            '\uC218',
            '\uBAA9',
            '\uAE08',
            '\uD1A0'
        ],
        dayNamesMin: [
            '\uC77C',
            '\uC6D4',
            '\uD654',
            '\uC218',
            '\uBAA9',
            '\uAE08',
            '\uD1A0'
        ],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '\uB144'
    };
    datepicker.setDefaults(datepicker.regional['ko']);
    return datepicker.regional['ko'];
}));