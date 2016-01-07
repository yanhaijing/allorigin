/**
 * @file 常用用例模块
 * @author yanhaijing.com
 * @date 2016年1月5日 16:56:47
 */

import $ from 'jquery';
import {UIBase} from 'ui/base/base';
import 'util/template/template';

var commonCaseTpl = __inline('common-case.tmpl');

var cols = [];

// 处理第一列
// 全部html标签
var html = ['a' ,'abbr' ,'acronym' ,'address' ,'applet' ,'area' ,'article' ,'aside' ,'audio' ,'b' ,'base' ,'basefont' ,'bdi' ,'bdo' ,'big' ,'blockquote' ,'body' ,'br' ,'button' ,'canvas' ,'caption' ,'center' ,'cite' ,'code' ,'col' ,'colgroup' ,'command' ,'datalist' ,'dd' ,'del' ,'details' ,'dir' ,'div' ,'dfn' ,'dialog' ,'dl' ,'dt' ,'em' ,'embed' ,'fieldset' ,'figcaption' ,'figure' ,'font' ,'footer' ,'form' ,'frame' ,'frameset' ,'h1' ,'head' ,'header' ,'hr' ,'html' ,'i' ,'iframe' ,'img' ,'input' ,'ins' ,'kbd' ,'keygen' ,'label' ,'legend' ,'li' ,'link' ,'map' ,'mark' ,'menu' ,'menuitem' ,'meta' ,'meter' ,'nav' ,'noframes' ,'noscript' ,'object' ,'ol' ,'optgroup' ,'option' ,'output' ,'p' ,'param' ,'pre' ,'progress' ,'q' ,'rp' ,'rt' ,'ruby' ,'s' ,'samp' ,'script' ,'section' ,'select' ,'small' ,'source' ,'span' ,'strike' ,'strong' ,'style' ,'sub' ,'summary' ,'sup' ,'table' ,'tbody' ,'td' ,'textarea' ,'tfoot' ,'th' ,'thead' ,'time' ,'title' ,'tr' ,'track' ,'tt' ,'u' ,'ul' ,'var' ,'video' ,'wbr'];
cols[0] = [];
cols[0][0] = {
    title: 'HTML'
};
cols[0][0].list = [
    {
        title: '<!-- -->',
        code: 'document.createComment("")'
    }
];
html.forEach(function (v) {
    cols[0][0].list.push({
        title: '<' + v + '>',
        code: `document.createElement("${v}")`
    });
});

// 处理第二列
cols[1] = [];
cols[1][0] = {
    title: 'JavaScript',
    list: []
};
cols[1][0].list = [
    {
        title: 'undefined',
        code: 'undefined'
    },
    {
        title: 'null',
        code: 'null'
    },
    {
        title: 'number literal',
        code: '123'
    },
    {
        title: 'new Number',
        code: 'new Number(123)'
    },
    {
        title: 'string literal',
        code: '"string"'
    },
    {
        title: 'new String',
        code: 'new String("string")'
    },
    {
        title: 'boolean literal',
        code: 'true'
    },
    {
        title: 'new Boolean',
        code: 'new Boolean(true)'
    },
    {
        title: 'Symbol⑥',
        code: 'Symbol()'
    },
    {
        title: 'array literal',
        code: '[1]'
    },
    {
        title: 'new Array',
        code: 'new Array()'
    },
    {
        title: 'new Set⑥',
        code: 'new Set()'
    },
    {
        title: 'new WeakSet⑥',
        code: 'new WeakSet()'
    },
    {
        title: 'new Map⑥',
        code: 'new Map()'
    },
    {
        title: 'new WeakMap⑥',
        code: 'new WeakMap()'
    },
    {
        title: 'function literal',
        code: 'function() {}'
    },
    {
        title: 'arrow function',
        code: 'x => x'
    },
    {
        title: 'new Function',
        code: 'new Function()'
    },
    {
        title: 'object literal',
        code: '{a: 1}'
    },
    {
        title: 'new Object',
        code: 'new Object()'
    },
    {
        title: 'class⑥',
        code: 'class A{}'
    },
    {
        title: 'regexp literal',
        code: '/1/'
    },
    {
        title: 'new RegExp',
        code: 'new RegExp()'
    },
    {
        title: 'new Date',
        code: 'new Date()'
    },
    {
        title: 'Math',
        code: 'Math'
    },
    {
        title: 'new Promise⑥',
        code: 'new Promise(function(){})'
    }
];

// 处理第三列
cols[2] = [];
cols[2][0] = {
    title: 'DOM'
};
cols[2][0].list = [
    {
        title: 'document',
        code: 'document'
    },
    {
        title: 'document.all',
        code: 'document.all'
    },
    {
        title: 'document.doctype',
        code: 'document.doctype'
    },
    {
        title: 'HTMLCollection',
        code: 'document.getElementsByTagName("")'
    },
    {
        title: 'NodeList',
        code: 'document.getElementsByName("")'
    }
];

// 处理第四列
cols[3] = [];
cols[3][0] = {
    title: 'BOM'
};
cols[3][0].list = [
    {
        title: 'window',
        code: 'window'
    },
    {
        title: 'screen',
        code: 'screen'
    },
    {
        title: 'history',
        code: 'history'
    },
    {
        title: 'location',
        code: 'location'
    },
    {
        title: 'navigator',
        code: 'navigator'
    },
    {
        title: 'console',
        code: 'console'
    },
    {
        title: 'localStorage',
        code: 'localStorage'
    },
];
class CommonCase extends UIBase {
    constructor() {
        super();
        this.$wp = $('#screen');
        this.bindEvent();
    }
    bindEvent() {
        var me = this;
        this.$wp.on('click', '.wgt-common-case a', function (e) {
            e.preventDefault();
            var code = $(this).data('code');
            me.emit('select', {code});
        });
    }
    render() {
        this.$wp.html(commonCaseTpl({cols}));
    }
}

export {CommonCase};
