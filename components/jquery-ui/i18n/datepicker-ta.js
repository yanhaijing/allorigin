/* Tamil (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by S A Sureshkumar (saskumar@live.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['ta'] = {
        closeText: '\u0BAE\u0BC2\u0B9F\u0BC1',
        prevText: '\u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BC8\u0BAF\u0BA4\u0BC1',
        nextText: '\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BA4\u0BC1',
        currentText: '\u0B87\u0BA9\u0BCD\u0BB1\u0BC1',
        monthNames: [
            '\u0BA4\u0BC8',
            '\u0BAE\u0BBE\u0B9A\u0BBF',
            '\u0BAA\u0B99\u0BCD\u0B95\u0BC1\u0BA9\u0BBF',
            '\u0B9A\u0BBF\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC8',
            '\u0BB5\u0BC8\u0B95\u0BBE\u0B9A\u0BBF',
            '\u0B86\u0BA9\u0BBF',
            '\u0B86\u0B9F\u0BBF',
            '\u0B86\u0BB5\u0BA3\u0BBF',
            '\u0BAA\u0BC1\u0BB0\u0B9F\u0BCD\u0B9F\u0BBE\u0B9A\u0BBF',
            '\u0B90\u0BAA\u0BCD\u0BAA\u0B9A\u0BBF',
            '\u0B95\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BBF\u0B95\u0BC8',
            '\u0BAE\u0BBE\u0BB0\u0BCD\u0B95\u0BB4\u0BBF'
        ],
        monthNamesShort: [
            '\u0BA4\u0BC8',
            '\u0BAE\u0BBE\u0B9A\u0BBF',
            '\u0BAA\u0B99\u0BCD',
            '\u0B9A\u0BBF\u0BA4\u0BCD',
            '\u0BB5\u0BC8\u0B95\u0BBE',
            '\u0B86\u0BA9\u0BBF',
            '\u0B86\u0B9F\u0BBF',
            '\u0B86\u0BB5',
            '\u0BAA\u0BC1\u0BB0',
            '\u0B90\u0BAA\u0BCD',
            '\u0B95\u0BBE\u0BB0\u0BCD',
            '\u0BAE\u0BBE\u0BB0\u0BCD'
        ],
        dayNames: [
            '\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8',
            '\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0B9F\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8',
            '\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8',
            '\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8',
            '\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8',
            '\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8',
            '\u0B9A\u0BA9\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8'
        ],
        dayNamesShort: [
            '\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BC1',
            '\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD',
            '\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD',
            '\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD',
            '\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0BA9\u0BCD',
            '\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF',
            '\u0B9A\u0BA9\u0BBF'
        ],
        dayNamesMin: [
            '\u0B9E\u0BBE',
            '\u0BA4\u0BBF',
            '\u0B9A\u0BC6',
            '\u0BAA\u0BC1',
            '\u0BB5\u0BBF',
            '\u0BB5\u0BC6',
            '\u0B9A'
        ],
        weekHeader: '\u041D\u0435',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ta']);
    return datepicker.regional['ta'];
}));