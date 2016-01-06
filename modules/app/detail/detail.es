/**
 * @file 细节js
 * @author yanhaijing.com
 * @date 2016年1月6日 14:10:17
 */
import $ from 'jquery';
import {UIBase} from 'ui/base/base';
import {type, isFunction, isNullOrUndef} from 'util/type/type';
import {getProtoChain, getMember, getOwnMember, getOwnAllMember} from 'app/object';

var detailTpl = __inline('detail.tmpl');
var areaTpl = __inline('area.tmpl');

class Detail extends UIBase {
    constructor() {
        super();
        this.$wp = $('#screen');
    }
    render(code) {
        var target;
        try {
            target = eval('(' + code + ')');

            this.$wp.html(detailTpl({
                areaTpl,
                target,
                type,
                getMember, getOwnMember, getOwnAllMember
            }));
        } catch (exp) {
            alert(exp);
        }
    }
}

export {Detail};
