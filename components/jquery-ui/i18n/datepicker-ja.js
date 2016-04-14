/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ja'] = {
        closeText: '\u9589\u3058\u308B',
        prevText: '&#x3C;\u524D',
        nextText: '\u6B21&#x3E;',
        currentText: '\u4ECA\u65E5',
        monthNames: [
            '1\u6708',
            '2\u6708',
            '3\u6708',
            '4\u6708',
            '5\u6708',
            '6\u6708',
            '7\u6708',
            '8\u6708',
            '9\u6708',
            '10\u6708',
            '11\u6708',
            '12\u6708'
        ],
        monthNamesShort: [
            '1\u6708',
            '2\u6708',
            '3\u6708',
            '4\u6708',
            '5\u6708',
            '6\u6708',
            '7\u6708',
            '8\u6708',
            '9\u6708',
            '10\u6708',
            '11\u6708',
            '12\u6708'
        ],
        dayNames: [
            '\u65E5\u66DC\u65E5',
            '\u6708\u66DC\u65E5',
            '\u706B\u66DC\u65E5',
            '\u6C34\u66DC\u65E5',
            '\u6728\u66DC\u65E5',
            '\u91D1\u66DC\u65E5',
            '\u571F\u66DC\u65E5'
        ],
        dayNamesShort: [
            '\u65E5',
            '\u6708',
            '\u706B',
            '\u6C34',
            '\u6728',
            '\u91D1',
            '\u571F'
        ],
        dayNamesMin: [
            '\u65E5',
            '\u6708',
            '\u706B',
            '\u6C34',
            '\u6728',
            '\u91D1',
            '\u571F'
        ],
        weekHeader: '\u9031',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '\u5E74'
    };
    datepicker.setDefaults(datepicker.regional['ja']);
    return datepicker.regional['ja'];
}));