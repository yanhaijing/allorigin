/* Hindi initialisation for the jQuery UI date picker plugin. */
/* Written by Michael Dawart. */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker'));;
}(function (datepicker) {
    datepicker.regional['hi'] = {
        closeText: '\u092C\u0902\u0926',
        prevText: '\u092A\u093F\u091B\u0932\u093E',
        nextText: '\u0905\u0917\u0932\u093E',
        currentText: '\u0906\u091C',
        monthNames: [
            '\u091C\u0928\u0935\u0930\u0940 ',
            '\u092B\u0930\u0935\u0930\u0940',
            '\u092E\u093E\u0930\u094D\u091A',
            '\u0905\u092A\u094D\u0930\u0947\u0932',
            '\u092E\u0908',
            '\u091C\u0942\u0928',
            '\u091C\u0942\u0932\u093E\u0908',
            '\u0905\u0917\u0938\u094D\u0924 ',
            '\u0938\u093F\u0924\u092E\u094D\u092C\u0930',
            '\u0905\u0915\u094D\u091F\u0942\u092C\u0930',
            '\u0928\u0935\u092E\u094D\u092C\u0930',
            '\u0926\u093F\u0938\u092E\u094D\u092C\u0930'
        ],
        monthNamesShort: [
            '\u091C\u0928',
            '\u092B\u0930',
            '\u092E\u093E\u0930\u094D\u091A',
            '\u0905\u092A\u094D\u0930\u0947\u0932',
            '\u092E\u0908',
            '\u091C\u0942\u0928',
            '\u091C\u0942\u0932\u093E\u0908',
            '\u0905\u0917',
            '\u0938\u093F\u0924',
            '\u0905\u0915\u094D\u091F',
            '\u0928\u0935',
            '\u0926\u093F'
        ],
        dayNames: [
            '\u0930\u0935\u093F\u0935\u093E\u0930',
            '\u0938\u094B\u092E\u0935\u093E\u0930',
            '\u092E\u0902\u0917\u0932\u0935\u093E\u0930',
            '\u092C\u0941\u0927\u0935\u093E\u0930',
            '\u0917\u0941\u0930\u0941\u0935\u093E\u0930',
            '\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930',
            '\u0936\u0928\u093F\u0935\u093E\u0930'
        ],
        dayNamesShort: [
            '\u0930\u0935\u093F',
            '\u0938\u094B\u092E',
            '\u092E\u0902\u0917\u0932',
            '\u092C\u0941\u0927',
            '\u0917\u0941\u0930\u0941',
            '\u0936\u0941\u0915\u094D\u0930',
            '\u0936\u0928\u093F'
        ],
        dayNamesMin: [
            '\u0930\u0935\u093F',
            '\u0938\u094B\u092E',
            '\u092E\u0902\u0917\u0932',
            '\u092C\u0941\u0927',
            '\u0917\u0941\u0930\u0941',
            '\u0936\u0941\u0915\u094D\u0930',
            '\u0936\u0928\u093F'
        ],
        weekHeader: '\u0939\u092B\u094D\u0924\u093E',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['hi']);
    return datepicker.regional['hi'];
}));