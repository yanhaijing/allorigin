/* Estonian initialisation for the jQuery UI date picker plugin. */
/* Written by Mart Sõmermaa (mrts.pydev at gmail com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['et'] = {
        closeText: 'Sulge',
        prevText: 'Eelnev',
        nextText: 'J\xE4rgnev',
        currentText: 'T\xE4na',
        monthNames: [
            'Jaanuar',
            'Veebruar',
            'M\xE4rts',
            'Aprill',
            'Mai',
            'Juuni',
            'Juuli',
            'August',
            'September',
            'Oktoober',
            'November',
            'Detsember'
        ],
        monthNamesShort: [
            'Jaan',
            'Veebr',
            'M\xE4rts',
            'Apr',
            'Mai',
            'Juuni',
            'Juuli',
            'Aug',
            'Sept',
            'Okt',
            'Nov',
            'Dets'
        ],
        dayNames: [
            'P\xFChap\xE4ev',
            'Esmasp\xE4ev',
            'Teisip\xE4ev',
            'Kolmap\xE4ev',
            'Neljap\xE4ev',
            'Reede',
            'Laup\xE4ev'
        ],
        dayNamesShort: [
            'P\xFChap',
            'Esmasp',
            'Teisip',
            'Kolmap',
            'Neljap',
            'Reede',
            'Laup'
        ],
        dayNamesMin: [
            'P',
            'E',
            'T',
            'K',
            'N',
            'R',
            'L'
        ],
        weekHeader: 'n\xE4d',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['et']);
    return datepicker.regional['et'];
}));