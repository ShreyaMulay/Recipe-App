import { u as useMarkdownToc, _ as __unplugin_components_4 } from "./useMarkdownToc.aa021ddc.js";
import { _ as __unplugin_components_1, a as _sfc_main$4 } from "./VBreadcrumb.f9c0002b.js";
import { o as openBlock, U as createBlock, w as withCtx, f as createBaseVNode, j as createTextVNode, h as createVNode, d as defineComponent, e as ref, S as useHead, a as createElementBlock, n as normalizeClass, m as unref, q as createCommentVNode } from "./vendor.4d9c5eda.js";
import { _ as _sfc_main$2 } from "./VAvatarStack.3dad334b.js";
import { _ as _sfc_main$1 } from "./VPlaceloadAvatar.29c32982.js";
import { h as _sfc_main$3 } from "./index.e3db1ffa.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./VIcon.5f648d83.js";
import "./VAvatar.25d303d4.js";
import "./via-placeholder.9af8280d.js";
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vplaceloadavatar-props",
  tabindex: "-1"
}, "VPlaceloadAvatar Props", -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full props available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VPlaceloadAvatar />"),
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
      /* @__PURE__ */ createBaseVNode("td", null, "size"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "small"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "medium"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "large"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "big"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "xl")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "rounded"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-string" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "full")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "full"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "xs"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "sm"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "md"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "lg"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "xl")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "width"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-string" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "100%")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "disabled"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "centered"),
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
  id: "radius",
  tabindex: "-1"
}, "Radius", -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Control the radius of "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VPlaceloadAvatar />"),
  /* @__PURE__ */ createTextVNode(" component to match your interface. You can set the "),
  /* @__PURE__ */ createBaseVNode("code", null, "rounded"),
  /* @__PURE__ */ createTextVNode(" properties according your needs")
], -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
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
          /* @__PURE__ */ createTextVNode("VAvatarStack")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("xs"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("sm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("md"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("lg"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("xl"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VAvatarStack")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$3(_ctx, _cache) {
  const _component_VPlaceloadAvatar = _sfc_main$1;
  const _component_VAvatarStack = _sfc_main$2;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$4
    ]),
    example: withCtx(() => [
      createVNode(_component_VAvatarStack, null, {
        default: withCtx(() => [
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            rounded: "xs"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            rounded: "sm"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            rounded: "md"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            rounded: "lg"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            rounded: "xl"
          }),
          createVNode(_component_VPlaceloadAvatar, { class: "mx-1" })
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
const __matter$3 = {};
const data$3 = () => ({ frontmatter: __matter$3 });
const __script$3 = { render: render$3, data: data$3 };
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "size",
  tabindex: "-1"
}, "Size", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Control the size of "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VPlaceloadAvatar />"),
  /* @__PURE__ */ createTextVNode(" component to match your interface. You can set the "),
  /* @__PURE__ */ createBaseVNode("code", null, "size"),
  /* @__PURE__ */ createTextVNode(" properties according your needs")
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
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
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "flex-wrap"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrap"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "align-items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("flex-end"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "row-gap"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode(".5rem"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "column-gap"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode(".25rem"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("small"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("medium"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("large"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("big"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("xl"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlex")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$2(_ctx, _cache) {
  const _component_VPlaceloadAvatar = _sfc_main$1;
  const _component_VFlex = _sfc_main$3;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$3
    ]),
    example: withCtx(() => [
      createVNode(_component_VFlex, {
        "flex-wrap": "wrap",
        "align-items": "flex-end",
        "row-gap": ".5rem",
        "column-gap": ".25rem"
      }, {
        default: withCtx(() => [
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            size: "small"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            size: "medium"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            size: "large"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            size: "big"
          }),
          createVNode(_component_VPlaceloadAvatar, {
            class: "mx-1",
            size: "xl"
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
const __matter$2 = {};
const data$2 = () => ({ frontmatter: __matter$2 });
const __script$2 = { render: render$2, data: data$2 };
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "wrapping",
  tabindex: "-1"
}, "Wrapping", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("You can set multiple "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VPlaceloadAvatar />"),
  /* @__PURE__ */ createTextVNode(" on a row. Simply wrap them in "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VAvatarStack />")
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
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
          /* @__PURE__ */ createTextVNode("VAvatarStack")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VAvatarStack")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$1(_ctx, _cache) {
  const _component_VPlaceloadAvatar = _sfc_main$1;
  const _component_VAvatarStack = _sfc_main$2;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$2
    ]),
    example: withCtx(() => [
      createVNode(_component_VAvatarStack, null, {
        default: withCtx(() => [
          createVNode(_component_VPlaceloadAvatar, { class: "mx-1" }),
          createVNode(_component_VPlaceloadAvatar, { class: "mx-1" }),
          createVNode(_component_VPlaceloadAvatar, { class: "mx-1" })
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
const __matter$1 = {};
const data$1 = () => ({ frontmatter: __matter$1 });
const __script$1 = { render: render$1, data: data$1 };
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vplaceloadavatar",
  tabindex: "-1"
}, "VPlaceloadAvatar", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero provides a "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VPlaceloadAvatar />"),
  /* @__PURE__ */ createTextVNode(" component to display avatar skeleton while loading. Check the markup for more details.")
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
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
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
        ]),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render(_ctx, _cache) {
  const _component_VPlaceloadAvatar = _sfc_main$1;
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$1
    ]),
    example: withCtx(() => [
      createVNode(_component_VPlaceloadAvatar)
    ]),
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter = {};
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
    viewWrapper.setPageTitle("VPlaceloadAvatar");
    useHead({
      title: "VPlaceloadAvatar - Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$4;
      const _component_PlaceloadAvatarBaseDocumentation = __script;
      const _component_PlaceloadAvatarWrapDocumentation = __script$1;
      const _component_PlaceloadAvatarSizeDocumentation = __script$2;
      const _component_PlaceloadAvatarRadiusDocumentation = __script$3;
      const _component_PlaceloadAvatarPropsDocumentation = __script$4;
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
              label: "VPlaceloadAvatar",
              to: { name: "elements-placeload-avatar" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_PlaceloadAvatarBaseDocumentation),
            createVNode(_component_PlaceloadAvatarWrapDocumentation),
            createVNode(_component_PlaceloadAvatarSizeDocumentation),
            createVNode(_component_PlaceloadAvatarRadiusDocumentation),
            createVNode(_component_PlaceloadAvatarPropsDocumentation)
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
