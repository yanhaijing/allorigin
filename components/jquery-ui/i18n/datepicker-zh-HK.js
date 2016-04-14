/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by SCCY (samuelcychan@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['zh-HK'] = {
        closeText: '\u95DC\u9589',
        prevText: '&#x3C;\u4E0A\u6708',
        nextText: '\u4E0B\u6708&#x3E;',
        currentText: '\u4ECA\u5929',
        monthNames: [
            '\u4E00\u6708',
            '\u4E8C\u6708',
            '\u4E09\u6708',
            '\u56DB\u6708',
            '\u4E94\u6708',
            '\u516D\u6708',
            '\u4E03\u6708',
            '\u516B\u6708',
            '\u4E5D\u6708',
            '\u5341\u6708',
            '\u5341\u4E00\u6708',
            '\u5341\u4E8C\u6708'
        ],
        monthNamesShort: [
            '\u4E00\u6708',
            '\u4E8C\u6708',
            '\u4E09\u6708',
            '\u56DB\u6708',
            '\u4E94\u6708',
            '\u516D\u6708',
            '\u4E03\u6708',
            '\u516B\u6708',
            '\u4E5D\u6708',
            '\u5341\u6708',
            '\u5341\u4E00\u6708',
            '\u5341\u4E8C\u6708'
        ],
        dayNames: [
            '\u661F\u671F\u65E5',
            '\u661F\u671F\u4E00',
            '\u661F\u671F\u4E8C',
            '\u661F\u671F\u4E09',
            '\u661F\u671F\u56DB',
            '\u661F\u671F\u4E94',
            '\u661F\u671F\u516D'
        ],
        dayNamesShort: [
            '\u5468\u65E5',
            '\u5468\u4E00',
            '\u5468\u4E8C',
            '\u5468\u4E09',
            '\u5468\u56DB',
            '\u5468\u4E94',
            '\u5468\u516D'
        ],
        dayNamesMin: [
            '\u65E5',
            '\u4E00',
            '\u4E8C',
            '\u4E09',
            '\u56DB',
            '\u4E94',
            '\u516D'
        ],
        weekHeader: '\u5468',
        dateFormat: 'dd-mm-yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '\u5E74'
    };
    datepicker.setDefaults(datepicker.regional['zh-HK']);
    return datepicker.regional['zh-HK'];
}));