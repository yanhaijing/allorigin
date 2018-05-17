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