import { b as _sfc_main$8, _ as _sfc_main$h, c as _sfc_main$i } from "./VFlexTable.b0071d7f.js";
import { o as useApi, p as _imports_0, q as _imports_1, e as __unplugin_components_1$1, f as _sfc_main$3, h as _sfc_main$4, l as __unplugin_components_7, k as _sfc_main$f, d as _sfc_main$g } from "./index.e3db1ffa.js";
import { d as defineComponent, s as useCssVars, o as openBlock, a as createElementBlock, r as renderSlot, U as createBlock, w as withCtx, f as createBaseVNode, j as createTextVNode, K as useMediaQuery, S as useHead, e as ref, y as reactive, h as createVNode, m as unref, D as withDirectives, E as vModelText, aF as vModelSelect, q as createCommentVNode, F as Fragment, l as renderList, t as toDisplayString, b as useRouter, ak as useRoute, v as computed } from "./vendor.4d9c5eda.js";
import { _ as _sfc_main$e } from "./VTags.c00a776b.js";
import { _ as _sfc_main$d } from "./VTag.1bcb31d5.js";
import { _ as _sfc_main$c } from "./VAction.d6daabf4.js";
import { _ as __unplugin_components_6 } from "./VTextEllipsis.93f473d7.js";
import { _ as _sfc_main$b } from "./VAvatar.25d303d4.js";
import { _ as _sfc_main$a } from "./VProgress.3b664865.js";
import { _ as _sfc_main$9 } from "./VPlaceholderSection.90e3a306.js";
import { _ as _sfc_main$7 } from "./VPlaceloadText.e2aceeab.js";
import { _ as _sfc_main$6 } from "./VPlaceloadAvatar.29c32982.js";
import { _ as _sfc_main$5 } from "./VFlexPagination.bf3f4684.js";
import { _ as __unplugin_components_1, a as _sfc_main$2 } from "./VBreadcrumb.f9c0002b.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import "./via-placeholder.9af8280d.js";
import "./VIcon.5f648d83.js";
var VFlexItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "v-flex-item" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    order: { default: 0 },
    flexGrow: { default: 0 },
    flexShrink: { default: 0 },
    flexBasis: { default: "auto" },
    alignSelf: { default: "auto" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "2ff03aec": props.order,
      "7990c964": props.flexGrow,
      "30a71af8": props.flexShrink,
      "b924a73a": props.flexBasis,
      "7713848f": props.alignSelf
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "async-data-fetching-(advanced)",
  tabindex: "-1"
}, "Async data fetching (advanced)", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Most of the time, the data need to be fetched asynchronously from the server. Thankfully, the "),
  /* @__PURE__ */ createBaseVNode("code", null, "data"),
  /* @__PURE__ */ createTextVNode(" property of "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VFlexTableWrapper />"),
  /* @__PURE__ */ createTextVNode(" component can accept an "),
  /* @__PURE__ */ createBaseVNode("strong", null, "async function"),
  /* @__PURE__ */ createTextVNode(" that will be triggered each time one of the sorting, filtering or pagination properties change. Check the markup for more details about usage.")
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
          /* @__PURE__ */ createTextVNode(" reactive"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" computed "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue'"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" useRoute"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" useRouter "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue-router'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(" type "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" VFlexTableWrapperDataResolver "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'/@src/components/base/table/VFlexTableWrapper.vue'"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" useApi "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'/@src/composable/useApi'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// the total data will be set by the fetchData function"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" total "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, `// we don't have to set "searchable" parameter`),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// this will be handled by the fetchData function"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" columns "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Username'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    media"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    grow"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    sortable"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  location"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Location'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    sortable"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  position"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Positions'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    sortable"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "true"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  actions"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    label"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "''"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    align"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'end'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "as"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// this is an example of useXxx function that we can reuse across components."),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// it will return writable computeds that works like ref values"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// but the values will be sync with the route query params"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "function"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "useQueryParam"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" router "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "useRouter"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" route "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "useRoute"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// when the params match those value,"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// we don't set their value to the query params"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" defaultSearch "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "''"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" defaultSort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "''"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" defaultLimit "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "10"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" defaultPage "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" searchTerm "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "computed"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function-variable prism--function" }, "get"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "=>"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "let"),
          /* @__PURE__ */ createTextVNode(" searchTermQuery"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" string\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// read "search" from the query params'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("Array"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "isArray"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("search"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        searchTermQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("search"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(" defaultSearch\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "else"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        searchTermQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("search "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(" defaultSearch\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(" searchTermQuery\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "set"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// update the route query params with our new "search" value.'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// we can use router.replace instead of router.push"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// to not write state to the browser history"),
          /* @__PURE__ */ createTextVNode("\n      router"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "push"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n          search"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSearch "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultLimit "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultPage "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n        "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" sort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "computed"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function-variable prism--function" }, "get"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "=>"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "let"),
          /* @__PURE__ */ createTextVNode(" sortQuery"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" string\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// read "sort" from the query params'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("Array"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "isArray"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        sortQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(" defaultSort\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "else"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        sortQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("sort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(" defaultSort\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(" sortQuery\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "set"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// update the route query params with our new "sort" value.'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// we can use router.replace instead of router.push"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// to not write state to the browser history"),
          /* @__PURE__ */ createTextVNode("\n      router"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "push"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n          search"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSearch "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultLimit "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultPage "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n        "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" limit "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "computed"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function-variable prism--function" }, "get"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "=>"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "let"),
          /* @__PURE__ */ createTextVNode(" limitQuery"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" number\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// read "limit" from the query params'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("Array"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "isArray"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        limitQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "parseInt"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("defaultLimit"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "else"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        limitQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "parseInt"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("limit "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("defaultLimit"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("limitQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "NaN"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        limitQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" defaultLimit\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(" limitQuery\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "set"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// update the route query params with our new "limit" value.'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// we can use router.replace instead of router.push"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// to not write state to the browser history"),
          /* @__PURE__ */ createTextVNode("\n      router"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "push"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n          search"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSearch "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultLimit "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultPage "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n        "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" page "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "computed"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function-variable prism--function" }, "get"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "=>"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "let"),
          /* @__PURE__ */ createTextVNode(" pageQuery"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" number\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("Array"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "isArray"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?."),
          /* @__PURE__ */ createTextVNode("page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        pageQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "parseInt"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("defaultPage"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "else"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        pageQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "parseInt"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("page "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "??"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("defaultPage"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// read "page" from the query params'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("pageQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "NaN"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        pageQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" defaultPage\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(" pageQuery\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "set"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// update the route query params with our new "page" value.'),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// we can use router.replace instead of router.push"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// to not write state to the browser history"),
          /* @__PURE__ */ createTextVNode("\n      router"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "push"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n        query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n          search"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSearch "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultSort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultLimit "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n          page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" defaultPage "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n        "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "reactive"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" queryParam "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "useQueryParam"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// the fetchData function will be called each time one of the parameter changes"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" api "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "useApi"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" fetchData"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function-variable prism--function" }, "VFlexTableWrapperDataResolver"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "async"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--parameter" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n  searchTerm"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n  start"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n  limit"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n  sort"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n  controller"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "=>"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// searchTerm will contains the value of the wrapperState.searchInput"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// the update will be debounced to avoid to much requests"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" searchQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" searchTerm "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "?"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "&q="),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("searchTerm"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "''"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "let"),
          /* @__PURE__ */ createTextVNode(" sortQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "''"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, '// sort will be a string like "name:asc"'),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("sort "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "&&"),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "includes"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "':'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "let"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("sortField"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" sortOrder"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "split"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "':'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n    sortQuery "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "&_sort="),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("sortField"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "&_order="),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("sortOrder"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// async fetch data to our server"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" users"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" headers "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "await"),
          /* @__PURE__ */ createTextVNode(" api"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "get"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "/api/users?_start="),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("start"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "&_limit="),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("limit"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("searchQuery"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("sortQuery"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// controller is an instance of AbortController,"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// this allow to abort the request when the state"),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// is invalidated (before fetchData will be retriggered)"),
          /* @__PURE__ */ createTextVNode("\n      signal"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(" controller"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("signal"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// wait more time"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "await"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "sleep"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1000"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// our backend send us the count in the headers,"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// but we can also get it from another request"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'x-total-count'"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "in"),
          /* @__PURE__ */ createTextVNode(" headers"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    total"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "parseInt"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("headers"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'x-total-count'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// the return of the function must be an array"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(" users\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// those data are for the interaction example"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" openedRowId "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "<"),
          /* @__PURE__ */ createTextVNode("number"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ">"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "function"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "onRowClick"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--parameter" }, [
            /* @__PURE__ */ createTextVNode("row"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
            /* @__PURE__ */ createTextVNode(" any")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("openedRowId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" row"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    openedRowId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "else"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    openedRowId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" row"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("id\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" incomingCallerId "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" ref"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "<"),
          /* @__PURE__ */ createTextVNode("number"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ">"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "function"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "onCallClick"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--parameter" }, [
            /* @__PURE__ */ createTextVNode("row"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
            /* @__PURE__ */ createTextVNode(" any")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "==="),
          /* @__PURE__ */ createTextVNode(" row"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "undefined"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "else"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("value "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" row"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("id\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
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
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!-- \n    We use v-model to let VFlexTableWrapper update queryParam\n  -->"),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexTableWrapper")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--namespace" }, "v-model:"),
          /* @__PURE__ */ createTextVNode("page")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("queryParam.page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--namespace" }, "v-model:"),
          /* @__PURE__ */ createTextVNode("limit")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("queryParam.limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--namespace" }, "v-model:"),
          /* @__PURE__ */ createTextVNode("searchTerm")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("queryParam.searchTerm"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--namespace" }, "v-model:"),
          /* @__PURE__ */ createTextVNode("sort")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("queryParam.sort"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":columns"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("columns"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":data"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("fetchData"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":total"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("total"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mt-4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!-- \n      Here we retrieve the internal wrapperState. \n      Note that we can not destructure it \n    -->"),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#default"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!--Table Pagination-->"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexPagination")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--namespace" }, "v-model:"),
          /* @__PURE__ */ createTextVNode("current-page")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":item-per-page"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":total-items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.total"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":max-links-displayed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "no-router"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!-- The controls can be updated anywhere in the slot -->"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#before-pagination"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mr-4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "icon"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("feather:search"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("input")
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.searchInput"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "type"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("text"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("input is-rounded"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "placeholder"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("Filter..."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#before-navigation"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mr-4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("select is-rounded"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("select")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("1 results per page"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("10"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("10 results per page"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("15"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("15 results per page"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("25"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("25 results per page"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("50"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("50 results per page"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("option")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("select")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VControl")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VField")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexPagination")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexTable")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "rounded"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "clickable"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "@row-click"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("onRowClick"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#body"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!--\n            The wrapperState.loading will be update \n            when the fetchData function is running \n          -->"),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.loading"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("flex-list-inner"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-for"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("key in wrapperState.limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":key"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("key"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("flex-table-item"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":column"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("{ grow: true, media: true }"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadAvatar")
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
      /* @__PURE__ */ createTextVNode("\n\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceloadText")
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":lines"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("60%"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "last-line-width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("20%"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mx-2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceload")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("60%"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
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
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceload")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("60%"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
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
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":column"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("{ align: "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode("end"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode(" }"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceload")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("45%"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
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
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexTableCell")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!-- This is the empty state -->"),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-else-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.data.length === 0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("flex-list-inner"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VPlaceholderSection")
        ]),
        /* @__PURE__ */ createTextVNode("\n              "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("No matches"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n              "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "subtitle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("There is no data that match your query."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n              "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("my-6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#image"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("light-image"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("/@src/assets/illustrations/placeholders/search-4.svg"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "alt"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("img")
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("dark-image"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "src"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("/@src/assets/illustrations/placeholders/search-4-dark.svg"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "alt"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VPlaceholderSection")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!-- We can inject content before any rows -->"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#body-row-pre"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("{ row }"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.id === incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VProgress")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("tiny"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("m-0 mb-1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!-- This is the body cell slot -->"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#body-cell"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("{ row, column }"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("column.key === "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode("name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VAvatar")
        ]),
        /* @__PURE__ */ createTextVNode("\n              "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("medium"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n              "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":picture"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.pic"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n              "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":badge"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.badge"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n              "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":initials"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.initials"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("span")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("dark-text"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("{{ row.name }}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("span")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VTextEllipsis")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("280px"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("light-text"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                {{ row.bio }}\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VTextEllipsis")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("column.key === "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode("actions"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VAction")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              {{ row.id === openedRowId ? 'Hide details' : 'View details' }}\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VAction")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!-- We can also inject content after rows -->"),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "#body-row-post"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("{ row }"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.id === incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VTags")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mt-2 mb-0"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
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
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "outlined"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("i")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("iconify is-inline mr-2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "data-icon"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("feather:send"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("i")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                Calling...\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VTag")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VTags")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.id === openedRowId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("is-block p-4 my-2 is-rounded"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("dark-text mb-4 is-size-4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("{{ row.name }}'s details"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "justify-content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("space-between"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexItem")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VCard")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("pre")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("code")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("{{ row }}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("code")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("pre")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VCard")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexItem")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexItem")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "align-self"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("flex-end"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "flex-direction"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("column"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VButton")
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.id === incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mb-2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("danger"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "@click"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("() => onCallClick(row)"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("i")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("iconify is-inline mr-2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "data-icon"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("feather:phone-off"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("i")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                      Cancel call\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VButton")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VButton")
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "outlined"),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":disabled"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.id === incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":loading"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row.id === incomingCallerId"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "@click"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("() => onCallClick(row)"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n                    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("i")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("iconify is-inline mr-2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "data-icon"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("feather:phone"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("i")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                      Call {{ row.name }}\n                    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VButton")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n                "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexItem")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n              "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlex")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n            "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VFlexTable")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "<!--Table Pagination-->"),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexPagination")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--namespace" }, "v-model:"),
          /* @__PURE__ */ createTextVNode("current-page")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.page"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("mt-5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":item-per-page"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.limit"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":total-items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("wrapperState.total"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":max-links-displayed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "no-router"),
        /* @__PURE__ */ createTextVNode("\n      "),
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
          /* @__PURE__ */ createTextVNode("VFlexTableWrapper")
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "61"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "62"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "63"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "64"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "65"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "66"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "67"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "68"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "69"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "70"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "71"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "72"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "73"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "74"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "75"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "76"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "77"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "78"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "79"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "80"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "81"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "82"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "83"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "84"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "85"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "86"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "87"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "88"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "89"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "90"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "91"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "92"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "93"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "94"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "95"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "96"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "97"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "98"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "99"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "100"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "101"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "102"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "103"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "104"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "105"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "106"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "107"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "108"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "109"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "110"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "111"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "112"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "113"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "114"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "115"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "116"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "117"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "118"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "119"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "120"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "121"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "122"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "123"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "124"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "125"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "126"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "127"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "128"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "129"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "130"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "131"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "132"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "133"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "134"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "135"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "136"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "137"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "138"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "139"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "140"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "141"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "142"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "143"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "144"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "145"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "146"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "147"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "148"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "149"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "150"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "151"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "152"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "153"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "154"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "155"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "156"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "157"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "158"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "159"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "160"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "161"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "162"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "163"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "164"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "165"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "166"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "167"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "168"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "169"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "170"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "171"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "172"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "173"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "174"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "175"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "176"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "177"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "178"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "179"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "180"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "181"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "182"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "183"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "184"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "185"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "186"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "187"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "188"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "189"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "190"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "191"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "192"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "193"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "194"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "195"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "196"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "197"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "198"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "199"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "200"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "201"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "202"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "203"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "204"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "205"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "206"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "207"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "208"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "209"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "210"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "211"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "212"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "213"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "214"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "215"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "216"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "217"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "218"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "219"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "220"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "221"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "222"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "223"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "224"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "225"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "226"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "227"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "228"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "229"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "230"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "231"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "232"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "233"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "234"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "235"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "236"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "237"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "238"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "239"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "240"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "241"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "242"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "243"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "244"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "245"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "246"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "247"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "248"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "249"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "250"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "251"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "252"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "253"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "254"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "255"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "256"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "257"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "258"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "259"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "260"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "261"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "262"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "263"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "264"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "265"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "266"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "267"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "268"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "269"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "270"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "271"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "272"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "273"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "274"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "275"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "276"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "277"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "278"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "279"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "280"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "281"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "282"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "283"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "284"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "285"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "286"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "287"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "288"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "289"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "290"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "291"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "292"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "293"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "294"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "295"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "296"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "297"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "298"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "299"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "300"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "301"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "302"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "303"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "304"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "305"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "306"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "307"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "308"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "309"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "310"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "311"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "312"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "313"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "314"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "315"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "316"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "317"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "318"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "319"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "320"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "321"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "322"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "323"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "324"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "325"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "326"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "327"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "328"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "329"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "330"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "331"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "332"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "333"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "334"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "335"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "336"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "337"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "338"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "339"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "340"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "341"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "342"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "343"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "344"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "345"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "346"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "347"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "348"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "349"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "350"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "351"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "352"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "353"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "354"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "355"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "356"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "357"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "358"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "359"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "360"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "361"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "362"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "363"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "364"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "365"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "366"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "367"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "368"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "369"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "370"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "371"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "372"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "373"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "374"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "375"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "376"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "377"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "378"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "379"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "380"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "381"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "382"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "383"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "384"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "385"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "386"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "387"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "388"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "389"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "390"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "391"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "392"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "393"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "394"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "395"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "396"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "397"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "398"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "399"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "400"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "401"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "402"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "403"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "404"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "405"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "406"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "407"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "408"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "409"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "410"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "411"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "412"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "413"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "414"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "415"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "416"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "417"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "418"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "419"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "420"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "421"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "422"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "423"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "424"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "425"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "426"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "427"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "428"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "429"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "430"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "431"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "432"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "433"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "434"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "435"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "436"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "437"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "438"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "439"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "440"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "441"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "442"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "443"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "444"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "445"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "446"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "447"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "448"),
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
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = ["onUpdate:modelValue"];
const _hoisted_5 = { class: "select is-rounded" };
const _hoisted_6 = ["onUpdate:modelValue"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("option", { value: 1 }, "1 results per page", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("option", { value: 10 }, "10 results per page", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("option", { value: 15 }, "15 results per page", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("option", { value: 25 }, "25 results per page", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("option", { value: 50 }, "50 results per page", -1);
const _hoisted_12 = [
  _hoisted_7,
  _hoisted_8,
  _hoisted_9,
  _hoisted_10,
  _hoisted_11
];
const _hoisted_13 = {
  key: 0,
  class: "flex-list-inner"
};
const _hoisted_14 = {
  key: 1,
  class: "flex-list-inner"
};
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_17 = { class: "dark-text" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify is-inline mr-2",
  "data-icon": "feather:send"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Calling... ");
const _hoisted_20 = {
  key: 1,
  class: "is-block p-4 my-2 is-rounded"
};
const _hoisted_21 = { class: "dark-text mb-4 is-size-4" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify is-inline mr-2",
  "data-icon": "feather:phone-off"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Cancel call ");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify is-inline mr-2",
  "data-icon": "feather:phone"
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isMobileScreen = useMediaQuery("(max-width: 767px)");
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Async data (advanced)");
    useHead({
      title: "Async data (advanced) - VFlexTableWrapper - Vuero"
    });
    const total = ref(0);
    const columns = {
      name: {
        label: "Username",
        media: true,
        grow: true,
        sortable: true
      },
      location: {
        label: "Location",
        sortable: true
      },
      position: {
        label: "Positions",
        sortable: true
      },
      actions: {
        label: "",
        align: "end"
      }
    };
    function useQueryParam() {
      const router = useRouter();
      const route = useRoute();
      const defaultSearch = "";
      const defaultSort = "";
      const defaultLimit = 10;
      const defaultPage = 1;
      const searchTerm = computed({
        get: () => {
          var _a, _b, _c, _d;
          let searchTermQuery;
          if (Array.isArray((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.search)) {
            searchTermQuery = (_c = (_b = route.query.search) == null ? void 0 : _b[0]) != null ? _c : defaultSearch;
          } else {
            searchTermQuery = (_d = route.query.search) != null ? _d : defaultSearch;
          }
          return searchTermQuery;
        },
        set(value) {
          router.push({
            query: {
              search: value === defaultSearch ? void 0 : value,
              sort: sort.value === defaultSort ? void 0 : sort.value,
              limit: limit.value === defaultLimit ? void 0 : limit.value,
              page: page.value === defaultPage ? void 0 : page.value
            }
          });
        }
      });
      const sort = computed({
        get: () => {
          var _a, _b, _c, _d;
          let sortQuery;
          if (Array.isArray((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.sort)) {
            sortQuery = (_c = (_b = route.query.sort) == null ? void 0 : _b[0]) != null ? _c : defaultSort;
          } else {
            sortQuery = (_d = route.query.sort) != null ? _d : defaultSort;
          }
          return sortQuery;
        },
        set(value) {
          router.push({
            query: {
              search: searchTerm.value === defaultSearch ? void 0 : searchTerm.value,
              sort: value === defaultSort ? void 0 : value,
              limit: limit.value === defaultLimit ? void 0 : limit.value,
              page: page.value === defaultPage ? void 0 : page.value
            }
          });
        }
      });
      const limit = computed({
        get: () => {
          var _a, _b, _c;
          let limitQuery;
          if (Array.isArray((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.limit)) {
            limitQuery = parseInt((_b = route.query.limit[0]) != null ? _b : `${defaultLimit}`);
          } else {
            limitQuery = parseInt((_c = route.query.limit) != null ? _c : `${defaultLimit}`);
          }
          if (limitQuery === NaN) {
            limitQuery = defaultLimit;
          }
          return limitQuery;
        },
        set(value) {
          router.push({
            query: {
              search: searchTerm.value === defaultSearch ? void 0 : searchTerm.value,
              sort: sort.value === defaultSort ? void 0 : sort.value,
              limit: value === defaultLimit ? void 0 : value,
              page: page.value === defaultPage ? void 0 : page.value
            }
          });
        }
      });
      const page = computed({
        get: () => {
          var _a, _b, _c;
          let pageQuery;
          if (Array.isArray((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.page)) {
            pageQuery = parseInt((_b = route.query.page[0]) != null ? _b : `${defaultPage}`);
          } else {
            pageQuery = parseInt((_c = route.query.page) != null ? _c : `${defaultPage}`);
          }
          if (pageQuery === NaN) {
            pageQuery = defaultPage;
          }
          return pageQuery;
        },
        set(value) {
          router.push({
            query: {
              search: searchTerm.value === defaultSearch ? void 0 : searchTerm.value,
              sort: sort.value === defaultSort ? void 0 : sort.value,
              limit: limit.value === defaultLimit ? void 0 : limit.value,
              page: value === defaultPage ? void 0 : value
            }
          });
        }
      });
      return reactive({
        searchTerm,
        sort,
        limit,
        page
      });
    }
    const queryParam = useQueryParam();
    const api = useApi();
    const fetchData = async ({
      searchTerm,
      start,
      limit,
      sort,
      controller
    }) => {
      const searchQuery = searchTerm ? `&q=${searchTerm}` : "";
      let sortQuery = "";
      if (sort && sort.includes(":")) {
        let [sortField, sortOrder] = sort.split(":");
        sortQuery = `&_sort=${sortField}&_order=${sortOrder}`;
      }
      const { data: users, headers } = await api.get(`/api/users?_start=${start}&_limit=${limit}${searchQuery}${sortQuery}`, {
        signal: controller.signal
      });
      await sleep(1e3);
      if ("x-total-count" in headers) {
        total.value = parseInt(headers["x-total-count"]);
      }
      return users;
    };
    const openedRowId = ref();
    function onRowClick(row) {
      if (openedRowId.value === row.id) {
        openedRowId.value = void 0;
      } else {
        openedRowId.value = row.id;
      }
    }
    const incomingCallerId = ref();
    function onCallClick(row) {
      if (incomingCallerId.value === row.id) {
        incomingCallerId.value = void 0;
      } else {
        incomingCallerId.value = row.id;
      }
    }
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$2;
      const _component_VFlexTableWrapperAdvancedDocumentation = __script;
      const _component_VControl = __unplugin_components_1$1;
      const _component_VField = _sfc_main$3;
      const _component_VFlex = _sfc_main$4;
      const _component_VFlexPagination = _sfc_main$5;
      const _component_VPlaceloadAvatar = _sfc_main$6;
      const _component_VPlaceloadText = _sfc_main$7;
      const _component_VFlexTableCell = _sfc_main$8;
      const _component_VPlaceload = __unplugin_components_7;
      const _component_VPlaceholderSection = _sfc_main$9;
      const _component_VProgress = _sfc_main$a;
      const _component_VAvatar = _sfc_main$b;
      const _component_VTextEllipsis = __unplugin_components_6;
      const _component_VAction = _sfc_main$c;
      const _component_VTag = _sfc_main$d;
      const _component_VTags = _sfc_main$e;
      const _component_VCard = _sfc_main$f;
      const _component_VFlexItem = _sfc_main$1;
      const _component_VButton = _sfc_main$g;
      const _component_VFlexTable = _sfc_main$h;
      const _component_VFlexTableWrapper = _sfc_main$i;
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
              label: "VFlexTable",
              to: { name: "components-flextable" }
            },
            {
              label: "VFlexTableWrapper",
              to: { name: "components-flextable-wrapper" }
            },
            {
              label: "Async data (advanced)",
              to: { name: "components-flextable-wrapper-async" }
            }
          ]
        }, null, 8, ["items"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VFlexTableWrapperAdvancedDocumentation),
            createVNode(_component_VFlexTableWrapper, {
              page: unref(queryParam).page,
              "onUpdate:page": _cache[0] || (_cache[0] = ($event) => unref(queryParam).page = $event),
              limit: unref(queryParam).limit,
              "onUpdate:limit": _cache[1] || (_cache[1] = ($event) => unref(queryParam).limit = $event),
              searchTerm: unref(queryParam).searchTerm,
              "onUpdate:searchTerm": _cache[2] || (_cache[2] = ($event) => unref(queryParam).searchTerm = $event),
              sort: unref(queryParam).sort,
              "onUpdate:sort": _cache[3] || (_cache[3] = ($event) => unref(queryParam).sort = $event),
              columns: unref(columns),
              data: fetchData,
              total: total.value,
              class: "mt-4"
            }, {
              default: withCtx((wrapperState) => [
                !unref(isMobileScreen) ? (openBlock(), createBlock(_component_VFlexPagination, {
                  key: 0,
                  "current-page": wrapperState.page,
                  "onUpdate:current-page": ($event) => wrapperState.page = $event,
                  "item-per-page": wrapperState.limit,
                  "total-items": wrapperState.total,
                  "max-links-displayed": 2,
                  "no-router": ""
                }, {
                  "before-pagination": withCtx(() => [
                    createVNode(_component_VFlex, { class: "mr-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:search" }, {
                              default: withCtx(() => [
                                withDirectives(createBaseVNode("input", {
                                  "onUpdate:modelValue": ($event) => wrapperState.searchInput = $event,
                                  type: "text",
                                  class: "input is-rounded",
                                  placeholder: "Filter..."
                                }, null, 8, _hoisted_4), [
                                  [vModelText, wrapperState.searchInput]
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  "before-navigation": withCtx(() => [
                    createVNode(_component_VFlex, { class: "mr-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_5, [
                                  withDirectives(createBaseVNode("select", {
                                    "onUpdate:modelValue": ($event) => wrapperState.limit = $event
                                  }, _hoisted_12, 8, _hoisted_6), [
                                    [vModelSelect, wrapperState.limit]
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["current-page", "onUpdate:current-page", "item-per-page", "total-items"])) : createCommentVNode("", true),
                createVNode(_component_VFlexTable, {
                  rounded: "",
                  clickable: "",
                  "no-header": !wrapperState.loading && wrapperState.data.length === 0,
                  onRowClick
                }, {
                  body: withCtx(() => [
                    wrapperState.loading ? (openBlock(), createElementBlock("div", _hoisted_13, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(wrapperState.limit, (key) => {
                        return openBlock(), createElementBlock("div", {
                          key,
                          class: "flex-table-item"
                        }, [
                          createVNode(_component_VFlexTableCell, { column: { grow: true, media: true } }, {
                            default: withCtx(() => [
                              createVNode(_component_VPlaceloadAvatar, { size: "medium" }),
                              createVNode(_component_VPlaceloadText, {
                                lines: 2,
                                width: "60%",
                                "last-line-width": "20%",
                                class: "mx-2"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VFlexTableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_VPlaceload, {
                                width: "60%",
                                class: "mx-1"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VFlexTableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_VPlaceload, {
                                width: "60%",
                                class: "mx-1"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                            default: withCtx(() => [
                              createVNode(_component_VPlaceload, {
                                width: "45%",
                                class: "mx-1"
                              })
                            ]),
                            _: 1
                          })
                        ]);
                      }), 128))
                    ])) : wrapperState.data.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
                      createVNode(_component_VPlaceholderSection, {
                        title: "No matches",
                        subtitle: "There is no data that match your query.",
                        class: "my-6"
                      }, {
                        image: withCtx(() => [
                          _hoisted_15,
                          _hoisted_16
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  "body-row-pre": withCtx(({ row }) => [
                    row.id === incomingCallerId.value ? (openBlock(), createBlock(_component_VProgress, {
                      key: 0,
                      size: "tiny",
                      class: "m-0 mb-1"
                    })) : createCommentVNode("", true)
                  ]),
                  "body-cell": withCtx(({ row, column }) => [
                    column.key === "name" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(_component_VAvatar, {
                        size: "medium",
                        picture: row.pic,
                        badge: row.badge,
                        initials: row.initials
                      }, null, 8, ["picture", "badge", "initials"]),
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_17, toDisplayString(row.name), 1),
                        createVNode(_component_VTextEllipsis, {
                          width: "280px",
                          "mobile-width": "180px",
                          class: "light-text"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.bio), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ], 64)) : createCommentVNode("", true),
                    column.key === "actions" ? (openBlock(), createBlock(_component_VAction, { key: 1 }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.id === openedRowId.value ? "Hide details" : "View details"), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  "body-row-post": withCtx(({ row }) => [
                    row.id === incomingCallerId.value ? (openBlock(), createBlock(_component_VTags, {
                      key: 0,
                      class: "mt-2 mb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VTag, {
                          color: "primary",
                          outlined: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_18,
                            _hoisted_19
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    row.id === openedRowId.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, toDisplayString(row.name) + "'s details", 1),
                      createVNode(_component_VFlex, { "justify-content": "space-between" }, {
                        default: withCtx(() => [
                          createVNode(_component_VFlexItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_VCard, null, {
                                default: withCtx(() => [
                                  createBaseVNode("pre", null, [
                                    createBaseVNode("code", null, toDisplayString(row), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_VFlexItem, { "align-self": "flex-end" }, {
                            default: withCtx(() => [
                              createVNode(_component_VFlex, { "flex-direction": "column" }, {
                                default: withCtx(() => [
                                  row.id === incomingCallerId.value ? (openBlock(), createBlock(_component_VButton, {
                                    key: 0,
                                    class: "mb-2",
                                    color: "danger",
                                    onClick: () => onCallClick(row)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_22,
                                      _hoisted_23
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])) : createCommentVNode("", true),
                                  createVNode(_component_VButton, {
                                    color: "primary",
                                    outlined: "",
                                    disabled: row.id === incomingCallerId.value,
                                    loading: row.id === incomingCallerId.value,
                                    onClick: () => onCallClick(row)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_24,
                                      createTextVNode(" Call " + toDisplayString(row.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "loading", "onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["no-header"]),
                createVNode(_component_VFlexPagination, {
                  "current-page": wrapperState.page,
                  "onUpdate:current-page": ($event) => wrapperState.page = $event,
                  class: "mt-5",
                  "item-per-page": wrapperState.limit,
                  "total-items": wrapperState.total,
                  "max-links-displayed": 2,
                  "no-router": ""
                }, null, 8, ["current-page", "onUpdate:current-page", "item-per-page", "total-items"])
              ]),
              _: 1
            }, 8, ["page", "limit", "searchTerm", "sort", "columns", "total"])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
