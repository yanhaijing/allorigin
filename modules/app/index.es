import $ from 'jquery';
import {} from 'jquery-ui/autocomplete';
import {getProtoChain} from 'prototype';

var availableTags = [];
Object.keys(window).forEach(function (v) {
    availableTags.push(v);
});


$("#aio").autocomplete({
    source: availableTags
}).on('keypress', function (e) {
    if (e.keyCode !== 13) {
        return 1;
    }

    // 回车
    var code = $(this).val().trim();
    if (code === '') {
        return 2;
    }
    console.log(code);

    console.log(getProtoChain(eval('(' + code + ')')));
});
