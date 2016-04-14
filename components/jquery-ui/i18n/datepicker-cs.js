/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['cs'] = {
        closeText: 'Zav\u0159\xEDt',
        prevText: '&#x3C;D\u0159\xEDve',
        nextText: 'Pozd\u011Bji&#x3E;',
        currentText: 'Nyn\xED',
        monthNames: [
            'leden',
            '\xFAnor',
            'b\u0159ezen',
            'duben',
            'kv\u011Bten',
            '\u010Derven',
            '\u010Dervenec',
            'srpen',
            'z\xE1\u0159\xED',
            '\u0159\xEDjen',
            'listopad',
            'prosinec'
        ],
        monthNamesShort: [
            'led',
            '\xFAno',
            'b\u0159e',
            'dub',
            'kv\u011B',
            '\u010Der',
            '\u010Dvc',
            'srp',
            'z\xE1\u0159',
            '\u0159\xEDj',
            'lis',
            'pro'
        ],
        dayNames: [
            'ned\u011Ble',
            'pond\u011Bl\xED',
            '\xFAter\xFD',
            'st\u0159eda',
            '\u010Dtvrtek',
            'p\xE1tek',
            'sobota'
        ],
        dayNamesShort: [
            'ne',
            'po',
            '\xFAt',
            'st',
            '\u010Dt',
            'p\xE1',
            'so'
        ],
        dayNamesMin: [
            'ne',
            'po',
            '\xFAt',
            'st',
            '\u010Dt',
            'p\xE1',
            'so'
        ],
        weekHeader: 'T\xFDd',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['cs']);
    return datepicker.regional['cs'];
}));