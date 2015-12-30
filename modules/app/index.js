var $ = require('jquery');
require('jquery-ui/autocomplete');

var availableTags = [];
Object.keys(window).forEach(function (v) {
    availableTags.push(v);
    console.log(v);
});


$("#aio").autocomplete({
    source: availableTags
}).on('keypress', function (e) {
    if (e.keyCode !== 13) {
        return 1;
    }

    // 回车
    var term = $(this).val().trim();
    if (term === '') {
        return 2;
    }
    console.log(term);
});
