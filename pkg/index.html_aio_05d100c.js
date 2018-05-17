var require,define;!function(e){if(!require){var r=document.getElementsByTagName("head")[0],t={},n={},i={},a={},o={},s={},u=function(e,t){if(!(e in a)){a[e]=!0;var n=document.createElement("script");if(t){var i=setTimeout(t,require.timeout);n.onerror=function(){clearTimeout(i),t()};var o=function(){clearTimeout(i)};"onload"in n?n.onload=o:n.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&o()}}return n.type="text/javascript",n.src=e,r.appendChild(n),n}},c=function(e,r,n){var i=t[e]||(t[e]=[]);i.push(r);var a,c=o[e]||o[e+".js"]||{},l=c.pkg;a=l?s[l].url:c.url||e,u(a,n&&function(){n(e)})};define=function(e,r){e=e.replace(/\.js$/i,""),n[e]=r;var i=t[e];if(i){for(var a=0,o=i.length;o>a;a++)i[a]();delete t[e]}},require=function(e){if(e&&e.splice)return require.async.apply(this,arguments);e=require.alias(e);var r=i[e];if(r)return r.exports;var t=n[e];if(!t)throw"[ModJS] Cannot find module `"+e+"`";r=i[e]={exports:{}};var a="function"==typeof t?t.apply(r,[require,r.exports,r]):t;return a&&(r.exports=a),r.exports&&!r.exports["default"]&&(r.exports["default"]=r.exports),r.exports},require.async=function(r,t,i){function a(e){for(var r,t=0,p=e.length;p>t;t++){var f=require.alias(e[t]);f in n?(r=o[f]||o[f+".js"],r&&"deps"in r&&a(r.deps)):f in u||(u[f]=!0,l++,c(f,s,i),r=o[f]||o[f+".js"],r&&"deps"in r&&a(r.deps))}}function s(){if(0===l--){for(var n=[],i=0,a=r.length;a>i;i++)n[i]=require(r[i]);t&&t.apply(e,n)}}"string"==typeof r&&(r=[r]);var u={},l=0;a(r),s()},require.resourceMap=function(e){var r,t;t=e.res;for(r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);t=e.pkg;for(r in t)t.hasOwnProperty(r)&&(s[r]=t[r])},require.loadJs=function(e){u(e)},require.loadCss=function(e){if(e.content){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e.content:t.innerHTML=e.content,r.appendChild(t)}else if(e.url){var n=document.createElement("link");n.href=e.url,n.rel="stylesheet",n.type="text/css",r.appendChild(n)}},require.alias=function(e){return e.replace(/\.js$/i,"")},require.timeout=5e3}}(this);
require.resourceMap({
  "res": {
    "components/jquery/jquery": {
      "url": "//yanhaijing.com/allorigin/static/components/jquery/jquery_93349b6.js",
      "type": "js",
      "pkg": "p5"
    },
    "components/jquery-ui/core": {
      "url": "//yanhaijing.com/allorigin/static/components/jquery-ui/core_c1cce7c.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery"
      ],
      "pkg": "p5"
    },
    "components/jquery-ui/widget": {
      "url": "//yanhaijing.com/allorigin/static/components/jquery-ui/widget_f71497c.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery"
      ],
      "pkg": "p5"
    },
    "components/jquery-ui/position": {
      "url": "//yanhaijing.com/allorigin/static/components/jquery-ui/position_e642139.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery"
      ],
      "pkg": "p5"
    },
    "components/jquery-ui/menu": {
      "url": "//yanhaijing.com/allorigin/static/components/jquery-ui/menu_66ed85b.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery",
        "components/jquery-ui/core",
        "components/jquery-ui/widget",
        "components/jquery-ui/position"
      ],
      "pkg": "p5"
    },
    "components/jquery-ui/autocomplete": {
      "url": "//yanhaijing.com/allorigin/static/components/jquery-ui/autocomplete_987be4b.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery",
        "components/jquery-ui/core",
        "components/jquery-ui/widget",
        "components/jquery-ui/position",
        "components/jquery-ui/menu"
      ],
      "pkg": "p5"
    },
    "modules/lib/page.js/page": {
      "url": "//yanhaijing.com/allorigin/static/lib/page.js/page_8664c81.js",
      "type": "js",
      "pkg": "p6"
    },
    "modules/util/uri/uri.es": {
      "url": "//yanhaijing.com/allorigin/static/util/uri/uri_d802d83.js",
      "type": "js",
      "pkg": "p6"
    },
    "modules/util/type/type.es": {
      "url": "//yanhaijing.com/allorigin/static/util/type/type_3914234.js",
      "type": "js",
      "pkg": "p6"
    },
    "modules/util/object/object.es": {
      "url": "//yanhaijing.com/allorigin/static/util/object/object_899fb5e.js",
      "type": "js",
      "deps": [
        "modules/util/type/type.es"
      ],
      "pkg": "p6"
    },
    "modules/util/event/event.es": {
      "url": "//yanhaijing.com/allorigin/static/util/event/event_c362c2f.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery"
      ],
      "pkg": "p6"
    },
    "modules/ui/base/base.es": {
      "url": "//yanhaijing.com/allorigin/static/ui/base/base_f78248b.js",
      "type": "js",
      "deps": [
        "modules/util/event/event.es"
      ],
      "pkg": "p6"
    },
    "modules/lib/template/template": {
      "url": "//yanhaijing.com/allorigin/static/lib/template/template_bd64230.js",
      "type": "js",
      "pkg": "p6"
    },
    "modules/util/template/template.es": {
      "url": "//yanhaijing.com/allorigin/static/util/template/template_2a44356.js",
      "type": "js",
      "deps": [
        "modules/lib/template/template"
      ],
      "pkg": "p6"
    },
    "modules/util/evalCode/evalCode.es": {
      "url": "//yanhaijing.com/allorigin/static/util/evalCode/evalCode_98ab3d9.js",
      "type": "js",
      "deps": [
        "modules/util/type/type.es"
      ],
      "pkg": "p6"
    },
    "modules/app/common-case/common-case.es": {
      "url": "//yanhaijing.com/allorigin/static/app/common-case/common-case_41ecd44.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery",
        "modules/ui/base/base.es",
        "modules/util/template/template.es"
      ],
      "pkg": "p4"
    },
    "modules/app/proto-chain/proto-chain.es": {
      "url": "//yanhaijing.com/allorigin/static/app/proto-chain/proto-chain_1b6ec62.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery",
        "modules/ui/base/base.es",
        "modules/util/object/object.es",
        "modules/util/template/template.es",
        "modules/util/type/type.es",
        "modules/util/evalCode/evalCode.es"
      ],
      "pkg": "p4"
    },
    "modules/app/detail/detail.es": {
      "url": "//yanhaijing.com/allorigin/static/app/detail/detail_d5155ae.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery",
        "modules/ui/base/base.es",
        "modules/util/type/type.es",
        "modules/util/object/object.es",
        "modules/util/evalCode/evalCode.es"
      ],
      "pkg": "p4"
    },
    "modules/app/about/about.es": {
      "url": "//yanhaijing.com/allorigin/static/app/about/about_89cd6f6.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery"
      ],
      "pkg": "p4"
    },
    "modules/app/index.es": {
      "url": "//yanhaijing.com/allorigin/static/app/index_ba6418b.js",
      "type": "js",
      "deps": [
        "components/jquery/jquery",
        "components/jquery-ui/autocomplete",
        "modules/lib/page.js/page",
        "modules/util/uri/uri.es",
        "modules/util/type/type.es",
        "modules/util/object/object.es",
        "modules/app/common-case/common-case.es",
        "modules/app/proto-chain/proto-chain.es",
        "modules/app/detail/detail.es",
        "modules/app/about/about.es"
      ],
      "pkg": "p4"
    }
  },
  "pkg": {
    "p5": {
      "url": "//yanhaijing.com/allorigin/pkg/components_0474b2e.js",
      "type": "js"
    },
    "p6": {
      "url": "//yanhaijing.com/allorigin/pkg/modules_e97eb32.js",
      "type": "js"
    },
    "p4": {
      "url": "//yanhaijing.com/allorigin/pkg/aio_4ec3e01.js",
      "type": "js"
    }
  }
});
