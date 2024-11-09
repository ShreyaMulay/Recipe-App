import { _ as _sfc_main$9 } from "./VFlexTable.b0071d7f.js";
import { _ as _sfc_main$8 } from "./VTag.1bcb31d5.js";
import { m as useThemeColors, d as _sfc_main$2, e as __unplugin_components_1, f as _sfc_main$7 } from "./index.e3db1ffa.js";
import { w as widgetRadialGroup1Options, a as widgetRadialGroup2Options, b as widgetRadialGroup3Options, _ as _sfc_main$5, c as _sfc_main$6 } from "./groupedCircleCharts.fb42e1fb.js";
import { l as lineStatsChartOptions, f as flexRadialChartCircleOptions, a as flexRadialChartStripesOptions, w as widgetGaugeGroup1Options, b as widgetGaugeGroup2Options, c as widgetGaugeGroup3Options, _ as _sfc_main$4 } from "./groupedRadialCharts.8ca8d01b.js";
import { _ as _sfc_main$3 } from "./VIconBox.0539b6af.js";
import { _ as _sfc_main$1 } from "./VAvatar.25d303d4.js";
import { A as ApexChart } from "./vue3-apexcharts.common.3e3e3c1b.js";
import { r as revenueOptions } from "./revenueAreaChart.f0a07164.js";
import { e as asKDollar } from "./apex-formatters.cc861992.js";
import { d as defineComponent, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, m as unref, an as isRef, F as Fragment, t as toDisplayString, U as createBlock, q as createCommentVNode, j as createTextVNode } from "./vendor.4d9c5eda.js";
const themeColors = useThemeColors();
const spark1 = {
  chart: {
    id: "sparkline1",
    type: "line",
    height: 60,
    sparkline: {
      enabled: true
    },
    group: "sparklines"
  },
  series: [
    {
      name: "Sales",
      data: [2565, 6126, 4271, 5249, 2245, 4424, 1752, 3996, 976, 2157]
    }
  ],
  stroke: {
    curve: "smooth",
    width: [3]
  },
  markers: {
    size: 0
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: "right"
    },
    x: {
      show: false
    }
  },
  colors: [themeColors.info]
};
const spark2 = {
  chart: {
    id: "sparkline2",
    type: "line",
    height: 60,
    sparkline: {
      enabled: true
    },
    group: "sparklines"
  },
  series: [
    {
      name: "Income",
      data: [12.2, 14.5, 2.5, 47.5, 32.5, 44.5, 14.8, 55.5, 41.3, 69.7]
    }
  ],
  stroke: {
    curve: "smooth",
    width: [3]
  },
  markers: {
    size: 0
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: "right"
    },
    x: {
      show: false
    },
    y: {
      formatter: asKDollar
    }
  },
  colors: [themeColors.purple]
};
const spark3 = {
  chart: {
    id: "sparkline3",
    type: "line",
    height: 60,
    sparkline: {
      enabled: true
    },
    group: "sparklines"
  },
  series: [
    {
      name: "New Orders",
      data: [4457, 4533, 7274, 3272, 5876, 3271, 4614, 3553, 4835, 1579]
    }
  ],
  stroke: {
    curve: "smooth",
    width: [3]
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: "right"
    },
    x: {
      show: false
    }
  },
  colors: [themeColors.green],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  }
};
const spark4 = {
  chart: {
    id: "sparkline4",
    type: "line",
    height: 60,
    sparkline: {
      enabled: true
    },
    group: "sparklines"
  },
  series: [
    {
      name: "Abandonned",
      data: [1412, 725, 427, 655, 145, 325, 197, 584, 424, 651]
    }
  ],
  stroke: {
    curve: "smooth",
    width: [3]
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: "right"
    },
    x: {
      show: false
    }
  },
  colors: [themeColors.orange],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  }
};
const valueSingle = 0;
const optionsSingle = ["Last week", "Last 30 days", "Last 60 days", "Last 90 days"];
const flexRowsOrders = [
  {
    id: 0,
    picture: "/images/avatars/svg/vuero-1.svg",
    username: "Erik K.",
    orderId: "#158456",
    date: "Oct 31, 2020",
    amount: 863.42,
    status: "paid",
    tracking: "TR-7295"
  },
  {
    id: 1,
    picture: "/demo/avatars/22.jpg",
    username: "Jimmy H.",
    orderId: "#15893",
    date: "Oct 31, 2020",
    amount: 128,
    status: "paid",
    tracking: "TR-6259"
  },
  {
    id: 2,
    picture: "/demo/avatars/25.jpg",
    username: "Melany W.",
    orderId: "#155848",
    date: "Oct 31, 2020",
    amount: 236.79,
    status: "pending",
    tracking: void 0
  },
  {
    id: 3,
    picture: "/demo/avatars/12.jpg",
    username: "Joshua S.",
    orderId: "#154736",
    date: "Oct 30, 2020",
    amount: 98.31,
    status: "paid",
    tracking: "TR-48951"
  },
  {
    id: 4,
    picture: "/demo/avatars/13.jpg",
    username: "Tara S.",
    orderId: "#158315",
    date: "Oct 30, 2020",
    amount: 112,
    status: "paid",
    tracking: "TR-48555"
  }
];
var EcommerceDashboardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "ecommerce-dashboard ecommerce-dashboard-v1" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "start" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Welcome back, Erik Kovalsky"),
  /* @__PURE__ */ createBaseVNode("p", null, "We're very happy to see you again on your dashboard.")
], -1);
const _hoisted_4 = { class: "end" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("View Reports");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Manage Shop");
const _hoisted_7 = { class: "columns is-multiline" };
const _hoisted_8 = { class: "column is-3" };
const _hoisted_9 = { class: "dashboard-tile" };
const _hoisted_10 = { class: "tile-head" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h3", null, "Total Sales", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:gift"
}, null, -1);
const _hoisted_13 = { class: "dashboard-tile-inner" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "641.4K")
], -1);
const _hoisted_15 = { class: "right" };
const _hoisted_16 = { class: "column is-3" };
const _hoisted_17 = { class: "dashboard-tile" };
const _hoisted_18 = { class: "tile-head" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", null, "Total Income", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:dollar-sign"
}, null, -1);
const _hoisted_21 = { class: "dashboard-tile-inner" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "$389.9K")
], -1);
const _hoisted_23 = { class: "right" };
const _hoisted_24 = { class: "column is-3" };
const _hoisted_25 = { class: "dashboard-tile" };
const _hoisted_26 = { class: "tile-head" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("h3", null, "New Orders", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_29 = { class: "dashboard-tile-inner" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "371")
], -1);
const _hoisted_31 = { class: "right" };
const _hoisted_32 = { class: "column is-3" };
const _hoisted_33 = { class: "dashboard-tile" };
const _hoisted_34 = { class: "tile-head" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("h3", null, "Abandonned", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:shopping-cart"
}, null, -1);
const _hoisted_37 = { class: "dashboard-tile-inner" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "29")
], -1);
const _hoisted_39 = { class: "right" };
const _hoisted_40 = { class: "column is-6" };
const _hoisted_41 = { class: "column is-6" };
const _hoisted_42 = { class: "column is-6" };
const _hoisted_43 = { class: "column is-6" };
const _hoisted_44 = { class: "column is-6" };
const _hoisted_45 = { class: "column is-6" };
const _hoisted_46 = { class: "column is-12" };
const _hoisted_47 = { class: "table-header" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Recent Orders", -1);
const _hoisted_49 = { class: "item-name dark-inverted is-font-alt is-weight-600" };
const _hoisted_50 = { class: "item-meta" };
const _hoisted_51 = {
  key: 1,
  class: "dark-inverted is-weight-600"
};
const _hoisted_52 = {
  key: 0,
  tabindex: "0",
  class: "action-link is-pushed-mobile"
};
const _hoisted_53 = {
  key: 1,
  class: "light-text is-pushed-mobile"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("View Order");
const _hoisted_55 = {
  key: 5,
  class: "light-text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VIconBox = _sfc_main$3;
      const _component_LineStatWidget = _sfc_main$4;
      const _component_FlexStatWidget = _sfc_main$5;
      const _component_GroupedStatWidget = _sfc_main$6;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$7;
      const _component_VTag = _sfc_main$8;
      const _component_VFlexTable = _sfc_main$9;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VAvatar, {
            picture: "/images/avatars/svg/vuero-1.svg",
            size: "large"
          }),
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VButton, { dark: "3" }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                _hoisted_11,
                createVNode(_component_VIconBox, {
                  color: "info",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_13, [
                _hoisted_14,
                createBaseVNode("div", _hoisted_15, [
                  createVNode(unref(ApexChart), {
                    id: "spark1",
                    height: unref(spark1).chart.height,
                    type: unref(spark1).chart.type,
                    series: unref(spark1).series,
                    options: unref(spark1)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
                createVNode(_component_VIconBox, {
                  color: "purple",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_20
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_21, [
                _hoisted_22,
                createBaseVNode("div", _hoisted_23, [
                  createVNode(unref(ApexChart), {
                    id: "spark2",
                    height: unref(spark2).chart.height,
                    type: unref(spark2).chart.type,
                    series: unref(spark2).series,
                    options: unref(spark2)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                _hoisted_27,
                createVNode(_component_VIconBox, {
                  color: "green",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_28
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_29, [
                _hoisted_30,
                createBaseVNode("div", _hoisted_31, [
                  createVNode(unref(ApexChart), {
                    id: "spark3",
                    height: unref(spark3).chart.height,
                    type: unref(spark3).chart.type,
                    series: unref(spark3).series,
                    options: unref(spark3)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _hoisted_35,
                createVNode(_component_VIconBox, {
                  color: "orange",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_36
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_37, [
                _hoisted_38,
                createBaseVNode("div", _hoisted_39, [
                  createVNode(unref(ApexChart), {
                    id: "spark4",
                    height: unref(spark4).chart.height,
                    type: unref(spark4).chart.type,
                    series: unref(spark4).series,
                    options: unref(spark4)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_40, [
            createVNode(_component_LineStatWidget, {
              title: "Revenue",
              "current-label": "This Month",
              "current-value": "$75,648.43",
              "previous-label": "Last Month",
              "previous-value": "$91,512.18",
              straight: ""
            }, {
              default: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "line-stats-widget-chart",
                  height: unref(lineStatsChartOptions).chart.height,
                  type: unref(lineStatsChartOptions).chart.type,
                  series: unref(lineStatsChartOptions).series,
                  options: unref(lineStatsChartOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_41, [
            createVNode(_component_LineStatWidget, {
              title: "Revenue",
              "current-label": "This Month",
              "current-value": "$75,648.43",
              "previous-label": "Last Month",
              "previous-value": "$91,512.18",
              straight: ""
            }, {
              default: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "line-stats-area-chart",
                  height: unref(revenueOptions).chart.height,
                  type: unref(revenueOptions).chart.type,
                  series: unref(revenueOptions).series,
                  options: unref(revenueOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_42, [
            createVNode(_component_FlexStatWidget, {
              title: "Sales Revenue",
              straight: ""
            }, {
              default: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "flex-stat-circle",
                  height: unref(flexRadialChartCircleOptions).chart.height,
                  type: unref(flexRadialChartCircleOptions).chart.type,
                  series: unref(flexRadialChartCircleOptions).series,
                  options: unref(flexRadialChartCircleOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_43, [
            createVNode(_component_FlexStatWidget, {
              title: "Sales Revenue",
              straight: ""
            }, {
              default: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "flex-stat-radial",
                  height: unref(flexRadialChartStripesOptions).chart.height,
                  type: unref(flexRadialChartStripesOptions).chart.type,
                  series: unref(flexRadialChartStripesOptions).series,
                  options: unref(flexRadialChartStripesOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_44, [
            createVNode(_component_GroupedStatWidget, {
              title: "Additional Stats",
              values: ["264", "1,203", "3,078"],
              labels: ["New Deals", "Proposals", "Closed Deals"]
            }, {
              chart1: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-radial-1",
                  height: unref(widgetRadialGroup1Options).chart.height,
                  type: unref(widgetRadialGroup1Options).chart.type,
                  series: unref(widgetRadialGroup1Options).series,
                  options: unref(widgetRadialGroup1Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              chart2: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-radial-2",
                  height: unref(widgetRadialGroup2Options).chart.height,
                  type: unref(widgetRadialGroup2Options).chart.type,
                  series: unref(widgetRadialGroup2Options).series,
                  options: unref(widgetRadialGroup2Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              chart3: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-radial-3",
                  height: unref(widgetRadialGroup3Options).chart.height,
                  type: unref(widgetRadialGroup3Options).chart.type,
                  series: unref(widgetRadialGroup3Options).series,
                  options: unref(widgetRadialGroup3Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_45, [
            createVNode(_component_GroupedStatWidget, {
              title: "Additional Stats",
              values: ["264", "1,203", "3,078"],
              labels: ["New Deals", "Proposals", "Closed Deals"],
              gauge: ""
            }, {
              chart1: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-gauge-1",
                  height: unref(widgetGaugeGroup1Options).chart.height,
                  type: unref(widgetGaugeGroup1Options).chart.type,
                  series: unref(widgetGaugeGroup1Options).series,
                  options: unref(widgetGaugeGroup1Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              chart2: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-gauge-2",
                  height: unref(widgetGaugeGroup2Options).chart.height,
                  type: unref(widgetGaugeGroup2Options).chart.type,
                  series: unref(widgetGaugeGroup2Options).series,
                  options: unref(widgetGaugeGroup2Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              chart3: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-gauge-3",
                  height: unref(widgetGaugeGroup3Options).chart.height,
                  type: unref(widgetGaugeGroup3Options).chart.type,
                  series: unref(widgetGaugeGroup3Options).series,
                  options: unref(widgetGaugeGroup3Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_46, [
            createBaseVNode("div", _hoisted_47, [
              _hoisted_48,
              createVNode(_component_VField, { class: "is-minimal-select" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Multiselect, {
                        modelValue: unref(valueSingle),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                        options: unref(optionsSingle),
                        placeholder: "Select an option",
                        "max-height": 145
                      }, null, 8, ["modelValue", "options"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createVNode(_component_VFlexTable, {
              rounded: "",
              data: unref(flexRowsOrders),
              columns: {
                picture: {
                  label: "Customer",
                  media: true,
                  grow: true
                },
                date: "Date",
                amount: "Amount",
                status: "Status",
                tracking: "Tracking",
                actions: {
                  label: "Actions",
                  align: "end"
                }
              }
            }, {
              "body-cell": withCtx(({ row, column, value }) => [
                column.key === "picture" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(_component_VAvatar, {
                    picture: row.picture,
                    size: "medium",
                    squared: ""
                  }, null, 8, ["picture"]),
                  createBaseVNode("div", null, [
                    createBaseVNode("span", _hoisted_49, toDisplayString(row.username), 1),
                    createBaseVNode("span", _hoisted_50, [
                      createBaseVNode("span", null, toDisplayString(row.orderId), 1)
                    ])
                  ])
                ], 64)) : column.key === "amount" ? (openBlock(), createElementBlock("span", _hoisted_51, "$" + toDisplayString(row.amount), 1)) : column.key === "status" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  row.status === "paid" ? (openBlock(), createBlock(_component_VTag, {
                    key: 0,
                    color: "green",
                    rounded: "",
                    label: "Paid"
                  })) : createCommentVNode("", true),
                  row.status === "pending" ? (openBlock(), createBlock(_component_VTag, {
                    key: 1,
                    color: "orange",
                    rounded: "",
                    label: "Pending"
                  })) : createCommentVNode("", true)
                ], 64)) : column.key === "tracking" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                  row.tracking ? (openBlock(), createElementBlock("a", _hoisted_52, toDisplayString(row.tracking), 1)) : (openBlock(), createElementBlock("span", _hoisted_53, "N/A"))
                ], 64)) : column.key === "actions" ? (openBlock(), createBlock(_component_VButton, {
                  key: 4,
                  class: "is-pushed-mobile",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_54
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_55, toDisplayString(value), 1))
              ]),
              _: 1
            }, 8, ["data"])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
