/* Persian (Farsi) Translation for the jQuery UI date picker plugin. */
/* Javad Mowlanezhad -- jmowla@gmail.com */
/* Jalali calendar should supported soon! (Its implemented but I have to test it) */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['fa'] = {
        closeText: '\u0628\u0633\u062A\u0646',
        prevText: '&#x3C;\u0642\u0628\u0644\u06CC',
        nextText: '\u0628\u0639\u062F\u06CC&#x3E;',
        currentText: '\u0627\u0645\u0631\u0648\u0632',
        monthNames: [
            '\u0698\u0627\u0646\u0648\u06CC\u0647',
            '\u0641\u0648\u0631\u06CC\u0647',
            '\u0645\u0627\u0631\u0633',
            '\u0622\u0648\u0631\u06CC\u0644',
            '\u0645\u0647',
            '\u0698\u0648\u0626\u0646',
            '\u0698\u0648\u0626\u06CC\u0647',
            '\u0627\u0648\u062A',
            '\u0633\u067E\u062A\u0627\u0645\u0628\u0631',
            '\u0627\u06A9\u062A\u0628\u0631',
            '\u0646\u0648\u0627\u0645\u0628\u0631',
            '\u062F\u0633\u0627\u0645\u0628\u0631'
        ],
        monthNamesShort: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12'
        ],
        dayNames: [
            '\u064A\u06A9\u0634\u0646\u0628\u0647',
            '\u062F\u0648\u0634\u0646\u0628\u0647',
            '\u0633\u0647\u200C\u0634\u0646\u0628\u0647',
            '\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647',
            '\u067E\u0646\u062C\u0634\u0646\u0628\u0647',
            '\u062C\u0645\u0639\u0647',
            '\u0634\u0646\u0628\u0647'
        ],
        dayNamesShort: [
            '\u06CC',
            '\u062F',
            '\u0633',
            '\u0686',
            '\u067E',
            '\u062C',
            '\u0634'
        ],
        dayNamesMin: [
            '\u06CC',
            '\u062F',
            '\u0633',
            '\u0686',
            '\u067E',
            '\u062C',
            '\u0634'
        ],
        weekHeader: '\u0647\u0641',
        dateFormat: 'yy/mm/dd',
        firstDay: 6,
        isRTL: true,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['fa']);
    return datepicker.regional['fa'];
}));