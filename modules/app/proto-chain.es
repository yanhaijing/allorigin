/**
 * @file 原型渲染
 * @author yanhaijing.com
 * @date 2016年1月5日 17:32:50
 */

import {UIBase} from 'ui/base/base';
import {getProtoChain, getMember, getOwnMember, getOwnAllMember} from 'object';
import 'util/template/template';
import {type} from 'util/type/type';

var protoChainTpl = __inline('proto-chain.tmpl');

class ProtoChain extends UIBase {
    constructor() {
        super();
        this.$screen = $('#screen');
    }
    render(code) {
        var target;
        try {
            target = eval('(' + code + ')');
            this.$screen.html(protoChainTpl({
                list: getProtoChain(target),
                type,
                getMember, getOwnMember, getOwnAllMember
            }));
        } catch(exp) {
            alert(exp.message);
        }
    }
}

export {ProtoChain};
