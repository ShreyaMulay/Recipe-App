import { u as useMarkdownToc, _ as __unplugin_components_4 } from "./useMarkdownToc.aa021ddc.js";
import { _ as __unplugin_components_1, a as _sfc_main$3 } from "./VBreadcrumb.f9c0002b.js";
import { o as openBlock, U as createBlock, w as withCtx, f as createBaseVNode, j as createTextVNode, h as createVNode, d as defineComponent, e as ref, S as useHead, a as createElementBlock, n as normalizeClass, m as unref, q as createCommentVNode } from "./vendor.4d9c5eda.js";
import { e as __unplugin_components_1$1, f as _sfc_main$2 } from "./index.e3db1ffa.js";
import { _ as _sfc_main$1 } from "./VCheckbox.8bca2649.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./VIcon.5f648d83.js";
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vcheckbox-events",
  tabindex: "-1"
}, "VCheckbox Events", -1);
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full events available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VCheckbox />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Event"),
      /* @__PURE__ */ createBaseVNode("th", null, "Callback"),
      /* @__PURE__ */ createBaseVNode("th", null, "Description")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "@update:modelValue"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-function" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "(value: any[]) => void")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("Raised when the checkbox value changed"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createTextVNode("Use "),
        /* @__PURE__ */ createBaseVNode("code", null, "v-model"),
        /* @__PURE__ */ createTextVNode(" directive to bind values")
      ])
    ])
  ])
], -1);
function render$5(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$6,
      _hoisted_2$6,
      _hoisted_3$6
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$5 = { "disable_code": true, "slimscroll": true };
const data$5 = () => ({ frontmatter: __matter$5 });
const __script$5 = { render: render$5, data: data$5 };
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vcheckbox-props",
  tabindex: "-1"
}, "VCheckbox Props", -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full props available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VCheckbox />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Props"),
      /* @__PURE__ */ createBaseVNode("th", null, "Default"),
      /* @__PURE__ */ createBaseVNode("th", null, "Type")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("value"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("strong", null, "required")
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string, number")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "label"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "modelValue"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "[]")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "string[]")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "color"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "primary"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "info"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "success"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "warning"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "danger")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "circle"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "solid"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ])
  ])
], -1);
function render$4(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$5,
      _hoisted_2$5,
      _hoisted_3$5
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$4 = { "disable_code": true, "slimscroll": true };
const data$4 = () => ({ frontmatter: __matter$4 });
const __script$4 = { render: render$4, data: data$4 };
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "solid-circle",
  tabindex: "-1"
}, "Solid circle", -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero checkboxes can be circles instead of squares. Simply add the "),
  /* @__PURE__ */ createBaseVNode("code", null, "circle"),
  /* @__PURE__ */ createTextVNode(" attribute to your checkbox element. See the code example for more details about usage.")
], -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "setup"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "lang"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("ts"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--script" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--language-javascript" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" ref "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" options "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Option 2'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("info"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("success"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("warning"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("danger"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers-wrapper" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "4"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "5"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "6"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "7"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "8"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "9"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "10"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "14"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "15"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "16"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "17"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "18"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "19"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "20"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "32"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "33"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "34"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "35"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "36"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "37"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "38"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "39"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "40"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "41"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "42"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "43"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "44"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "45"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "46"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "47"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "48"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "49"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "50"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "51"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "52"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "53"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$3(_ctx, _cache) {
  const _component_VCheckbox = _sfc_main$1;
  const _component_VControl = __unplugin_components_1$1;
  const _component_VField = _sfc_main$2;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$4
    ]),
    example: withCtx(() => [
      createVNode(_component_VField, null, {
        default: withCtx(() => [
          createVNode(_component_VControl, null, {
            default: withCtx(() => [
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 1",
                label: "Option 1",
                solid: "",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 2",
                label: "Option 2",
                color: "primary",
                solid: "",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 3",
                label: "Option 3",
                color: "info",
                solid: "",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 4",
                label: "Option 4",
                color: "success",
                solid: "",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 5",
                label: "Option 5",
                color: "warning",
                solid: "",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 6",
                label: "Option 6",
                color: "danger",
                solid: "",
                circle: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      _hoisted_1$4,
      _hoisted_2$4
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$3 = { "state": { "options": ["Option 2"] } };
const data$3 = () => ({ frontmatter: __matter$3 });
const __script$3 = { render: render$3, data: data$3 };
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "checkbox-solid",
  tabindex: "-1"
}, "Checkbox solid", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero provides alternative checkbox style with "),
  /* @__PURE__ */ createBaseVNode("code", null, "solid"),
  /* @__PURE__ */ createTextVNode(" attribute. Those checkboxes also support all main colors. The available modifiers are "),
  /* @__PURE__ */ createBaseVNode("code", null, "primary"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "success"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "info"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "warning"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "danger"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "setup"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "lang"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("ts"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--script" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--language-javascript" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" ref "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" options "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Option 2'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("info"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("success"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("warning"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("danger"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers-wrapper" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "4"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "5"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "6"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "7"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "8"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "9"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "10"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "14"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "15"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "16"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "17"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "18"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "19"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "20"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "32"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "33"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "34"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "35"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "36"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "37"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "38"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "39"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "40"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "41"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "42"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$2(_ctx, _cache) {
  const _component_VCheckbox = _sfc_main$1;
  const _component_VControl = __unplugin_components_1$1;
  const _component_VField = _sfc_main$2;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$3
    ]),
    example: withCtx(() => [
      createVNode(_component_VField, null, {
        default: withCtx(() => [
          createVNode(_component_VControl, null, {
            default: withCtx(() => [
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 1",
                label: "Option 1",
                solid: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 2",
                label: "Option 2",
                color: "primary",
                solid: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 3",
                label: "Option 3",
                color: "info",
                solid: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 4",
                label: "Option 4",
                color: "success",
                solid: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 5",
                label: "Option 5",
                color: "warning",
                solid: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 6",
                label: "Option 6",
                color: "danger",
                solid: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      _hoisted_1$3,
      _hoisted_2$3
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$2 = { "state": { "options": ["Option 2"] } };
const data$2 = () => ({ frontmatter: __matter$2 });
const __script$2 = { render: render$2, data: data$2 };
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "outlined-circle",
  tabindex: "-1"
}, "Outlined circle", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero checkboxes can be circles instead of squares. Simply add the "),
  /* @__PURE__ */ createBaseVNode("code", null, "circle"),
  /* @__PURE__ */ createTextVNode(" attribute to your checkbox element. See the code example for more details about usage.")
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "setup"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "lang"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("ts"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--script" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--language-javascript" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" ref "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" options "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Option 2'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("info"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("success"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("warning"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("danger"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "circle"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers-wrapper" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "4"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "5"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "6"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "7"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "8"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "9"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "10"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "14"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "15"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "16"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "17"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "18"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "19"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "20"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "32"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "33"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "34"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "35"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "36"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "37"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "38"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "39"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "40"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "41"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "42"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "43"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "44"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "45"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "46"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "47"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "48"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$1(_ctx, _cache) {
  const _component_VCheckbox = _sfc_main$1;
  const _component_VControl = __unplugin_components_1$1;
  const _component_VField = _sfc_main$2;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$2
    ]),
    example: withCtx(() => [
      createVNode(_component_VField, null, {
        default: withCtx(() => [
          createVNode(_component_VControl, null, {
            default: withCtx(() => [
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 1",
                label: "Option 1",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 2",
                label: "Option 2",
                color: "primary",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 3",
                label: "Option 3",
                color: "info",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 4",
                label: "Option 4",
                color: "success",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 5",
                label: "Option 5",
                color: "warning",
                circle: ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 6",
                label: "Option 6",
                color: "danger",
                circle: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$1 = { "state": { "options": ["Option 2"] } };
const data$1 = () => ({ frontmatter: __matter$1 });
const __script$1 = { render: render$1, data: data$1 };
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vcheckbox",
  tabindex: "-1"
}, "VCheckbox", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero provides default styled checkboxes in 2 main styles, "),
  /* @__PURE__ */ createBaseVNode("code", null, "outlined"),
  /* @__PURE__ */ createTextVNode(" (default) and "),
  /* @__PURE__ */ createBaseVNode("code", null, "solid"),
  /* @__PURE__ */ createTextVNode(". Those checkboxes also support all main colors. The available colors are "),
  /* @__PURE__ */ createBaseVNode("code", null, "primary"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "success"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "info"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "warning"),
  /* @__PURE__ */ createTextVNode(", "),
  /* @__PURE__ */ createBaseVNode("code", null, "danger"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "setup"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "lang"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("ts"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--script" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--language-javascript" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" ref "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" options "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Option 2'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "solid"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("info"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("success"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("warning"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCheckbox")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Option 6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("danger"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers-wrapper" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "4"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "5"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "6"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "7"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "8"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "9"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "10"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "14"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "15"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "16"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "17"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "18"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render(_ctx, _cache) {
  const _component_VCheckbox = _sfc_main$1;
  const _component_VControl = __unplugin_components_1$1;
  const _component_VField = _sfc_main$2;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$1
    ]),
    example: withCtx(() => [
      createVNode(_component_VField, null, {
        default: withCtx(() => [
          createVNode(_component_VControl, null, {
            default: withCtx(() => [
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 1",
                label: "Option 1"
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 2",
                label: "Option 2",
                color: "primary"
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 3",
                label: "Option 3",
                color: "info"
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 4",
                label: "Option 4",
                color: "success"
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 5",
                label: "Option 5",
                color: "warning"
              }, null, 8, ["modelValue"]),
              createVNode(_component_VCheckbox, {
                modelValue: _ctx.frontmatter.state.options,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.frontmatter.state.options = $event),
                value: "Option 6",
                label: "Option 6",
                color: "danger"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter = { "state": { "options": ["Option 2"] } };
const data = () => ({ frontmatter: __matter });
const __script = { render, data };
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VCheckbox");
    useHead({
      title: "VCheckbox - Forms Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$3;
      const _component_CheckboxOutlinedDocumentation = __script;
      const _component_CheckboxOutlinedCircleDocumentation = __script$1;
      const _component_CheckboxSolidDocumentation = __script$2;
      const _component_CheckboxSolidCircleDocumentation = __script$3;
      const _component_CheckboxPropsDocumentation = __script$4;
      const _component_CheckboxEventsDocumentation = __script$5;
      const _component_DocumentationToc = __unplugin_components_4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VBreadcrumb, {
          "with-icons": "",
          separator: "bullet",
          items: [
            {
              label: "Vuero",
              hideLabel: true,
              icon: "feather:home",
              to: { name: "index" }
            },
            {
              label: "Elements",
              to: { name: "elements" }
            },
            {
              label: "Switches"
            },
            {
              label: "VCheckbox",
              to: { name: "elements-checkbox" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_CheckboxOutlinedDocumentation),
            createVNode(_component_CheckboxOutlinedCircleDocumentation),
            createVNode(_component_CheckboxSolidDocumentation),
            createVNode(_component_CheckboxSolidCircleDocumentation),
            createVNode(_component_CheckboxPropsDocumentation),
            createVNode(_component_CheckboxEventsDocumentation)
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
