/* Georgian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Lado Lomidze (lado.lomidze@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ka'] = {
        closeText: '\u10D3\u10D0\u10EE\u10E3\u10E0\u10D5\u10D0',
        prevText: '&#x3c; \u10EC\u10D8\u10DC\u10D0',
        nextText: '\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8 &#x3e;',
        currentText: '\u10D3\u10E6\u10D4\u10E1',
        monthNames: [
            '\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8',
            '\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8',
            '\u10DB\u10D0\u10E0\u10E2\u10D8',
            '\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8',
            '\u10DB\u10D0\u10D8\u10E1\u10D8',
            '\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8',
            '\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8',
            '\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD',
            '\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8',
            '\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8',
            '\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8',
            '\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8'
        ],
        monthNamesShort: [
            '\u10D8\u10D0\u10DC',
            '\u10D7\u10D4\u10D1',
            '\u10DB\u10D0\u10E0',
            '\u10D0\u10DE\u10E0',
            '\u10DB\u10D0\u10D8',
            '\u10D8\u10D5\u10DC',
            '\u10D8\u10D5\u10DA',
            '\u10D0\u10D2\u10D5',
            '\u10E1\u10D4\u10E5',
            '\u10DD\u10E5\u10E2',
            '\u10DC\u10DD\u10D4',
            '\u10D3\u10D4\u10D9'
        ],
        dayNames: [
            '\u10D9\u10D5\u10D8\u10E0\u10D0',
            '\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8',
            '\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8',
            '\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8',
            '\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8',
            '\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8',
            '\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8'
        ],
        dayNamesShort: [
            '\u10D9\u10D5',
            '\u10DD\u10E0\u10E8',
            '\u10E1\u10D0\u10DB',
            '\u10DD\u10D7\u10EE',
            '\u10EE\u10E3\u10D7',
            '\u10DE\u10D0\u10E0',
            '\u10E8\u10D0\u10D1'
        ],
        dayNamesMin: [
            '\u10D9\u10D5',
            '\u10DD\u10E0\u10E8',
            '\u10E1\u10D0\u10DB',
            '\u10DD\u10D7\u10EE',
            '\u10EE\u10E3\u10D7',
            '\u10DE\u10D0\u10E0',
            '\u10E8\u10D0\u10D1'
        ],
        weekHeader: '\u10D9\u10D5\u10D8\u10E0\u10D0',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ka']);
    return datepicker.regional['ka'];
}));