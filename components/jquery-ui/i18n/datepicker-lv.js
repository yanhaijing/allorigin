/* Latvian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['lv'] = {
        closeText: 'Aizv\u0113rt',
        prevText: 'Iepr.',
        nextText: 'N\u0101k.',
        currentText: '\u0160odien',
        monthNames: [
            'Janv\u0101ris',
            'Febru\u0101ris',
            'Marts',
            'Apr\u012Blis',
            'Maijs',
            'J\u016Bnijs',
            'J\u016Blijs',
            'Augusts',
            'Septembris',
            'Oktobris',
            'Novembris',
            'Decembris'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Mai',
            'J\u016Bn',
            'J\u016Bl',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'sv\u0113tdiena',
            'pirmdiena',
            'otrdiena',
            'tre\u0161diena',
            'ceturtdiena',
            'piektdiena',
            'sestdiena'
        ],
        dayNamesShort: [
            'svt',
            'prm',
            'otr',
            'tre',
            'ctr',
            'pkt',
            'sst'
        ],
        dayNamesMin: [
            'Sv',
            'Pr',
            'Ot',
            'Tr',
            'Ct',
            'Pk',
            'Ss'
        ],
        weekHeader: 'Ned.',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['lv']);
    return datepicker.regional['lv'];
}));