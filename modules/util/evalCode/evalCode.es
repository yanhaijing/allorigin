/**
 * @file 执行源代码
 * @author yanhaijing.com
 * @date 2016年1月10日 18:22:31
 */
import {type, isFunction, isNullOrUndef} from 'util/type/type';

function evalCode(code) {
    try {
        return eval('(' + code + ')');
    } catch(exp) {
        !isNullOrUndef(console) && isFunction(console.log) && console.log(exp);
        alert(exp.message);
        return code;
    }
}

export {evalCode};
