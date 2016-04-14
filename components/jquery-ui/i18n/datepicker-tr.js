/* Turkish initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['tr'] = {
        closeText: 'kapat',
        prevText: '&#x3C;geri',
        nextText: 'ileri&#x3e',
        currentText: 'bug\xFCn',
        monthNames: [
            'Ocak',
            '\u015Eubat',
            'Mart',
            'Nisan',
            'May\u0131s',
            'Haziran',
            'Temmuz',
            'A\u011Fustos',
            'Eyl\xFCl',
            'Ekim',
            'Kas\u0131m',
            'Aral\u0131k'
        ],
        monthNamesShort: [
            'Oca',
            '\u015Eub',
            'Mar',
            'Nis',
            'May',
            'Haz',
            'Tem',
            'A\u011Fu',
            'Eyl',
            'Eki',
            'Kas',
            'Ara'
        ],
        dayNames: [
            'Pazar',
            'Pazartesi',
            'Sal\u0131',
            '\xC7ar\u015Famba',
            'Per\u015Fembe',
            'Cuma',
            'Cumartesi'
        ],
        dayNamesShort: [
            'Pz',
            'Pt',
            'Sa',
            '\xC7a',
            'Pe',
            'Cu',
            'Ct'
        ],
        dayNamesMin: [
            'Pz',
            'Pt',
            'Sa',
            '\xC7a',
            'Pe',
            'Cu',
            'Ct'
        ],
        weekHeader: 'Hf',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['tr']);
    return datepicker.regional['tr'];
}));