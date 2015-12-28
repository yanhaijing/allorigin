var $ = require('jquery');
require('jquery-ui/autocomplete');

var availableTags = [];
Object.keys(window).forEach(function (v) {
    availableTags.push(v);
    console.log(v);
});
$("#aio").autocomplete({
    source: availableTags
});
