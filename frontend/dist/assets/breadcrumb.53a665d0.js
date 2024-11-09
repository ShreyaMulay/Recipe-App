import { u as useMarkdownToc, _ as __unplugin_components_4 } from "./useMarkdownToc.aa021ddc.js";
import { _ as __unplugin_components_1, a as _sfc_main$1 } from "./VBreadcrumb.f9c0002b.js";
import { o as openBlock, U as createBlock, w as withCtx, f as createBaseVNode, j as createTextVNode, h as createVNode, d as defineComponent, e as ref, S as useHead, a as createElementBlock, n as normalizeClass, m as unref, q as createCommentVNode } from "./vendor.4d9c5eda.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./index.e3db1ffa.js";
import "./VIcon.5f648d83.js";
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vbreadcrumb-slots",
  tabindex: "-1"
}, "VBreadcrumb Slots", -1);
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full slots available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VBreadcrumb />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Slot"),
      /* @__PURE__ */ createBaseVNode("th", null, "Properties"),
      /* @__PURE__ */ createBaseVNode("th", null, "Description")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "#breadcrumb-item"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "<{"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " item: any,"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " index: number,"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, "}>")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "The full breadcrumb item content")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "#breadcrumb-item-label"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "<{"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " item: any,"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " index: number,"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, "}>")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "The breadcrumb item label content")
    ])
  ])
], -1);
function render$6(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$7,
      _hoisted_2$7,
      _hoisted_3$7
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$6 = { "disable_code": true, "slimscroll": true };
const data$6 = () => ({ frontmatter: __matter$6 });
const __script$6 = { render: render$6, data: data$6 };
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vbreadcrumb-props",
  tabindex: "-1"
}, "VBreadcrumb Props", -1);
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full props available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VBreadcrumb />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("table", null, [
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
        /* @__PURE__ */ createTextVNode("items"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("strong", null, "required")
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-null" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "null")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "Array<{"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " label: string"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " hideLabel?: boolean"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " icon?: string"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " link?: string"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " to?: RouteLocationRaw"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, "}>")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "separator"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "arrow"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "bullet"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "dot"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "succeeds")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "infratitle"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "center"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "lighter"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "narrow"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "mResponsive"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "tResponsive"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
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
  id: "succeeds-separator",
  tabindex: "-1"
}, "Succeeds Separator", -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Breadcrumb items can be separated by alternative separators. To display succeeds breadcrumb separators, set the "),
  /* @__PURE__ */ createBaseVNode("code", null, "separator"),
  /* @__PURE__ */ createTextVNode(" prop to "),
  /* @__PURE__ */ createBaseVNode("code", null, "succeeds"),
  /* @__PURE__ */ createTextVNode(". See markup for more details.")
], -1);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" breadcrumb "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Vuero'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    hideLabel"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:home'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// use external links"),
          /* @__PURE__ */ createTextVNode("\n    link"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'https://vuero.cssninja.io/'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:cpu'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// or generate a router link with 'to' props"),
          /* @__PURE__ */ createTextVNode("\n    to"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'VBreadcrumb'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
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
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("succeeds"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("succeeds"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "with-icons"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$4(_ctx, _cache) {
  const _component_VBreadcrumb = _sfc_main$1;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$5
    ]),
    example: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "succeeds"
        }, null, 8, ["items"]),
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "succeeds",
          "with-icons": ""
        }, null, 8, ["items"])
      ])
    ]),
    default: withCtx(() => [
      _hoisted_1$5,
      _hoisted_2$5
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$4 = { "breadcrumb": [{ "label": "Vuero", "hideLabel": true, "icon": "feather:home", "link": "https://vuero.cssninja.io/" }, { "label": "Components", "icon": "feather:cpu", "to": { "name": "components" } }, { "label": "VBreadcrumb" }] };
const data$4 = () => ({ frontmatter: __matter$4 });
const __script$4 = { render: render$4, data: data$4 };
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "dot-separator",
  tabindex: "-1"
}, "Dot Separator", -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Breadcrumb items can be separated by alternative separators. To display dot breadcrumb separators, set the "),
  /* @__PURE__ */ createBaseVNode("code", null, "separator"),
  /* @__PURE__ */ createTextVNode(" prop to "),
  /* @__PURE__ */ createBaseVNode("code", null, "dot"),
  /* @__PURE__ */ createTextVNode(". See markup for more details.")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" breadcrumb "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Vuero'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    hideLabel"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:home'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// use external links"),
          /* @__PURE__ */ createTextVNode("\n    link"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'https://vuero.cssninja.io/'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:cpu'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// or generate a router link with 'to' props"),
          /* @__PURE__ */ createTextVNode("\n    to"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'VBreadcrumb'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
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
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("dot"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("dot"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "with-icons"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$3(_ctx, _cache) {
  const _component_VBreadcrumb = _sfc_main$1;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$4
    ]),
    example: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "dot"
        }, null, 8, ["items"]),
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "dot",
          "with-icons": ""
        }, null, 8, ["items"])
      ])
    ]),
    default: withCtx(() => [
      _hoisted_1$4,
      _hoisted_2$4
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$3 = { "breadcrumb": [{ "label": "Vuero", "hideLabel": true, "icon": "feather:home", "link": "https://vuero.cssninja.io/" }, { "label": "Components", "icon": "feather:cpu", "to": { "name": "components" } }, { "label": "VBreadcrumb" }] };
const data$3 = () => ({ frontmatter: __matter$3 });
const __script$3 = { render: render$3, data: data$3 };
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "bullet-separator",
  tabindex: "-1"
}, "Bullet Separator", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Breadcrumb items can be separated by alternative separators. To display bullet breadcrumb separators, set the "),
  /* @__PURE__ */ createBaseVNode("code", null, "separator"),
  /* @__PURE__ */ createTextVNode(" prop to "),
  /* @__PURE__ */ createBaseVNode("code", null, "bullet"),
  /* @__PURE__ */ createTextVNode(". See markup for more details.")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" breadcrumb "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:home'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    hideLabel"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// use external links"),
          /* @__PURE__ */ createTextVNode("\n    link"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'https://vuero.cssninja.io/'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:cpu'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// or generate a router link with 'to' props"),
          /* @__PURE__ */ createTextVNode("\n    to"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'VBreadcrumb'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
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
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("bullet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("bullet"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "with-icons"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$2(_ctx, _cache) {
  const _component_VBreadcrumb = _sfc_main$1;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$3
    ]),
    example: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "bullet"
        }, null, 8, ["items"]),
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "bullet",
          "with-icons": ""
        }, null, 8, ["items"])
      ])
    ]),
    default: withCtx(() => [
      _hoisted_1$3,
      _hoisted_2$3
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$2 = { "breadcrumb": [{ "label": "Vuero", "hideLabel": true, "icon": "feather:home", "link": "https://vuero.cssninja.io/" }, { "label": "Components", "icon": "feather:cpu", "to": { "name": "components" } }, { "label": "VBreadcrumb" }] };
const data$2 = () => ({ frontmatter: __matter$2 });
const __script$2 = { render: render$2, data: data$2 };
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "arrow-separator",
  tabindex: "-1"
}, "Arrow Separator", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Breadcrumb items can be separated by alternative separators. To display arrow breadcrumb separators, set the "),
  /* @__PURE__ */ createBaseVNode("code", null, "separator"),
  /* @__PURE__ */ createTextVNode(" prop to "),
  /* @__PURE__ */ createBaseVNode("code", null, "arrow"),
  /* @__PURE__ */ createTextVNode(". See markup for more details.")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" breadcrumb "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Vuero'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    hideLabel"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:home'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// use external links"),
          /* @__PURE__ */ createTextVNode("\n    link"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'https://vuero.cssninja.io/'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:cpu'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// or generate a router link with 'to' props"),
          /* @__PURE__ */ createTextVNode("\n    to"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'VBreadcrumb'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
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
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("arrow"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "separator"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("arrow"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "with-icons"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$1(_ctx, _cache) {
  const _component_VBreadcrumb = _sfc_main$1;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$2
    ]),
    example: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "arrow"
        }, null, 8, ["items"]),
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          separator: "arrow",
          "with-icons": ""
        }, null, 8, ["items"])
      ])
    ]),
    default: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$1 = { "breadcrumb": [{ "label": "Vuero", "hideLabel": true, "icon": "feather:home", "link": "https://vuero.cssninja.io/" }, { "label": "Components", "icon": "feather:cpu", "to": { "name": "components" } }, { "label": "VBreadcrumb" }] };
const data$1 = () => ({ frontmatter: __matter$1 });
const __script$1 = { render: render$1, data: data$1 };
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "default-separator",
  tabindex: "-1"
}, "Default Separator", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero provides a "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VBreadcrumb />"),
  /* @__PURE__ */ createTextVNode(" component. Default breadcrumb items are separated by a slash sign. To show icons, use the "),
  /* @__PURE__ */ createBaseVNode("code", null, "with-icons"),
  /* @__PURE__ */ createTextVNode(" prop. You can also change the alignment by using the "),
  /* @__PURE__ */ createBaseVNode("code", null, "align"),
  /* @__PURE__ */ createTextVNode(" prop (possible values are "),
  /* @__PURE__ */ createBaseVNode("code", null, "center"),
  /* @__PURE__ */ createTextVNode(" and "),
  /* @__PURE__ */ createBaseVNode("code", null, "right"),
  /* @__PURE__ */ createTextVNode("). Pass an "),
  /* @__PURE__ */ createBaseVNode("strong", null, "Array"),
  /* @__PURE__ */ createTextVNode(" to the "),
  /* @__PURE__ */ createBaseVNode("code", null, "items"),
  /* @__PURE__ */ createTextVNode(" prop to render the component. See markup for more details about usage.")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" breadcrumb "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Vuero'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    hideLabel"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:home'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// use external links"),
          /* @__PURE__ */ createTextVNode("\n    link"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'https://vuero.cssninja.io/'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    icon"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'feather:cpu'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// or generate a router link with 'to' props"),
          /* @__PURE__ */ createTextVNode("\n    to"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'components'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'VBreadcrumb'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
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
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VBreadcrumb")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("breadcrumb"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "with-icons"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render(_ctx, _cache) {
  const _component_VBreadcrumb = _sfc_main$1;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$1
    ]),
    example: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb
        }, null, 8, ["items"]),
        createVNode(_component_VBreadcrumb, {
          items: _ctx.frontmatter.breadcrumb,
          "with-icons": ""
        }, null, 8, ["items"])
      ])
    ]),
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter = { "breadcrumb": [{ "label": "Vuero", "hideLabel": true, "icon": "feather:home", "link": "https://vuero.cssninja.io/" }, { "label": "Components", "icon": "feather:cpu", "to": { "name": "components" } }, { "label": "VBreadcrumb" }] };
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
    viewWrapper.setPageTitle("VBreadcrumb");
    useHead({
      title: "VBreadcrumb - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_BreadcrumbDefaultDocumentation = __script;
      const _component_BreadcrumbArrowDocumentation = __script$1;
      const _component_BreadcrumbBulletDocumentation = __script$2;
      const _component_BreadcrumbDotDocumentation = __script$3;
      const _component_BreadcrumbSucceedsDocumentation = __script$4;
      const _component_BreadcrumbPropsDocumentation = __script$5;
      const _component_BreadcrumbSlotsDocumentation = __script$6;
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
              label: "Components",
              to: { name: "components" }
            },
            {
              label: "VBreadcrumb",
              to: { name: "components-breadcrumb" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_BreadcrumbDefaultDocumentation),
            createVNode(_component_BreadcrumbArrowDocumentation),
            createVNode(_component_BreadcrumbBulletDocumentation),
            createVNode(_component_BreadcrumbDotDocumentation),
            createVNode(_component_BreadcrumbSucceedsDocumentation),
            createVNode(_component_BreadcrumbPropsDocumentation),
            createVNode(_component_BreadcrumbSlotsDocumentation)
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
