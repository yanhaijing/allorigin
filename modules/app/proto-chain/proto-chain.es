/**
 * @file 原型渲染
 * @author yanhaijing.com
 * @date 2016年1月5日 17:32:50
 */

import $ from 'jquery';
import {UIBase} from 'ui/base/base';
import {getProtoChain, getName, getMember, getOwnMember, getOwnAllMember} from 'app/object';
import 'util/template/template';
import {type, isFunction, isNullOrUndef} from 'util/type/type';

var protoChainTpl = __inline('proto-chain.tmpl');

class ProtoChain extends UIBase {
    constructor() {
        super();
        this.$screen = $('#screen');
        this.chain = [];
        this.code = '';
        this.bindEvent();
    }
    bindEvent() {
        var me = this;
        // 点击展示详情页面
        this.$screen.on('click', '.wgt-proto-chain .proto-item', function (e) {
            var index = $(this).data('index');
            var code;
            if (index == 0) {
                code = me.code;
            } else {
                code = me.chain[index];
                code = isNullOrUndef(code) ? code : code.constructor.name;
            }

            me.emit('select', {code: code});
        });
    }
    render(code) {
        var target;
        try {
            target = eval('(' + code + ')');
            this.chain = getProtoChain(target);
            this.code = code;
            this.$screen.html(protoChainTpl({
                list: this.chain,
                type,
                getName,
                getMember, getOwnMember, getOwnAllMember
            }));
        } catch(exp) {
            alert(exp.message);
        }
    }
}

export {ProtoChain};
