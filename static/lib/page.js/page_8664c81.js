define("modules/lib/page.js/page",function(e,t,n){!function(e){if("object"==typeof t&&"undefined"!=typeof n)n.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof global?r=global:"undefined"!=typeof self&&(r=self),r.page=e()}}(function(){return function t(n,r,i){function o(s,c){if(!r[s]){if(!n[s]){var u="function"==typeof e&&e;if(!c&&u)return u(s,!0);if(a)return a(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var p=r[s]={exports:{}};n[s][0].call(p.exports,function(e){var t=n[s][1][e];return o(t?t:e)},p,p.exports,t,n,r,i)}return r[s].exports}for(var a="function"==typeof e&&e,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t){(function(n){"use strict";function r(e,t){if("function"==typeof e)return r("*",e);if("function"==typeof t)for(var n=new s(e),i=1;i<arguments.length;++i)r.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?r["string"==typeof t?"redirect":"show"](e,t):r.start(e)}function i(e){if(!e.handled){var t;t=y?g+v.hash.replace("#!",""):v.pathname+v.search,t!==e.canonicalPath&&(r.stop(),e.handled=!1,v.href=e.canonicalPath)}}function o(e){return"string"!=typeof e?e:m?decodeURIComponent(e.replace(/\+/g," ")):e}function a(e,t){"/"===e[0]&&0!==e.indexOf(g)&&(e=g+(y?"#!":"")+e);var n=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(g,"")||"/",y&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=t||{},this.state.path=e,this.querystring=~n?o(e.slice(n+1)):"",this.pathname=o(~n?e.slice(0,n):e),this.params={},this.hash="",!y){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=r[0],this.hash=o(r[1])||"",this.querystring=this.querystring.split("#")[0]}}function s(e,t){t=t||{},this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=p(this.path,this.keys=[],t.sensitive,t.strict)}function c(e){if(1===u(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.path?e.path[0]:e.target;t&&"A"!==t.nodeName;)t=t.parentNode;if(t&&"A"===t.nodeName&&!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var i=t.getAttribute("href");if((y||t.pathname!==v.pathname||!t.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!t.target&&f(t.href)){var o=t.pathname+t.search+(t.hash||"");"undefined"!=typeof n&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o;0===o.indexOf(g)&&(o=o.substr(g.length)),y&&(o=o.replace("#!","")),g&&a===o||(e.preventDefault(),r.show(a))}}}}function u(e){return e=e||window.event,null===e.which?e.button:e.which}function f(e){var t=v.protocol+"//"+v.hostname;return v.port&&(t+=":"+v.port),e&&0===e.indexOf(t)}var p=e("path-to-regexp");t.exports=r;var h,d,l="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",v="undefined"!=typeof window&&(window.history.location||window.location),w=!0,m=!0,g="",y=!1;r.callbacks=[],r.exits=[],r.current="",r.len=0,r.base=function(e){return 0===arguments.length?g:void(g=e)},r.start=function(e){if(e=e||{},!h&&(h=!0,!1===e.dispatch&&(w=!1),!1===e.decodeURLComponents&&(m=!1),!1!==e.popstate&&window.addEventListener("popstate",x,!1),!1!==e.click&&document.addEventListener(l,c,!1),!0===e.hashbang&&(y=!0),w)){var t=y&&~v.hash.indexOf("#!")?v.hash.substr(2)+v.search:v.pathname+v.search+v.hash;r.replace(t,null,!0,w)}},r.stop=function(){h&&(r.current="",r.len=0,h=!1,document.removeEventListener(l,c,!1),window.removeEventListener("popstate",x,!1))},r.show=function(e,t,n,i){var o=new a(e,t);return r.current=o.path,!1!==n&&r.dispatch(o),!1!==o.handled&&!1!==i&&o.pushState(),o},r.back=function(e,t){r.len>0?(history.back(),r.len--):setTimeout(e?function(){r.show(e,t)}:function(){r.show(g,t)})},r.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&r(e,function(){setTimeout(function(){r.replace(t)},0)}),"string"==typeof e&&"undefined"==typeof t&&setTimeout(function(){r.replace(e)},0)},r.replace=function(e,t,n,i){var o=new a(e,t);return r.current=o.path,o.init=n,o.save(),!1!==i&&r.dispatch(o),o},r.dispatch=function(e){function t(){var e=r.exits[s++];return e?void e(o,t):n()}function n(){var t=r.callbacks[a++];return e.path!==r.current?void(e.handled=!1):t?void t(e,n):i(e)}var o=d,a=0,s=0;d=e,o?t():n()},r.exit=function(e){if("function"==typeof e)return r.exit("*",e);for(var t=new s(e),n=1;n<arguments.length;++n)r.exits.push(t.middleware(arguments[n]))},r.Context=a,a.prototype.pushState=function(){r.len++,history.pushState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},a.prototype.save=function(){history.replaceState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},r.Route=s,s.prototype.middleware=function(e){var t=this;return function(n,r){return t.match(n.path,n.params)?e(n,r):void r()}},s.prototype.match=function(e,t){var n=this.keys,r=e.indexOf("?"),i=~r?e.slice(0,r):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;for(var s=1,c=a.length;c>s;++s){var u=n[s-1],f=o(a[s]);void 0===f&&hasOwnProperty.call(t,u.name)||(t[u.name]=f)}return!0};var x=function(){var e=!1;if("undefined"!=typeof window)return"complete"===document.readyState?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e)if(t.state){var n=t.state.path;r.replace(n,t.state)}else r.show(v.pathname+v.hash,void 0,void 0,!1)}}();r.sameOrigin=f}).call(this,e("_process"))},{_process:2,"path-to-regexp":3}],2:[function(e,t){function n(){}var r=t.exports={};r.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.MutationObserver,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};var r=[];if(t){var i=document.createElement("div"),o=new MutationObserver(function(){var e=r.slice();r.length=0,e.forEach(function(e){e()})});return o.observe(i,{attributes:!0}),function(e){r.length||i.setAttribute("yes","no"),r.push(e)}}return n?(window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(e){r.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}}(),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=n,r.addListener=n,r.once=n,r.off=n,r.removeListener=n,r.removeAllListeners=n,r.emit=n,r.binding=function(){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(){throw new Error("process.chdir is not supported")}},{}],3:[function(e,t){function n(e){for(var t,n=[],r=0,i=0,o="";null!=(t=v.exec(e));){var s=t[0],c=t[1],u=t.index;if(o+=e.slice(i,u),i=u+s.length,c)o+=c[1];else{o&&(n.push(o),o="");var f=t[2],p=t[3],h=t[4],d=t[5],l=t[6],w=t[7],m="+"===l||"*"===l,g="?"===l||"*"===l,y=f||"/",x=h||d||(w?".*":"[^"+y+"]+?");n.push({name:p||r++,prefix:f||"",delimiter:y,optional:g,repeat:m,pattern:a(x)})}}return i<e.length&&(o+=e.substr(i)),o&&n.push(o),n}function r(e){return i(n(e))}function i(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(n){for(var r="",i=n||{},o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var s,c=i[a.name];if(null==c){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(l(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(s=encodeURIComponent(c[u]),!t[o].test(s))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=(0===u?a.prefix:a.delimiter)+s}}else{if(s=encodeURIComponent(c),!t[o].test(s))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=a.prefix+s}}else r+=a}return r}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function a(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function s(e,t){return e.keys=t,e}function c(e){return e.sensitive?"":"i"}function u(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return s(e,t)}function f(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(d(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",c(n));return s(o,t)}function p(e,t,r){for(var i=n(e),o=h(i,r),a=0;a<i.length;a++)"string"!=typeof i[a]&&t.push(i[a]);return s(o,t)}function h(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,i="",a=e[e.length-1],s="string"==typeof a&&/\/$/.test(a),u=0;u<e.length;u++){var f=e[u];if("string"==typeof f)i+=o(f);else{var p=o(f.prefix),h=f.pattern;f.repeat&&(h+="(?:"+p+h+")*"),h=f.optional?p?"(?:"+p+"("+h+"))?":"("+h+")?":p+"("+h+")",i+=h}}return n||(i=(s?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=r?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+i,c(t))}function d(e,t,n){return t=t||[],l(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?u(e,t,n):l(e)?f(e,t,n):p(e,t,n)}var l=e("isarray");t.exports=d,t.exports.parse=n,t.exports.compile=r,t.exports.tokensToFunction=i,t.exports.tokensToRegExp=h;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:4}],4:[function(e,t){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}]},{},[1])(1)})});