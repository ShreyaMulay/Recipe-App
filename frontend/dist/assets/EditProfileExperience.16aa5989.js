import { _ as _sfc_main$4 } from "./VIconWrap.f2ca5afb.js";
import { _ as __unplugin_components_4 } from "./EditSettingItemDropdown.9944d4b4.js";
import { a as useNotyf, d as _sfc_main$1, e as __unplugin_components_1, f as _sfc_main$3 } from "./index.e3db1ffa.js";
import { _ as _sfc_main$2 } from "./VFilePond.11b8d5ff.js";
import { d as defineComponent, e as ref, O as useWindowScroll, v as computed, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, G as withKeys, H as withModifiers, n as normalizeClass, m as unref, aj as mergeProps, aI as toHandlers, F as Fragment, j as createTextVNode } from "./vendor.4d9c5eda.js";
import _imports_0 from "../../../../demo/photos/brands/airbnb.svg";
import _imports_1 from "../../../../demo/photos/brands/facebook.svg";
import _imports_2 from "../../../../demo/photos/brands/atlassian.svg";
import _imports_3 from "../../../../demo/photos/brands/github.svg";
import _imports_4 from "../../../../demo/photos/brands/slack.svg";
import _imports_5 from "../../../../demo/photos/brands/gitlab.svg";
import { s as sleep } from "./sleep.2a252ff4.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Work Experience"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edit your work experience info")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Go Back ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Save Changes ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "Previous Experiences", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "This will help others assess your experience", -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_15 = { class: "setting-list" };
const _hoisted_16 = ["onSubmit"];
const _hoisted_17 = { class: "field-wrap" };
const _hoisted_18 = { class: "columns is-multiline" };
const _hoisted_19 = { class: "column is-12" };
const _hoisted_20 = ["value"];
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_22 = ["value"];
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Company Name",
  autocomplete: "organization"
}, null, -1);
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Job Title",
  autocomplete: "organization-title"
}, null, -1);
const _hoisted_27 = { class: "column is-12" };
const _hoisted_28 = /* @__PURE__ */ createTextVNode(" Add Work Experience ");
const _hoisted_29 = { class: "setting-item" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Airbnb HQ"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "January 2018"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Product Manager")
], -1);
const _hoisted_31 = { class: "end" };
const _hoisted_32 = { class: "setting-item" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Facebook"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "January 2018"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Product Manager")
], -1);
const _hoisted_34 = { class: "end" };
const _hoisted_35 = { class: "setting-item" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Atlassian"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "January 2018"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Web Developer")
], -1);
const _hoisted_37 = { class: "end" };
const _hoisted_38 = { class: "setting-item" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Github"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "January 2018"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Web Developer")
], -1);
const _hoisted_40 = { class: "end" };
const _hoisted_41 = { class: "setting-item" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Slack"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "January 2018"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Web Developer")
], -1);
const _hoisted_43 = { class: "end" };
const _hoisted_44 = { class: "setting-item" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Gitlab"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "January 2018"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Web Developer")
], -1);
const _hoisted_46 = { class: "end" };
const _hoisted_47 = { class: "setting-item is-create" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "New Item"),
  /* @__PURE__ */ createBaseVNode("span", null, "Add a new work experience item")
], -1);
const _hoisted_49 = { class: "end" };
const _hoisted_50 = /* @__PURE__ */ createTextVNode(" Add ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isUploading = ref(false);
    const isLoading = ref(false);
    const range = ref();
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const onAddFile = (error, file) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("file added", file);
    };
    const onRemoveFile = (error, file) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("file removed", file);
    };
    const addExperience = async () => {
      isUploading.value = false;
      onSave();
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VFilePond = _sfc_main$2;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_EditSettingItemDropdown = __unplugin_components_4;
      const _component_VIconWrap = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  to: { name: "sidebar-layouts-profile-view" },
                  icon: "lnir lnir-arrow-left rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(onSave, ["prevent"]), ["space"]),
                  onClick: onSave
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["loading", "onKeydown"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            !isUploading.value ? (openBlock(), createElementBlock("div", _hoisted_10, _hoisted_13)) : (openBlock(), createElementBlock("div", _hoisted_14, [
              createBaseVNode("a", {
                class: "action-link",
                tabindex: "0",
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isUploading.value = false, ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = ($event) => isUploading.value = false)
              }, " Cancel ", 32)
            ])),
            createBaseVNode("div", _hoisted_15, [
              isUploading.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addExperience, ["prevent"])
              }, [
                createVNode(_component_VFilePond, {
                  size: "tiny",
                  class: "profile-filepond",
                  name: "profile_filepond",
                  "chunk-retry-delays": [500, 1e3, 3e3],
                  "label-idle": "<i class='lnil lnil-cloud-upload'></i>",
                  "accepted-file-types": ["image/png", "image/jpeg", "image/gif"],
                  "image-preview-height": 140,
                  "image-resize-target-width": 140,
                  "image-resize-target-height": 140,
                  "image-crop-aspect-ratio": "1:1",
                  "style-panel-layout": "compact circle",
                  "style-load-indicator-position": "center bottom",
                  "style-progress-indicator-position": "right bottom",
                  "style-button-remove-item-position": "left bottom",
                  "style-button-process-item-position": "right bottom",
                  onAddfile: onAddFile,
                  onRemovefile: onRemoveFile
                }),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_VDatePicker, {
                        modelValue: range.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => range.value = $event),
                        "is-range": "",
                        color: "green",
                        "trim-weeks": ""
                      }, {
                        default: withCtx(({ inputValue, inputEvents }) => [
                          createVNode(_component_VField, {
                            addons: "",
                            class: "has-addons-fullwidth"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createBaseVNode("input", mergeProps({
                                    value: inputValue.start,
                                    class: "input"
                                  }, toHandlers(inputEvents.start)), null, 16, _hoisted_20)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_VControl, { nogrow: "" }, {
                                default: withCtx(() => [
                                  _hoisted_21
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createBaseVNode("input", mergeProps({
                                    value: inputValue.end,
                                    class: "input"
                                  }, toHandlers(inputEvents.end)), null, 16, _hoisted_22)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:box" }, {
                            default: withCtx(() => [
                              _hoisted_24
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                            default: withCtx(() => [
                              _hoisted_26
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_28
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ], 40, _hoisted_16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("img", {
                    src: _imports_0,
                    alt: "",
                    onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "50x50"))
                  }, null, 32),
                  _hoisted_30,
                  createBaseVNode("div", _hoisted_31, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_32, [
                  createBaseVNode("img", {
                    src: _imports_1,
                    alt: "",
                    onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "50x50"))
                  }, null, 32),
                  _hoisted_33,
                  createBaseVNode("div", _hoisted_34, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("img", {
                    src: _imports_2,
                    alt: "",
                    onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "50x50"))
                  }, null, 32),
                  _hoisted_36,
                  createBaseVNode("div", _hoisted_37, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("img", {
                    src: _imports_3,
                    alt: "",
                    onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "50x50"))
                  }, null, 32),
                  _hoisted_39,
                  createBaseVNode("div", _hoisted_40, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_41, [
                  createBaseVNode("img", {
                    src: _imports_4,
                    alt: "",
                    onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(onceImageErrored)(event, "50x50"))
                  }, null, 32),
                  _hoisted_42,
                  createBaseVNode("div", _hoisted_43, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_44, [
                  createBaseVNode("img", {
                    src: _imports_5,
                    alt: "",
                    onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(onceImageErrored)(event, "50x50"))
                  }, null, 32),
                  _hoisted_45,
                  createBaseVNode("div", _hoisted_46, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_48,
                  createBaseVNode("div", _hoisted_49, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      tabindex: "0",
                      onKeydown: _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => isUploading.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[10] || (_cache[10] = ($event) => isUploading.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_50
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
