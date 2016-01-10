import {type, isObject, isFunction, isNullOrUndef} from 'util/type/type';

var toString = {}.toString;

function allToString(x) {
    return (x && x.toString && x.toString()) || toString.call(x);
}
// 获取 变量 对象的name
function getName(x) {
    if (isNullOrUndef(x)) {
        return type(x);
    }

    if (isObject(x)) {
        return (x.constructor && x.constructor.name) || allToString(x);
    }

    if (isFunction(x)) {
        return x.name || allToString(x);
    }
    return allToString(x);
}

function getProtoChain(target) {
    var t = type(target);
    if (t === 'undefined' || t === 'null') {
        return [target];
    }
    
    var arr = [target];
    while (target = Object.getPrototypeOf(target)) {
        arr.push(target);
    }
    arr.push(null)
    return arr;
}

function getMember(obj) {
    if (isNullOrUndef(obj)) {
        return [];
    }

    var res = [];
    for (var k in obj) {
        res.push(k);
    }
    return res;
}
function getOwnMember(obj) {
    return isNullOrUndef(obj) ? [] : Object.keys(obj);
}
function getOwnAllMember(obj) {
    return isNullOrUndef(obj) ? [] : Object.getOwnPropertyNames(obj);
}
function getOwnProperty(obj) {
    return getOwnMember(obj).filter(function (v) {
        return !isFunction(obj[v]);
    });
}

function getOwnMethod(obj) {
    return getOwnMember(obj).filter(function (v) {
        return isFunction(obj);
    });
}   

export {getProtoChain, getName, getMember, getOwnMember, getOwnAllMember};
