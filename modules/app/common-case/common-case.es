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
    'title': 'HTML',
    'list': []
};

html.forEach(function (v) {
    cols[0][0].list.push({
        title: v,
        code: `document.createElement("${v}")`
    });
});

// 处理第二列
cols[1] = [];
cols[1][0] = {
    'title': 'JavaScript',
    'list': []
};

var js = [];


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
