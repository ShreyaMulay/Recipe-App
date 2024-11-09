import { _ as _sfc_main$5 } from "./VProgress.3b664865.js";
import { _ as _sfc_main$4 } from "./VAvatar.25d303d4.js";
import { p as _imports_0, q as _imports_1, e as __unplugin_components_1, f as _sfc_main$1, d as _sfc_main$2, j as _sfc_main$3 } from "./index.e3db1ffa.js";
import { d as defineComponent, e as ref, v as computed, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, D as withDirectives, E as vModelText, n as normalizeClass, m as unref, F as Fragment, l as renderList, t as toDisplayString, aL as TransitionGroup, j as createTextVNode } from "./vendor.4d9c5eda.js";
import { u as users } from "./index.dc8427fa.js";
var CardsGridV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Add User", -1);
const _hoisted_5 = { class: "card-grid card-grid-v1" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "card-grid-item" };
const _hoisted_9 = { class: "card-grid-item-body" };
const _hoisted_10 = { class: "left" };
const _hoisted_11 = { class: "meta" };
const _hoisted_12 = { class: "dark-inverted" };
const _hoisted_13 = { class: "right" };
const _hoisted_14 = { class: "social-links" };
const _hoisted_15 = ["href"];
const _hoisted_16 = { class: "card-grid-item-footer" };
const _hoisted_17 = { class: "left" };
const _hoisted_18 = { class: "progress-stats" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Progress", -1);
const _hoisted_20 = { class: "progress-bar" };
const _hoisted_21 = { class: "right" };
const _hoisted_22 = { class: "buttons" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode("View Profile");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return users;
      } else {
        return users.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.role.match(new RegExp(filters.value, "i")) || item.medias.badge.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "All",
      "UI/UX Design",
      "Web Development",
      "Software Eng.",
      "Business"
    ];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
      const _component_VProgress = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "Search..."
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "Select an option"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "column is-6"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(_component_VAvatar, {
                          size: "big",
                          picture: item.medias.avatar,
                          badge: item.medias.badge
                        }, null, 8, ["picture", "badge"]),
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("span", _hoisted_12, toDisplayString(item.name), 1),
                          createBaseVNode("span", null, toDisplayString(item.role), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.social, (channel, channelIndex) => {
                            return openBlock(), createElementBlock("a", {
                              key: channelIndex,
                              href: channel.url,
                              class: "social-link"
                            }, [
                              createBaseVNode("i", {
                                "aria-hidden": "true",
                                class: normalizeClass(channel.icon)
                              }, null, 2)
                            ], 8, _hoisted_15);
                          }), 128))
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("div", _hoisted_18, [
                          _hoisted_19,
                          createBaseVNode("span", null, toDisplayString(item.progress) + "%", 1)
                        ]),
                        createBaseVNode("div", _hoisted_20, [
                          createVNode(_component_VProgress, {
                            size: "tiny",
                            value: item.progress
                          }, null, 8, ["value"])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("div", _hoisted_22, [
                          createVNode(_component_VButton, {
                            "dark-outlined": "",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_23
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
