/**
 * @file 获取变量的类型
 * @author yanhaijing.com
 * @date 2016年1月3日 21:37:13
 */

var toString = ''.toString;

function type(x) {
    if(x === null){
        return 'null';
    }

    var t= typeof x;

    if(t !== 'object'){
        return t;
    }
    var c;
    try {
        c = toString.call(x).slice(8, -1).toLowerCase();
    } catch(exp) {
        console.log(exp);
        return 'unknown';
    }
    if(c !== 'object'){
        return c;
    }

    if(x.constructor==Object){
        return c;
    }

    return 'unknown';
}

export {type};
