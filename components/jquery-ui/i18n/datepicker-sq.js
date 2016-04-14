/* Albanian initialisation for the jQuery UI date picker plugin. */
/* Written by Flakron Bytyqi (flakron@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['sq'] = {
        closeText: 'mbylle',
        prevText: '&#x3C;mbrapa',
        nextText: 'P\xEBrpara&#x3E;',
        currentText: 'sot',
        monthNames: [
            'Janar',
            'Shkurt',
            'Mars',
            'Prill',
            'Maj',
            'Qershor',
            'Korrik',
            'Gusht',
            'Shtator',
            'Tetor',
            'N\xEBntor',
            'Dhjetor'
        ],
        monthNamesShort: [
            'Jan',
            'Shk',
            'Mar',
            'Pri',
            'Maj',
            'Qer',
            'Kor',
            'Gus',
            'Sht',
            'Tet',
            'N\xEBn',
            'Dhj'
        ],
        dayNames: [
            'E Diel',
            'E H\xEBn\xEB',
            'E Mart\xEB',
            'E M\xEBrkur\xEB',
            'E Enjte',
            'E Premte',
            'E Shtune'
        ],
        dayNamesShort: [
            'Di',
            'H\xEB',
            'Ma',
            'M\xEB',
            'En',
            'Pr',
            'Sh'
        ],
        dayNamesMin: [
            'Di',
            'H\xEB',
            'Ma',
            'M\xEB',
            'En',
            'Pr',
            'Sh'
        ],
        weekHeader: 'Ja',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['sq']);
    return datepicker.regional['sq'];
}));