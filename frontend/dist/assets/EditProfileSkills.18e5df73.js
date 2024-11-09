import { _ as __unplugin_components_4 } from "./EditSettingItemDropdown.9944d4b4.js";
import { _ as _sfc_main$3 } from "./VIconWrap.f2ca5afb.js";
import { a as useNotyf, d as _sfc_main$1, e as __unplugin_components_1, f as _sfc_main$2 } from "./index.e3db1ffa.js";
import { d as defineComponent, O as useWindowScroll, e as ref, v as computed, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, G as withKeys, H as withModifiers, n as normalizeClass, m as unref, t as toDisplayString, F as Fragment, j as createTextVNode } from "./vendor.4d9c5eda.js";
import { s as sleep } from "./sleep.2a252ff4.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Skills and Tools"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edit your skills and tools")
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
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "Languages", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "How many languages do you speak?", -1);
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
const _hoisted_19 = { class: "column is-6" };
const _hoisted_20 = { class: "multiselect-single-label" };
const _hoisted_21 = ["src"];
const _hoisted_22 = { class: "select-label-text" };
const _hoisted_23 = ["src"];
const _hoisted_24 = { class: "select-label-text" };
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = { class: "column is-12" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Write a quick comment...",
  autocomplete: "off"
}, null, -1);
const _hoisted_28 = { class: "column is-12" };
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" Add Language ");
const _hoisted_30 = { class: "setting-item" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "English"),
  /* @__PURE__ */ createBaseVNode("span", null, "Native Speaker, fluent")
], -1);
const _hoisted_32 = { class: "end" };
const _hoisted_33 = { class: "setting-item" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "French"),
  /* @__PURE__ */ createBaseVNode("span", null, "Fluent, written and spoken")
], -1);
const _hoisted_35 = { class: "end" };
const _hoisted_36 = { class: "setting-item" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "German"),
  /* @__PURE__ */ createBaseVNode("span", null, "Beginner level")
], -1);
const _hoisted_38 = { class: "end" };
const _hoisted_39 = { class: "setting-item" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Spanish"),
  /* @__PURE__ */ createBaseVNode("span", null, "Beginner level")
], -1);
const _hoisted_41 = { class: "end" };
const _hoisted_42 = { class: "setting-item is-create" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "New Item"),
  /* @__PURE__ */ createBaseVNode("span", null, "Add a new language item")
], -1);
const _hoisted_44 = { class: "end" };
const _hoisted_45 = /* @__PURE__ */ createTextVNode(" Add ");
const _hoisted_46 = { class: "fieldset" };
const _hoisted_47 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h4", null, "Skills", -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, "Add your best skills", -1);
const _hoisted_50 = [
  _hoisted_48,
  _hoisted_49
];
const _hoisted_51 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_52 = { class: "setting-list" };
const _hoisted_53 = ["onSubmit"];
const _hoisted_54 = { class: "field-wrap" };
const _hoisted_55 = { class: "columns is-multiline" };
const _hoisted_56 = { class: "column is-6" };
const _hoisted_57 = { class: "multiselect-single-label" };
const _hoisted_58 = ["src"];
const _hoisted_59 = { class: "select-label-text" };
const _hoisted_60 = ["src"];
const _hoisted_61 = { class: "select-label-text" };
const _hoisted_62 = { class: "column is-6" };
const _hoisted_63 = { class: "column is-12" };
const _hoisted_64 = /* @__PURE__ */ createTextVNode(" Add Skill ");
const _hoisted_65 = { class: "setting-item" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Javascript"),
  /* @__PURE__ */ createBaseVNode("span", null, "7 years of experience")
], -1);
const _hoisted_67 = { class: "end" };
const _hoisted_68 = { class: "setting-item" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Html5"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ years of experience")
], -1);
const _hoisted_70 = { class: "end" };
const _hoisted_71 = { class: "setting-item" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "CSS3"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ years of experience")
], -1);
const _hoisted_73 = { class: "end" };
const _hoisted_74 = { class: "setting-item is-create" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "New Item"),
  /* @__PURE__ */ createBaseVNode("span", null, "Add a new skill item")
], -1);
const _hoisted_76 = { class: "end" };
const _hoisted_77 = /* @__PURE__ */ createTextVNode(" Add ");
const _hoisted_78 = { class: "fieldset" };
const _hoisted_79 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("h4", null, "Tools", -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", null, "Add the tools you work with", -1);
const _hoisted_82 = [
  _hoisted_80,
  _hoisted_81
];
const _hoisted_83 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_84 = { class: "setting-list" };
const _hoisted_85 = ["onSubmit"];
const _hoisted_86 = { class: "field-wrap" };
const _hoisted_87 = { class: "columns is-multiline" };
const _hoisted_88 = { class: "column is-6" };
const _hoisted_89 = { class: "multiselect-single-label" };
const _hoisted_90 = ["src"];
const _hoisted_91 = { class: "select-label-text" };
const _hoisted_92 = ["src"];
const _hoisted_93 = { class: "select-label-text" };
const _hoisted_94 = { class: "column is-6" };
const _hoisted_95 = { class: "column is-12" };
const _hoisted_96 = /* @__PURE__ */ createTextVNode(" Add Tool ");
const _hoisted_97 = { class: "setting-item" };
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Illustrator"),
  /* @__PURE__ */ createBaseVNode("span", null, "Advanced level")
], -1);
const _hoisted_99 = { class: "end" };
const _hoisted_100 = { class: "setting-item" };
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Jira Software"),
  /* @__PURE__ */ createBaseVNode("span", null, "Intermediate level")
], -1);
const _hoisted_102 = { class: "end" };
const _hoisted_103 = { class: "setting-item" };
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "MS Office"),
  /* @__PURE__ */ createBaseVNode("span", null, "Expert level")
], -1);
const _hoisted_105 = { class: "end" };
const _hoisted_106 = { class: "setting-item is-create" };
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "New Item"),
  /* @__PURE__ */ createBaseVNode("span", null, "Add a new tool item")
], -1);
const _hoisted_108 = { class: "end" };
const _hoisted_109 = /* @__PURE__ */ createTextVNode(" Add ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isLoading = ref(false);
    const isEditingLanguages = ref(false);
    const isEditingSkills = ref(false);
    const isEditingTools = ref(false);
    const selectedLanguage = ref("");
    const selectedLanguageLevel = ref("");
    const selectedSkill = ref("");
    const selectedSkillLevel = ref("");
    const selectedTool = ref("");
    const selectedToolLevel = ref("");
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const addLanguage = async () => {
      isEditingLanguages.value = false;
      await onSave();
      selectedLanguage.value = "";
      selectedLanguageLevel.value = "";
    };
    const addSkill = async () => {
      isEditingSkills.value = false;
      await onSave();
      selectedSkill.value = "";
      selectedSkillLevel.value = "";
    };
    const addTool = async () => {
      isEditingTools.value = false;
      await onSave();
      selectedTool.value = "";
      selectedToolLevel.value = "";
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VIconWrap = _sfc_main$3;
      const _component_EditSettingItemDropdown = __unplugin_components_4;
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
            !isEditingLanguages.value ? (openBlock(), createElementBlock("div", _hoisted_10, _hoisted_13)) : (openBlock(), createElementBlock("div", _hoisted_14, [
              createBaseVNode("a", {
                class: "action-link",
                tabindex: "0",
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isEditingLanguages.value = false, ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = ($event) => isEditingLanguages.value = false)
              }, " Cancel ", 32)
            ])),
            createBaseVNode("div", _hoisted_15, [
              isEditingLanguages.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addLanguage, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedLanguage.value,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedLanguage.value = $event),
                                placeholder: "Select a language",
                                label: "name",
                                options: [
                                  {
                                    value: "english",
                                    name: "English",
                                    icon: "/images/icons/flags/united-states-of-america.svg"
                                  },
                                  {
                                    value: "french",
                                    name: "French",
                                    icon: "/images/icons/flags/france.svg"
                                  },
                                  {
                                    value: "german",
                                    name: "German",
                                    icon: "/images/icons/flags/germany.svg"
                                  },
                                  {
                                    value: "spanish",
                                    name: "Spanish",
                                    icon: "/images/icons/flags/spain.svg"
                                  }
                                ]
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_20, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_21),
                                    createBaseVNode("span", _hoisted_22, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_23),
                                  createBaseVNode("span", _hoisted_24, toDisplayString(option.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "options"])
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
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedLanguageLevel.value,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedLanguageLevel.value = $event),
                                placeholder: "Select your level",
                                options: [
                                  {
                                    value: "1",
                                    label: "Level 1"
                                  },
                                  {
                                    value: "2",
                                    label: "Level 2"
                                  },
                                  {
                                    value: "3",
                                    label: "Level 3"
                                  },
                                  {
                                    value: "4",
                                    label: "Level 4"
                                  }
                                ]
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:message-circle" }, {
                            default: withCtx(() => [
                              _hoisted_27
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_29
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
                createBaseVNode("div", _hoisted_30, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/united-states-of-america.svg" }),
                  _hoisted_31,
                  createBaseVNode("div", _hoisted_32, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_33, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/france.svg" }),
                  _hoisted_34,
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/germany.svg" }),
                  _hoisted_37,
                  createBaseVNode("div", _hoisted_38, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/spain.svg" }),
                  _hoisted_40,
                  createBaseVNode("div", _hoisted_41, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_42, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_43,
                  createBaseVNode("div", _hoisted_44, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      tabindex: "0",
                      onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => isEditingLanguages.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[5] || (_cache[5] = ($event) => isEditingLanguages.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_45
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_46, [
            !isEditingSkills.value ? (openBlock(), createElementBlock("div", _hoisted_47, _hoisted_50)) : (openBlock(), createElementBlock("div", _hoisted_51, [
              createBaseVNode("a", {
                class: "action-link",
                tabindex: "0",
                onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => isEditingSkills.value = false, ["prevent"]), ["space"])),
                onClick: _cache[7] || (_cache[7] = ($event) => isEditingSkills.value = false)
              }, " Cancel ", 32)
            ])),
            createBaseVNode("div", _hoisted_52, [
              isEditingSkills.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addSkill, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_54, [
                  createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", _hoisted_56, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedSkill.value,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => selectedSkill.value = $event),
                                placeholder: "Select a Skill",
                                label: "name",
                                options: [
                                  {
                                    value: "html",
                                    name: "Html5",
                                    icon: "/images/icons/stacks/html5.svg"
                                  },
                                  {
                                    value: "css",
                                    name: "CSS3",
                                    icon: "/images/icons/stacks/css3.svg"
                                  },
                                  {
                                    value: "javascript",
                                    name: "Javascript",
                                    icon: "/images/icons/stacks/js.svg"
                                  },
                                  {
                                    value: "react",
                                    name: "React",
                                    icon: "/images/icons/stacks/reactjs.svg"
                                  },
                                  {
                                    value: "angular",
                                    name: "Angular",
                                    icon: "/images/icons/stacks/angular.svg"
                                  },
                                  {
                                    value: "vueJs",
                                    name: "VueJs",
                                    icon: "/images/icons/stacks/vuejs.svg"
                                  },
                                  {
                                    value: "nodejs",
                                    name: "NodeJS",
                                    icon: "/images/icons/stacks/nodejs.svg"
                                  },
                                  {
                                    value: "csharp",
                                    name: "C#",
                                    icon: "/images/icons/stacks/csharp.svg"
                                  }
                                ]
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_57, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_58),
                                    createBaseVNode("span", _hoisted_59, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_60),
                                  createBaseVNode("span", _hoisted_61, toDisplayString(option.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_62, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedSkillLevel.value,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => selectedSkillLevel.value = $event),
                                placeholder: "Years of Exp.",
                                options: [
                                  {
                                    value: "1",
                                    label: "1 Year of exp."
                                  },
                                  {
                                    value: "2",
                                    label: "2 Year of exp."
                                  },
                                  {
                                    value: "3",
                                    label: "3 Year of exp."
                                  },
                                  {
                                    value: "4",
                                    label: "4 Year of exp."
                                  },
                                  {
                                    value: "5",
                                    label: "5 Year of exp."
                                  },
                                  {
                                    value: "6",
                                    label: "6 Year of exp."
                                  },
                                  {
                                    value: "7",
                                    label: "7 Year of exp."
                                  },
                                  {
                                    value: "8",
                                    label: "8 Year of exp."
                                  },
                                  {
                                    value: "9",
                                    label: "9 Year of exp."
                                  },
                                  {
                                    value: "+10",
                                    label: "+10 Year of exp."
                                  }
                                ]
                              }, null, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_63, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_64
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
              ], 40, _hoisted_53)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_65, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/js.svg" }),
                  _hoisted_66,
                  createBaseVNode("div", _hoisted_67, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_68, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/html5.svg" }),
                  _hoisted_69,
                  createBaseVNode("div", _hoisted_70, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_71, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/css3.svg" }),
                  _hoisted_72,
                  createBaseVNode("div", _hoisted_73, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_74, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_75,
                  createBaseVNode("div", _hoisted_76, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      tabindex: "0",
                      onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => isEditingSkills.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[11] || (_cache[11] = ($event) => isEditingSkills.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_77
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_78, [
            !isEditingTools.value ? (openBlock(), createElementBlock("div", _hoisted_79, _hoisted_82)) : (openBlock(), createElementBlock("div", _hoisted_83, [
              createBaseVNode("a", {
                class: "action-link",
                tabindex: "0",
                onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => isEditingTools.value = false, ["prevent"]), ["space"])),
                onClick: _cache[13] || (_cache[13] = ($event) => isEditingTools.value = false)
              }, " Cancel ", 32)
            ])),
            createBaseVNode("div", _hoisted_84, [
              isEditingTools.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addTool, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_86, [
                  createBaseVNode("div", _hoisted_87, [
                    createBaseVNode("div", _hoisted_88, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedTool.value,
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => selectedTool.value = $event),
                                placeholder: "Select a Tool",
                                label: "name",
                                options: [
                                  {
                                    value: "illustrator",
                                    name: "Illustrator",
                                    icon: "/images/icons/stacks/illustrator.svg"
                                  },
                                  {
                                    value: "photoshop",
                                    name: "Photoshop",
                                    icon: "/images/icons/stacks/photoshop.svg"
                                  },
                                  {
                                    value: "jira",
                                    name: "Jira Software",
                                    icon: "/demo/photos/tools/jira.svg"
                                  },
                                  {
                                    value: "office",
                                    name: "MS Office",
                                    icon: "/demo/photos/tools/office.svg"
                                  }
                                ]
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_89, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_90),
                                    createBaseVNode("span", _hoisted_91, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_92),
                                  createBaseVNode("span", _hoisted_93, toDisplayString(option.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_94, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedToolLevel.value,
                                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => selectedToolLevel.value = $event),
                                placeholder: "Select your level",
                                options: [
                                  {
                                    value: "1",
                                    label: "Level 1"
                                  },
                                  {
                                    value: "2",
                                    label: "Level 2"
                                  },
                                  {
                                    value: "3",
                                    label: "Level 3"
                                  },
                                  {
                                    value: "4",
                                    label: "Level 4"
                                  },
                                  {
                                    value: "5",
                                    label: "Level 5"
                                  }
                                ]
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_95, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_96
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
              ], 40, _hoisted_85)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_97, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/illustrator.svg" }),
                  _hoisted_98,
                  createBaseVNode("div", _hoisted_99, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_100, [
                  createVNode(_component_VIconWrap, { picture: "/demo/photos/tools/jira.svg" }),
                  _hoisted_101,
                  createBaseVNode("div", _hoisted_102, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_103, [
                  createVNode(_component_VIconWrap, { picture: "/demo/photos/tools/office.svg" }),
                  _hoisted_104,
                  createBaseVNode("div", _hoisted_105, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_106, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_107,
                  createBaseVNode("div", _hoisted_108, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      tabindex: "0",
                      onKeydown: _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => isEditingTools.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[17] || (_cache[17] = ($event) => isEditingTools.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_109
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
