/**
 * @file 常用用例模块
 * @author yanhaijing.com
 * @date 2016年1月5日 16:56:47
 */
import {UIBase} from 'ui/base/base';
import 'util/template/template';

var commonCaseTpl = __inline('common-case.tmpl');
var html = [
    'a',
    'abbr'
];

var cols = [];

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

class CommonCase extends UIBase {
    constructor() {
        super();
        this.$wp = $('#screen');
        this.bindEvent();
    }
    bindEvent() {
        var me = this;
        this.$wp.on('click', '.wgt-common-case li', function () {
            var code = $(this).data('code');
            me.emit('select', {code});
        });
    }
    render() {
        this.$wp.html(commonCaseTpl({cols}));
    }
}

export {CommonCase};
