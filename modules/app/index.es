import $ from 'jquery';
import {} from 'jquery-ui/autocomplete';
import {getProtoChain} from 'prototype';
import {} from 'util/template/template';

var protoChainTpl = __inline('proto-chain.tmpl');

var $screen = $('#screen');

var availableTags = [];
Object.keys(window).forEach(function (v) {
    availableTags.push(v);
});

function render(chain) {
    $screen.html(protoChainTpl({list: chain}));
}

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

    var target;
    try {
        target = eval('(' + code + ')');
        console.log(getProtoChain(target));
        render(getProtoChain(target));
    } catch(exp) {
        alert(exp.message);
    }
});
