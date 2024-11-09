import { d as defineComponent, _ as useI18n, O as useWindowScroll, e as ref, L as watchEffect, v as computed, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, G as withKeys, H as withModifiers, m as unref, h as createVNode, w as withCtx, n as normalizeClass } from "./vendor.4d9c5eda.js";
import { u as useDarkmode } from "./index.e3db1ffa.js";
import { u as usePanels } from "./panels.01df010b.js";
var CircularMenu_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-bars"
}, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-times"
}, null, -1);
const _hoisted_3 = [
  _hoisted_1,
  _hoisted_2
];
const _hoisted_4 = { class: "items-wrapper" };
const _hoisted_5 = { class: "menu-item is-flex" };
const _hoisted_6 = { class: "dark-mode" };
const _hoisted_7 = ["checked"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9 = ["src"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_12 = [
  _hoisted_11
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    const panels = usePanels();
    const { locale } = useI18n();
    const { y } = useWindowScroll();
    const isOpen = ref(false);
    const isScrolling = ref(false);
    watchEffect(() => {
      if (y.value <= 30) {
        isOpen.value = false;
      }
      isScrolling.value = y.value > 30;
    });
    const localFlagSrc = computed(() => {
      switch (locale.value) {
        case "fr":
          return "/images/icons/flags/france.svg";
        case "es":
          return "/images/icons/flags/spain.svg";
        case "es-MX":
          return "/images/icons/flags/mexico.svg";
        case "de":
          return "/images/icons/flags/germany.svg";
        case "zh-CN":
          return "/images/icons/flags/china.svg";
        case "en":
        default:
          return "/images/icons/flags/united-states-of-america.svg";
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        id: "circular-menu",
        class: normalizeClass([[isScrolling.value && "is-active", isOpen.value && "active"], "circular-menu"])
      }, [
        createBaseVNode("a", {
          class: "floating-btn",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isOpen.value = !isOpen.value, ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => isOpen.value = !isOpen.value)
        }, _hoisted_3, 32),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("label", _hoisted_6, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: !unref(darkmode).isDark,
                onChange: _cache[2] || (_cache[2] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
              }, null, 40, _hoisted_7),
              _hoisted_8
            ])
          ]),
          createBaseVNode("a", {
            class: "menu-item is-flex right-panel-trigger",
            tabindex: "0",
            onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => unref(panels).setActive("languages"), ["prevent"]), ["space"])),
            onClick: _cache[4] || (_cache[4] = ($event) => unref(panels).setActive("languages"))
          }, [
            createBaseVNode("img", {
              src: unref(localFlagSrc),
              alt: ""
            }, null, 8, _hoisted_9)
          ], 32),
          createVNode(_component_RouterLink, {
            to: { name: "sidebar-layouts-profile-notifications" },
            class: "menu-item is-flex"
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createBaseVNode("a", {
            class: "menu-item is-flex",
            tabindex: "0",
            onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => unref(panels).setActive("activity"), ["prevent"]), ["space"])),
            onClick: _cache[6] || (_cache[6] = ($event) => unref(panels).setActive("activity"))
          }, _hoisted_12, 32)
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
