function getQueryString(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    url = url || window.location.search.substr(1);
    var r = url.match(reg);
    if (r != null) {
        return unescape(r[2]);
    } 
    return null;
}

export {getQueryString};
