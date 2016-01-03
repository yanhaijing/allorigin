import {type} from 'util/type/type';

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

export {getProtoChain};
