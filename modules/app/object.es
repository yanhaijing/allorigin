import {type, isFunction, isNullOrUndef} from 'util/type/type';

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

export {getProtoChain, getMember, getOwnMember, getOwnAllMember};
