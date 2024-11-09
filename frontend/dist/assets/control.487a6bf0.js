import { u as useMarkdownToc, _ as __unplugin_components_4 } from "./useMarkdownToc.aa021ddc.js";
import { _ as __unplugin_components_1, a as _sfc_main$1 } from "./VBreadcrumb.f9c0002b.js";
import { o as openBlock, U as createBlock, w as withCtx, f as createBaseVNode, j as createTextVNode, d as defineComponent, e as ref, S as useHead, a as createElementBlock, h as createVNode, n as normalizeClass, m as unref, q as createCommentVNode } from "./vendor.4d9c5eda.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./index.e3db1ffa.js";
import "./VIcon.5f648d83.js";
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vcontrol-slots",
  tabindex: "-1"
}, "VControl Slots", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full slots available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VControl />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Slot"),
      /* @__PURE__ */ createBaseVNode("th", null, "Properties"),
      /* @__PURE__ */ createBaseVNode("th", null, "Description")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "#default"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-null" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "null")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "Control input content")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "#extra"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-null" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "null")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "Can be used to display extra content such as autocompletion items")
    ])
  ])
], -1);
function render$1(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2,
      _hoisted_3$2
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$1 = { "disable_code": true, "slimscroll": true };
const data$1 = () => ({ frontmatter: __matter$1 });
const __script$1 = { render: render$1, data: data$1 };
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vcontrol-props",
  tabindex: "-1"
}, "VControl Props", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full props available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VControl />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Props"),
      /* @__PURE__ */ createBaseVNode("th", null, "Default"),
      /* @__PURE__ */ createBaseVNode("th", null, "Type")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "icon"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "isValid"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "hasError"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "loading"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "expanded"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "textaddon"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "nogrow"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "subcontrol"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ])
  ])
], -1);
function render(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1,
      _hoisted_3$1
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter = { "disable_code": true, "slimscroll": true };
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
    viewWrapper.setPageTitle("VControl");
    useHead({
      title: "VControl - Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VControlPropsDocumentation = __script;
      const _component_VControlSlotsDocumentation = __script$1;
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
              label: "VControl",
              to: { name: "elements-control" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VControlPropsDocumentation),
            createVNode(_component_VControlSlotsDocumentation)
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
