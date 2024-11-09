import { m as useThemeColors, e as __unplugin_components_1, f as _sfc_main$3, d as _sfc_main$7 } from "./index.e3db1ffa.js";
import { _ as _sfc_main$6 } from "./UserPopoverContent.9248eb73.js";
import { _ as _sfc_main$5 } from "./VAvatar.25d303d4.js";
import { _ as _sfc_main$4 } from "./VProgress.3b664865.js";
import { _ as _sfc_main$2 } from "./VBlock.d82c11a6.js";
import { _ as _sfc_main$1 } from "./VIconBox.0539b6af.js";
import { _ as __unplugin_components_0 } from "./GraphDropdown.caf44d15.js";
import { A as ApexChart } from "./vue3-apexcharts.common.3e3e3c1b.js";
import { p as popovers } from "./userPopovers.d6593550.js";
import { e as ref, d as defineComponent, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, m as unref, an as isRef, t as toDisplayString, i as createStaticVNode, j as createTextVNode } from "./vendor.4d9c5eda.js";
var _imports_0 = "/images/icons/dashboards/banking/visa-squared-white.svg";
var _imports_1 = "/images/icons/dashboards/banking/visa-squared-color.svg";
const themeColors = useThemeColors();
const incomeOptions = {
  series: [
    {
      name: "Expenses",
      data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45]
    },
    {
      name: "Earnings",
      data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511]
    }
  ],
  chart: {
    height: 300,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green, themeColors.info, themeColors.orange],
  title: {
    text: "History",
    align: "left"
  },
  legend: {
    position: "top"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2020-10-19T00:00:00.000Z",
      "2020-10-20T01:30:00.000Z",
      "2020-10-21T02:30:00.000Z",
      "2020-10-22T03:30:00.000Z",
      "2020-10-23T04:30:00.000Z",
      "2020-10-24T05:30:00.000Z",
      "2020-10-25T06:30:00.000Z",
      "2020-10-26T06:30:00.000Z",
      "2020-10-27T06:30:00.000Z",
      "2020-10-28T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    },
    y: {
      formatter: function(val) {
        return "$" + val;
      }
    }
  }
};
const selectSlotValue = ["default"];
const selectSlotOptions = [
  {
    value: "default",
    name: "Select an account",
    icon: "/images/avatars/svg/vuero-1.svg"
  },
  {
    value: "4156 1000 56565 17",
    name: "4156 1000 56565 17",
    icon: "/images/icons/dashboards/banking/bank-1.svg"
  },
  {
    value: "2247 2427 89975 12",
    name: "2247 2427 89975 12",
    icon: "/images/icons/dashboards/banking/bank-2.svg"
  },
  {
    value: "2247 2427 89975 19",
    name: "2247 2427 89975 19",
    icon: "/images/icons/dashboards/banking/bank-3.svg"
  }
];
const valueSingle = ref(0);
const optionsSingle = [
  "Last 10 days",
  "Last month",
  "Last 3 months",
  "Last 6 months"
];
var BankingDashboardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "banking-dashboard banking-dashboard-v1" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "dashboard-card is-credit-cards" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="title-wrap"><h3 class="dark-inverted">My Cards</h3><button class="button is-circle is-dark-outlined"><span class="icon is-small"><i aria-hidden="true" class="iconify" data-icon="feather:plus"></i></span></button></div>', 1);
const _hoisted_6 = { class: "card-block" };
const _hoisted_7 = { class: "card-block-inner is-dark-bordered-12" };
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="credit-card is-theme-1"><div class="shape"></div><div class="top"><div class="card-number"><span>** 4628</span><img src="' + _imports_0 + '" alt=""></div></div><div class="bottom"><span>Credit Card</span></div></div><div class="credit-card-meta"><span>Card Balance</span><span class="dark-inverted">$2,834.31</span></div>', 2);
const _hoisted_10 = { class: "credit-card-end" };
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<div class="info-block-inner"><div class="title-wrap"><h3 class="dark-inverted">Information</h3><a class="action-link" tabindex="0">Edit</a></div><div class="info-block-line"><h4 class="dark-inverted">Status</h4><span><i aria-hidden="true" class="fas fa-circle text-success"></i> Active </span></div><div class="info-block-line"><h4 class="dark-inverted">Expires in</h4><span>134 days</span></div><div class="info-block-line"><h4 class="dark-inverted">Type</h4><span class="has-image"><img src="' + _imports_1 + '" alt=""> Credit card </span></div></div>', 1);
const _hoisted_12 = { class: "card-block-inner is-dark-bordered-12" };
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<div class="credit-card is-theme-2"><div class="shape"></div><div class="top"><div class="card-number"><span>** 2649</span><img src="' + _imports_0 + '" alt=""></div></div><div class="bottom"><span>Debit Card</span></div></div><div class="credit-card-meta"><span>Card Balance</span><span class="dark-inverted">$10,563.18</span></div>', 2);
const _hoisted_15 = { class: "credit-card-end" };
const _hoisted_16 = { class: "dashboard-card is-transactions" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Transactions"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _hoisted_18 = { class: "transactions" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-service"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- $41.49", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+ $263.39", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cart-alt"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- $92.00", -1);
const _hoisted_25 = { class: "column is-8" };
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-6" };
const _hoisted_28 = { class: "dashboard-card" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Quick Transfer")
], -1);
const _hoisted_30 = { class: "multiselect-single-label" };
const _hoisted_31 = ["src"];
const _hoisted_32 = { class: "select-label-text" };
const _hoisted_33 = ["src"];
const _hoisted_34 = { class: "select-label-text" };
const _hoisted_35 = /* @__PURE__ */ createStaticVNode('<p class="context-text"> Select one of your bank accounts to transfer some funds. The transfer cannot exceed 20% of your balance. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link" tabindex="0">Confirm</a></div></div></div>', 2);
const _hoisted_37 = {
  class: "dashboard-card",
  "data-toggle": "popover",
  "data-pop-mode": "hover",
  "data-pop-width": "220",
  "data-pop-title": "Level 3",
  "data-pop-content": "Awesome! You're already a level 3 customer. Keep up for more.",
  "data-pop-position": "auto",
  "data-pop-icon": "lnil lnil-crown-alt-1",
  "data-pop-iconbg": "green"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Overall Progress"),
  /* @__PURE__ */ createBaseVNode("span", { class: "title-meta dark-inverted" }, "Lvl 3")
], -1);
const _hoisted_39 = { class: "progress-wrap m-b-10 m-t-10" };
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<p class="context-text"> This is your Vuero customer level. Reach out higher levels to unlock achievements, special gifts, and more. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link" tabindex="0">Details</a></div></div></div>', 2);
const _hoisted_42 = { class: "column is-6" };
const _hoisted_43 = { class: "dashboard-card is-contacts" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Send Money To")
], -1);
const _hoisted_45 = { class: "people-wrap" };
const _hoisted_46 = { class: "people" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "actions" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "See all Contacts"),
  /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary-hover" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:arrow-right"
    })
  ])
], -1);
const _hoisted_48 = { class: "transfer-form" };
const _hoisted_49 = { class: "multiselect-single-label" };
const _hoisted_50 = ["src"];
const _hoisted_51 = { class: "select-label-text" };
const _hoisted_52 = ["src"];
const _hoisted_53 = { class: "select-label-text" };
const _hoisted_54 = /* @__PURE__ */ createStaticVNode('<div class="field"><label>Amount</label><div class="field has-addons"><div class="control"><span class="select currency-select"><select><option>$</option><option>\xA3</option><option>\u20AC</option></select></span></div><div class="control is-expanded"><input class="input" type="text" placeholder="Amount of money"></div></div></div><p class="context-text">Funds will reach destination tomorrow.</p>', 2);
const _hoisted_56 = { class: "submit-wrap" };
const _hoisted_57 = /* @__PURE__ */ createTextVNode(" Send Money ");
const _hoisted_58 = { class: "column is-12" };
const _hoisted_59 = { class: "dashboard-card is-income" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_GraphDropdown = __unplugin_components_0;
      const _component_VIconBox = _sfc_main$1;
      const _component_VBlock = _sfc_main$2;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VProgress = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_UserPopoverContent = _sfc_main$6;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VButton = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _hoisted_5,
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  _hoisted_8,
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_GraphDropdown)
                  ])
                ]),
                _hoisted_11,
                createBaseVNode("div", _hoisted_12, [
                  _hoisted_13,
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(_component_GraphDropdown)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_16, [
              _hoisted_17,
              createBaseVNode("div", _hoisted_18, [
                createVNode(_component_VBlock, {
                  title: "Food Delivery",
                  subtitle: "Oct 23, 2020 - 8:46pm",
                  center: "",
                  lighter: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "green",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_19
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    _hoisted_20
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Market Earnings",
                  subtitle: "Oct 18, 2020 - 9:11am",
                  center: "",
                  lighter: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "orange",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_21
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    _hoisted_22
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Online Order",
                  subtitle: "Oct 16, 2020 - 2:13pm",
                  center: "",
                  lighter: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "purple",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    _hoisted_24
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  _hoisted_29,
                  createVNode(_component_VField, { class: "is-image-select has-curved-images" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: unref(selectSlotValue),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(selectSlotValue) ? selectSlotValue.value = $event : null),
                            placeholder: "Select a language",
                            label: "name",
                            "max-height": 145,
                            options: unref(selectSlotOptions)
                          }, {
                            singlelabel: withCtx(({ value }) => [
                              createBaseVNode("div", _hoisted_30, [
                                createBaseVNode("img", {
                                  class: "select-label-icon",
                                  src: value.icon,
                                  alt: ""
                                }, null, 8, _hoisted_31),
                                createBaseVNode("span", _hoisted_32, toDisplayString(value.name), 1)
                              ])
                            ]),
                            option: withCtx(({ option }) => [
                              createBaseVNode("img", {
                                class: "select-option-icon",
                                src: option.icon,
                                alt: ""
                              }, null, 8, _hoisted_33),
                              createBaseVNode("span", _hoisted_34, toDisplayString(option.name), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  _hoisted_35
                ]),
                createBaseVNode("div", _hoisted_37, [
                  _hoisted_38,
                  createBaseVNode("div", _hoisted_39, [
                    createVNode(_component_VProgress, {
                      size: "tiny",
                      value: 65
                    })
                  ]),
                  _hoisted_40
                ])
              ]),
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  _hoisted_44,
                  createBaseVNode("div", _hoisted_45, [
                    createBaseVNode("div", _hoisted_46, [
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user122
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            color: "warning",
                            initials: "BT",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user18
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: "/demo/avatars/18.jpg",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user123
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            color: "info",
                            initials: "JD",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user7
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: "/demo/avatars/7.jpg",
                            size: "small"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _hoisted_47
                  ]),
                  createBaseVNode("div", _hoisted_48, [
                    createVNode(_component_VField, { class: "is-image-select has-curved-images" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: unref(selectSlotValue),
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectSlotValue) ? selectSlotValue.value = $event : null),
                              placeholder: "Select a language",
                              label: "name",
                              "max-height": 145,
                              options: unref(selectSlotOptions)
                            }, {
                              singlelabel: withCtx(({ value }) => [
                                createBaseVNode("div", _hoisted_49, [
                                  createBaseVNode("img", {
                                    class: "select-label-icon",
                                    src: value.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_50),
                                  createBaseVNode("span", _hoisted_51, toDisplayString(value.name), 1)
                                ])
                              ]),
                              option: withCtx(({ option }) => [
                                createBaseVNode("img", {
                                  class: "select-option-icon",
                                  src: option.icon,
                                  alt: ""
                                }, null, 8, _hoisted_52),
                                createBaseVNode("span", _hoisted_53, toDisplayString(option.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_54,
                    createBaseVNode("div", _hoisted_56, [
                      createVNode(_component_VButton, {
                        color: "primary",
                        size: "big",
                        fullwidth: "",
                        raised: "",
                        bold: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_57
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_58, [
                createBaseVNode("div", _hoisted_59, [
                  createVNode(_component_VField, { class: "is-minimal-select" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: unref(valueSingle),
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                            options: unref(optionsSingle),
                            placeholder: "Select an option",
                            "max-height": 145
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ApexChart), {
                    id: "income-chart",
                    height: unref(incomeOptions).chart.height,
                    type: unref(incomeOptions).chart.type,
                    series: unref(incomeOptions).series,
                    options: unref(incomeOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
