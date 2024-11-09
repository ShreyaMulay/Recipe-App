import { u as useMarkdownToc, _ as __unplugin_components_4 } from "./useMarkdownToc.aa021ddc.js";
import { _ as __unplugin_components_1, a as _sfc_main$1 } from "./VBreadcrumb.f9c0002b.js";
import { o as openBlock, U as createBlock, w as withCtx, f as createBaseVNode, j as createTextVNode, d as defineComponent, e as ref, S as useHead, a as createElementBlock, h as createVNode, n as normalizeClass, m as unref, q as createCommentVNode } from "./vendor.4d9c5eda.js";
import { m as useThemeColors, k as _sfc_main$3 } from "./index.e3db1ffa.js";
import { r as radar, _ as _sfc_main$2 } from "./VBillboardJS.71dfa111.js";
import { s as splineSimple } from "./splineSimple.f53c1d5d.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./VIcon.5f648d83.js";
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vbillboardjs-props",
  tabindex: "-1"
}, "VBillboardJS Props", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Here is the full props available for "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VBillboardJS />"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Props"),
      /* @__PURE__ */ createBaseVNode("th", null, "Default"),
      /* @__PURE__ */ createBaseVNode("th", null, "Type")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "options"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "{}")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("a", { href: "https://naver.github.io/billboard.js/release/latest/doc/Options.html" }, "Billboard.js Options")
      ])
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
  id: "vbillboardjs",
  tabindex: "-1"
}, "VBillboardJS", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero ships with the "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VBillboardJS />"),
  /* @__PURE__ */ createTextVNode(" component, a custom vue3 wrapper for the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://naver.github.io/billboard.js/" }, "billboard.js"),
  /* @__PURE__ */ createTextVNode(" library."),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" Check the code for more details.")
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
          /* @__PURE__ */ createTextVNode(" radar "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'billboard.js'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" useThemeColors "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'/@src/composable/useThemeColors'"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" themeColors "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "useThemeColors"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" billboardJsOptions "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    x"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'x'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    columns"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'x'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Data A'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Data B'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Data C'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Data D'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Data E'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'data1'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "330"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "350"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "200"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "380"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "150"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'data2'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "130"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "100"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "30"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "200"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "80"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'data3'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "230"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "153"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "85"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "300"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "250"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    colors"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      data1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" themeColors"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("accent"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      data2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" themeColors"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      data3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" themeColors"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("info"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      data4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" themeColors"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("purple"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "radar"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    labels"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  radar"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    axis"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      max"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "400"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    level"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      depth"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    direction"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      clockwise"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  size"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    height"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "280"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  padding"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    bottom"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "20"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  title"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    text"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Radar Chart'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    position"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'top-left'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    padding"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      bottom"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "20"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      right"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "20"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      top"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      left"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "20"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  legend"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    position"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'inset'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
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
          /* @__PURE__ */ createTextVNode("VBillboardJS")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":options"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("billboardJsOptions"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "54"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "55"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "56"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "57"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "58"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "59"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "60"),
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
const __matter = { "state": { "flipped": false } };
const data = () => ({ frontmatter: __matter });
const __script = { render, data };
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "columns is-mutliline" };
const _hoisted_4 = { class: "column is-6" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const themeColors = useThemeColors();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VBillboardJS");
    useHead({
      title: "VBillboardJS - Plugins - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VBillboardJsDocumentation = __script;
      const _component_VBillboardJS = _sfc_main$2;
      const _component_VCard = _sfc_main$3;
      const _component_VBillboardJsPropsDocumentation = __script$1;
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
              label: "Plugins"
            },
            {
              label: "VBillboardJS",
              to: { name: "components-plugins-billboard-js" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VBillboardJsDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_VCard, null, {
                  default: withCtx(() => [
                    createVNode(_component_VBillboardJS, {
                      options: {
                        data: {
                          x: "x",
                          columns: [
                            ["x", "Data A", "Data B", "Data C", "Data D", "Data E"],
                            ["data1", 330, 350, 200, 380, 150],
                            ["data2", 130, 100, 30, 200, 80],
                            ["data3", 230, 153, 85, 300, 250]
                          ],
                          colors: {
                            data1: unref(themeColors).accent,
                            data2: unref(themeColors).primary,
                            data3: unref(themeColors).info,
                            data4: unref(themeColors).purple
                          },
                          type: unref(radar)(),
                          labels: true
                        },
                        radar: {
                          axis: {
                            max: 400
                          },
                          level: {
                            depth: 4
                          },
                          direction: {
                            clockwise: true
                          }
                        },
                        size: {
                          height: 280
                        },
                        padding: {
                          bottom: 20
                        },
                        title: {
                          text: "Radar Chart",
                          position: "left",
                          padding: {
                            bottom: 20,
                            right: 20,
                            top: 0,
                            left: 20
                          }
                        },
                        legend: {
                          position: "inset"
                        }
                      }
                    }, null, 8, ["options"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VCard, { type: "smooth" }, {
                  default: withCtx(() => [
                    createVNode(_component_VBillboardJS, {
                      options: unref(splineSimple).options
                    }, null, 8, ["options"])
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(_component_VBillboardJsPropsDocumentation)
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
