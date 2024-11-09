import { u as useMarkdownToc, _ as __unplugin_components_4 } from "./useMarkdownToc.aa021ddc.js";
import { _ as __unplugin_components_1, a as _sfc_main$1 } from "./VBreadcrumb.f9c0002b.js";
import { o as openBlock, U as createBlock, w as withCtx, f as createBaseVNode, j as createTextVNode, d as defineComponent, e as ref, S as useHead, a as createElementBlock, h as createVNode, n as normalizeClass, m as unref, q as createCommentVNode } from "./vendor.4d9c5eda.js";
import { _ as _sfc_main$5 } from "./VAction.d6daabf4.js";
import { _ as __unplugin_components_2 } from "./WidgetDropdown.f8bffc93.js";
import { _ as _sfc_main$4 } from "./VIconButton.08d5808d.js";
import { _ as _sfc_main$3 } from "./VCardAction.4efbbd6c.js";
import { _ as _sfc_main$2 } from "./VTag.1bcb31d5.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./index.e3db1ffa.js";
import "./VIcon.5f648d83.js";
import "./VDropdown.88a14b17.js";
import "./useDropdown.49444a32.js";
import "./VBlock.d82c11a6.js";
import "./VAvatar.25d303d4.js";
import "./via-placeholder.9af8280d.js";
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vcardaction-slots",
  tabindex: "-1"
}, "VCardAction Slots", -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full slots available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VCardAction />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("table", null, [
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
      /* @__PURE__ */ createBaseVNode("td", null, "Main card content")
    ])
  ])
], -1);
function render$3(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$4,
      _hoisted_2$4,
      _hoisted_3$4
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$3 = { "disable_code": true, "slimscroll": true };
const data$3 = () => ({ frontmatter: __matter$3 });
const __script$3 = { render: render$3, data: data$3 };
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vcardaction-props",
  tabindex: "-1"
}, "VCardAction Props", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full props available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VCardAction />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("table", null, [
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
        /* @__PURE__ */ createTextVNode("title"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("strong", null, "required")
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("network"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("strong", null, "required")
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "facebook"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "twitter"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "linkedin"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "tumblr"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "github"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "dribbble"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "google-plus"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "youtube"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "reddit"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "invision"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "amazon"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "instagram")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "radius"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-string" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "regular")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("code", null, "regular"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "smooth"),
        /* @__PURE__ */ createTextVNode(", "),
        /* @__PURE__ */ createBaseVNode("code", null, "rounded")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "avatar"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "username"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "placeholder"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-string" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "https://via.placeholder.com/1280x960")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "shareLabel"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-string" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "Share")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "likeLabel"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-string" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "Like")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "string")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "hashtags"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "[]")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "Array<string>")
        ])
      ])
    ])
  ])
], -1);
function render$2(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$3,
      _hoisted_2$3,
      _hoisted_3$3
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$2 = { "disable_code": true, "slimscroll": true };
const data$2 = () => ({ frontmatter: __matter$2 });
const __script$2 = { render: render$2, data: data$2 };
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "content",
  tabindex: "-1"
}, "Content", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("You can add content inside the "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VCardAction />"),
  /* @__PURE__ */ createTextVNode(" component. It will act as any other component slot.")
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
          /* @__PURE__ */ createTextVNode("VCardAction")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "avatar"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("/demo/avatars/19.jpg"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "badge"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("/images/icons/flags/germany.svg"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Greta K."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "subtitle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Sales Manager"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#action"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VTag")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("green"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("trending"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("p")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At\n      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille\n      ridens.\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("p")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VCardAction")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$1(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$2
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
  id: "vcardaction",
  tabindex: "-1"
}, "VCardAction", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("The "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VCardAction />"),
  /* @__PURE__ */ createTextVNode(" component is a enhamcement and port to Vue of the classic bulma card component, a classy and easy way to display post-like content. The component has several props to pass in the content you want to display. Check the code example for more details.")
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
          /* @__PURE__ */ createTextVNode("VCardAction")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "avatar"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("/demo/avatars/19.jpg"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "badge"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("/images/icons/flags/germany.svg"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Greta K."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "subtitle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Sales Manager"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#action"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VTag")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("green"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("trending"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VCardAction")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_1;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$1
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
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "columns is-multiline mb-6" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "column is-4" };
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = { class: "columns is-multiline mb-6" };
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille ridens. ", -1);
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("View");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille ridens. ", -1);
const _hoisted_13 = { class: "column is-4" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille ridens. ", -1);
const _hoisted_15 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VCardAction");
    useHead({
      title: "VCardAction - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VCardActionDocumentation = __script;
      const _component_VTag = _sfc_main$2;
      const _component_VCardAction = _sfc_main$3;
      const _component_VIconButton = _sfc_main$4;
      const _component_WidgetDropdown = __unplugin_components_2;
      const _component_VCardActionContentDocumentation = __script$1;
      const _component_VAction = _sfc_main$5;
      const _component_VCardActionPropsDocumentation = __script$2;
      const _component_VCardActionSlotsDocumentation = __script$3;
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
              label: "VCardAction",
              to: { name: "components-card-action" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VCardActionDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_VCardAction, {
                  avatar: "/demo/avatars/19.jpg",
                  badge: "/images/icons/flags/germany.svg",
                  title: "Greta K.",
                  subtitle: "Sales Manager"
                }, {
                  action: withCtx(() => [
                    createVNode(_component_VTag, {
                      color: "green",
                      label: "trending",
                      rounded: ""
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VCardAction, {
                  avatar: "/demo/avatars/18.jpg",
                  badge: "/images/icons/flags/united-states-of-america.svg",
                  title: "George W.",
                  subtitle: "Software Engineer"
                }, {
                  action: withCtx(() => [
                    createVNode(_component_VIconButton, {
                      icon: "feather:heart",
                      circle: ""
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_VCardAction, {
                  avatar: "/demo/avatars/22.jpg",
                  badge: "/images/icons/flags/france.svg",
                  title: "Sandrine C.",
                  subtitle: "HR Manager",
                  radius: "rounded"
                }, {
                  action: withCtx(() => [
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(_component_VCardActionContentDocumentation),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_VCardAction, {
                  avatar: "/demo/avatars/19.jpg",
                  badge: "/images/icons/flags/germany.svg",
                  title: "Greta K.",
                  subtitle: "Sales Manager"
                }, {
                  action: withCtx(() => [
                    createVNode(_component_VTag, {
                      color: "green",
                      label: "trending",
                      rounded: ""
                    })
                  ]),
                  default: withCtx(() => [
                    _hoisted_9
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VCardAction, {
                  avatar: "/demo/avatars/18.jpg",
                  badge: "/images/icons/flags/united-states-of-america.svg",
                  title: "George W.",
                  subtitle: "Software Engineer"
                }, {
                  action: withCtx(() => [
                    createVNode(_component_VAction, null, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_VCardAction, {
                  avatar: "/demo/avatars/22.jpg",
                  badge: "/images/icons/flags/france.svg",
                  title: "Sandrine C.",
                  subtitle: "HR Manager",
                  radius: "rounded"
                }, {
                  action: withCtx(() => [
                    createVNode(_component_WidgetDropdown)
                  ]),
                  default: withCtx(() => [
                    _hoisted_14
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(_component_VCardActionPropsDocumentation),
            createVNode(_component_VCardActionSlotsDocumentation)
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_15, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
