/**
 * @file index文件
 * @author yanhaijing.com
 * @date 2016年1月4日 19:33:51
 * @require proto-chain.scss
 */

import $ from 'jquery';
import 'jquery-ui/autocomplete';
import page from 'lib/page.js/page';
import {getQueryString} from 'util/uri/uri';
import {type, isFunction, isNullOrUndef} from 'util/type/type';
import {getProtoChain, getMember, getOwnMember, getOwnAllMember} from 'app/object';
import {CommonCase} from 'common-case/common-case';
import {ProtoChain} from 'proto-chain/proto-chain';
import {Detail} from 'detail/detail';
import {render as renderAbout} from 'about/about';

var $screen = $('#screen');
var $aio = $("#aio");
var commonCase = new CommonCase();
var protoChain = new ProtoChain();
var detail = new Detail();

function bindEvent() {
    $aio.on('keypress', function (e) {
        if (e.keyCode !== 13) {
            return 1;
        }

        // 回车
        var code = $(this).val().trim();
        if (code === '') {
            page('#index');
            return 2;
        }

        page('#search?code=' + encodeURIComponent(code));
    });

    commonCase.on('select', function (e, data) {
        page('#search?code=' + encodeURIComponent(data.code));
    });

    protoChain.on('select', function (e, data) {
        page('#detail?code=' + encodeURIComponent(data.code));
    });
}
function init() {
    // 初始化输入框
    $aio.autocomplete({
        source: getOwnMember(window)
    });

    // 配置路由
    page.base('/');
    page('*', function (ctx, next) {
        var hashs = ctx.hash.split('?');
        var path = hashs[0];
        var queryString = hashs[1];

        // 首页
        if (path === 'index') {
            commonCase.render();
            return 1;
        }

        // 搜索页
        if (path === 'search') {
            protoChain.render(decodeURIComponent(getQueryString('code', queryString)));
            return 2;
        }

        // 搜索页
        if (path === 'detail') {
            console.log(getQueryString('code', queryString));
            detail.render(decodeURIComponent(getQueryString('code', queryString)));
            return 3;
        }

        // 关于介绍
        if (path === 'about') {
            renderAbout()
            return 9;
        }

        // 下一个匹配
        next();
        return 0;
    });
    page('/', function (ctx, next) {
        commonCase.render();
    });

    page();
    
    // 绑定事件
    bindEvent();
}

export {init};
