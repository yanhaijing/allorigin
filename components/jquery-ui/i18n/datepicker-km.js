/* Khmer initialisation for the jQuery calendar extension. */
/* Written by Chandara Om (chandara.teacher@gmail.com). */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['km'] = {
        closeText: '\u1792\u17D2\u179C\u17BE\u200B\u179A\u17BD\u1785',
        prevText: '\u1798\u17BB\u1793',
        nextText: '\u1794\u1793\u17D2\u1791\u17B6\u1794\u17CB',
        currentText: '\u1790\u17D2\u1784\u17C3\u200B\u1793\u17C1\u17C7',
        monthNames: [
            '\u1798\u1780\u179A\u17B6',
            '\u1780\u17BB\u1798\u17D2\u1797\u17C8',
            '\u1798\u17B8\u1793\u17B6',
            '\u1798\u17C1\u179F\u17B6',
            '\u17A7\u179F\u1797\u17B6',
            '\u1798\u17B7\u1790\u17BB\u1793\u17B6',
            '\u1780\u1780\u17D2\u1780\u178A\u17B6',
            '\u179F\u17B8\u17A0\u17B6',
            '\u1780\u1789\u17D2\u1789\u17B6',
            '\u178F\u17BB\u179B\u17B6',
            '\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6',
            '\u1792\u17D2\u1793\u17BC'
        ],
        monthNamesShort: [
            '\u1798\u1780\u179A\u17B6',
            '\u1780\u17BB\u1798\u17D2\u1797\u17C8',
            '\u1798\u17B8\u1793\u17B6',
            '\u1798\u17C1\u179F\u17B6',
            '\u17A7\u179F\u1797\u17B6',
            '\u1798\u17B7\u1790\u17BB\u1793\u17B6',
            '\u1780\u1780\u17D2\u1780\u178A\u17B6',
            '\u179F\u17B8\u17A0\u17B6',
            '\u1780\u1789\u17D2\u1789\u17B6',
            '\u178F\u17BB\u179B\u17B6',
            '\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6',
            '\u1792\u17D2\u1793\u17BC'
        ],
        dayNames: [
            '\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799',
            '\u1785\u1793\u17D2\u1791',
            '\u17A2\u1784\u17D2\u1782\u17B6\u179A',
            '\u1796\u17BB\u1792',
            '\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD',
            '\u179F\u17BB\u1780\u17D2\u179A',
            '\u179F\u17C5\u179A\u17CD'
        ],
        dayNamesShort: [
            '\u17A2\u17B6',
            '\u1785',
            '\u17A2',
            '\u1796\u17BB',
            '\u1796\u17D2\u179A\u17A0',
            '\u179F\u17BB',
            '\u179F\u17C5'
        ],
        dayNamesMin: [
            '\u17A2\u17B6',
            '\u1785',
            '\u17A2',
            '\u1796\u17BB',
            '\u1796\u17D2\u179A\u17A0',
            '\u179F\u17BB',
            '\u179F\u17C5'
        ],
        weekHeader: '\u179F\u1794\u17D2\u178A\u17B6\u17A0\u17CD',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['km']);
    return datepicker.regional['km'];
}));