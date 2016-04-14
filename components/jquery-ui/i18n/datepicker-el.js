/* Greek (el) initialisation for the jQuery UI date picker plugin. */
/* Written by Alex Cicovic (http://www.alexcicovic.com) */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['el'] = {
        closeText: '\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF',
        prevText: '\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF\u03C2',
        nextText: '\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF\u03C2',
        currentText: '\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1',
        monthNames: [
            '\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2',
            '\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2',
            '\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2',
            '\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2',
            '\u039C\u03AC\u03B9\u03BF\u03C2',
            '\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2',
            '\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2',
            '\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2',
            '\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
            '\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2',
            '\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
            '\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2'
        ],
        monthNamesShort: [
            '\u0399\u03B1\u03BD',
            '\u03A6\u03B5\u03B2',
            '\u039C\u03B1\u03C1',
            '\u0391\u03C0\u03C1',
            '\u039C\u03B1\u03B9',
            '\u0399\u03BF\u03C5\u03BD',
            '\u0399\u03BF\u03C5\u03BB',
            '\u0391\u03C5\u03B3',
            '\u03A3\u03B5\u03C0',
            '\u039F\u03BA\u03C4',
            '\u039D\u03BF\u03B5',
            '\u0394\u03B5\u03BA'
        ],
        dayNames: [
            '\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE',
            '\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1',
            '\u03A4\u03C1\u03AF\u03C4\u03B7',
            '\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7',
            '\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7',
            '\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE',
            '\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF'
        ],
        dayNamesShort: [
            '\u039A\u03C5\u03C1',
            '\u0394\u03B5\u03C5',
            '\u03A4\u03C1\u03B9',
            '\u03A4\u03B5\u03C4',
            '\u03A0\u03B5\u03BC',
            '\u03A0\u03B1\u03C1',
            '\u03A3\u03B1\u03B2'
        ],
        dayNamesMin: [
            '\u039A\u03C5',
            '\u0394\u03B5',
            '\u03A4\u03C1',
            '\u03A4\u03B5',
            '\u03A0\u03B5',
            '\u03A0\u03B1',
            '\u03A3\u03B1'
        ],
        weekHeader: '\u0395\u03B2\u03B4',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['el']);
    return datepicker.regional['el'];
}));