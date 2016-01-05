/**
 * @file index文件
 * @author yanhaijing.com
 * @date 2016年1月4日 19:33:51
 * @require proto-chain.scss
 */

import $ from 'jquery';
import 'jquery-ui/autocomplete';
import page from 'lib/page.js/page';
import {CommonCase} from 'common-case';
import {ProtoChain} from 'proto-chain';

var $screen = $('#screen');
var $aio = $("#aio");
var commonCase = new CommonCase();
var protoChain = new ProtoChain();

function bindEvent() {
    $aio.on('keypress', function (e) {
        if (e.keyCode !== 13) {
            return 1;
        }

        // 回车
        var code = $(this).val().trim();
        if (code === '') {
            page('/');
            return 2;
        }

        page('/?code=' + code);
    });

    commonCase.on('select', function (e, data) {
        page('/?code=' + data.code);
    });
}
function init() {
    // 初始化输入框
    var availableTags = [];
    Object.keys(window).forEach(function (v) {
        availableTags.push(v);
    });

    $aio.autocomplete({
        source: availableTags
    });

    // 配置路由
    page.base('/');
    page('*', function (ctx, next) {
        if (ctx.querystring.search('code') < 0) {
            next();
            return 1;
        }
        var code = ctx.querystring.split(';')[0].split('=')[1];
        protoChain.render(code);
    });
    page('/', function (ctx, next) {
        commonCase.render();
    });

    page();
    
    // 绑定事件
    bindEvent();
}

export {init};
