/* Hebrew initialisation for the UI Datepicker extension. */
/* Written by Amir Hardon (ahardon at gmail dot com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['he'] = {
        closeText: '\u05E1\u05D2\u05D5\u05E8',
        prevText: '&#x3C;\u05D4\u05E7\u05D5\u05D3\u05DD',
        nextText: '\u05D4\u05D1\u05D0&#x3E;',
        currentText: '\u05D4\u05D9\u05D5\u05DD',
        monthNames: [
            '\u05D9\u05E0\u05D5\u05D0\u05E8',
            '\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8',
            '\u05DE\u05E8\u05E5',
            '\u05D0\u05E4\u05E8\u05D9\u05DC',
            '\u05DE\u05D0\u05D9',
            '\u05D9\u05D5\u05E0\u05D9',
            '\u05D9\u05D5\u05DC\u05D9',
            '\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8',
            '\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8',
            '\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8',
            '\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8',
            '\u05D3\u05E6\u05DE\u05D1\u05E8'
        ],
        monthNamesShort: [
            '\u05D9\u05E0\u05D5',
            '\u05E4\u05D1\u05E8',
            '\u05DE\u05E8\u05E5',
            '\u05D0\u05E4\u05E8',
            '\u05DE\u05D0\u05D9',
            '\u05D9\u05D5\u05E0\u05D9',
            '\u05D9\u05D5\u05DC\u05D9',
            '\u05D0\u05D5\u05D2',
            '\u05E1\u05E4\u05D8',
            '\u05D0\u05D5\u05E7',
            '\u05E0\u05D5\u05D1',
            '\u05D3\u05E6\u05DE'
        ],
        dayNames: [
            '\u05E8\u05D0\u05E9\u05D5\u05DF',
            '\u05E9\u05E0\u05D9',
            '\u05E9\u05DC\u05D9\u05E9\u05D9',
            '\u05E8\u05D1\u05D9\u05E2\u05D9',
            '\u05D7\u05DE\u05D9\u05E9\u05D9',
            '\u05E9\u05D9\u05E9\u05D9',
            '\u05E9\u05D1\u05EA'
        ],
        dayNamesShort: [
            '\u05D0\'',
            '\u05D1\'',
            '\u05D2\'',
            '\u05D3\'',
            '\u05D4\'',
            '\u05D5\'',
            '\u05E9\u05D1\u05EA'
        ],
        dayNamesMin: [
            '\u05D0\'',
            '\u05D1\'',
            '\u05D2\'',
            '\u05D3\'',
            '\u05D4\'',
            '\u05D5\'',
            '\u05E9\u05D1\u05EA'
        ],
        weekHeader: 'Wk',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: true,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['he']);
    return datepicker.regional['he'];
}));