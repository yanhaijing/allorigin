/**
 * @file 关于页面
 * @author yanhaijing.com
 * @date 2016年1月6日 10:50:05
 */

import $ from 'jquery';

var html = __inline('about.tmpl')({
    alipay: __uri('img/alipay.png'),
    weixin: __uri('img/weixin.png')
});
var $wp = $('#screen');

function render() {
    $wp.html(html);
}

export {render};
