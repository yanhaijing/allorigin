/* Malayalam (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Saji Nediyanchath (saji89@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ml'] = {
        closeText: '\u0D36\u0D30\u0D3F',
        prevText: '\u0D2E\u0D41\u0D28\u0D4D\u0D28\u0D24\u0D4D\u0D24\u0D46',
        nextText: '\u0D05\u0D1F\u0D41\u0D24\u0D4D\u0D24\u0D24\u0D4D ',
        currentText: '\u0D07\u0D28\u0D4D\u0D28\u0D4D',
        monthNames: [
            '\u0D1C\u0D28\u0D41\u0D35\u0D30\u0D3F',
            '\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41\u0D35\u0D30\u0D3F',
            '\u0D2E\u0D3E\u0D30\u0D4D\u200D\u0D1A\u0D4D\u0D1A\u0D4D',
            '\u0D0F\u0D2A\u0D4D\u0D30\u0D3F\u0D32\u0D4D\u200D',
            '\u0D2E\u0D47\u0D2F\u0D4D',
            '\u0D1C\u0D42\u0D23\u0D4D\u200D',
            '\u0D1C\u0D42\u0D32\u0D48',
            '\u0D06\u0D17\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D',
            '\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02\u0D2C\u0D30\u0D4D\u200D',
            '\u0D12\u0D15\u0D4D\u0D1F\u0D4B\u0D2C\u0D30\u0D4D\u200D',
            '\u0D28\u0D35\u0D02\u0D2C\u0D30\u0D4D\u200D',
            '\u0D21\u0D3F\u0D38\u0D02\u0D2C\u0D30\u0D4D\u200D'
        ],
        monthNamesShort: [
            '\u0D1C\u0D28\u0D41',
            '\u0D2B\u0D46\u0D2C\u0D4D',
            '\u0D2E\u0D3E\u0D30\u0D4D\u200D',
            '\u0D0F\u0D2A\u0D4D\u0D30\u0D3F',
            '\u0D2E\u0D47\u0D2F\u0D4D',
            '\u0D1C\u0D42\u0D23\u0D4D\u200D',
            '\u0D1C\u0D42\u0D32\u0D3E',
            '\u0D06\u0D17',
            '\u0D38\u0D46\u0D2A\u0D4D',
            '\u0D12\u0D15\u0D4D\u0D1F\u0D4B',
            '\u0D28\u0D35\u0D02',
            '\u0D21\u0D3F\u0D38'
        ],
        dayNames: [
            '\u0D1E\u0D3E\u0D2F\u0D30\u0D4D\u200D',
            '\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D33\u0D4D\u200D',
            '\u0D1A\u0D4A\u0D35\u0D4D\u0D35',
            '\u0D2C\u0D41\u0D27\u0D28\u0D4D\u200D',
            '\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D02',
            '\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F',
            '\u0D36\u0D28\u0D3F'
        ],
        dayNamesShort: [
            '\u0D1E\u0D3E\u0D2F',
            '\u0D24\u0D3F\u0D19\u0D4D\u0D15',
            '\u0D1A\u0D4A\u0D35\u0D4D\u0D35',
            '\u0D2C\u0D41\u0D27',
            '\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D02',
            '\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F',
            '\u0D36\u0D28\u0D3F'
        ],
        dayNamesMin: [
            '\u0D1E\u0D3E',
            '\u0D24\u0D3F',
            '\u0D1A\u0D4A',
            '\u0D2C\u0D41',
            '\u0D35\u0D4D\u0D2F\u0D3E',
            '\u0D35\u0D46',
            '\u0D36'
        ],
        weekHeader: '\u0D06',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ml']);
    return datepicker.regional['ml'];
}));