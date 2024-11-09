import { _ as _sfc_main$6 } from "./VIconButton.08d5808d.js";
import { _ as _sfc_main$5 } from "./UserPopoverContent.9248eb73.js";
import { m as useThemeColors, d as _sfc_main$4 } from "./index.e3db1ffa.js";
import { _ as _sfc_main$3 } from "./VBlock.d82c11a6.js";
import { _ as __unplugin_components_0 } from "./GraphDropdown.caf44d15.js";
import { _ as _sfc_main$2 } from "./VAvatar.25d303d4.js";
import { _ as _sfc_main$1 } from "./VAction.d6daabf4.js";
import { A as ApexChart } from "./vue3-apexcharts.common.3e3e3c1b.js";
import { p as popovers } from "./userPopovers.d6593550.js";
import { d as defineComponent, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, m as unref, j as createTextVNode, i as createStaticVNode } from "./vendor.4d9c5eda.js";
const themeColors$2 = useThemeColors();
function generateDayWiseTimeSeries(s, count) {
  const values = [
    [
      0.4,
      0.3,
      1,
      0.9,
      2.9,
      1.9,
      2.5,
      0.9,
      1.2,
      0.7,
      1.9,
      0.5,
      1.3,
      0.9,
      1.7,
      0.2,
      0.7,
      0.5
    ],
    [
      0.2,
      0.3,
      0.8,
      0.7,
      2.2,
      1.6,
      2.3,
      0.7,
      1.1,
      0.5,
      1.2,
      0.5,
      1,
      0.4,
      1.5,
      0.2,
      0.6,
      2
    ]
  ];
  let i = 0;
  const series = [];
  let x = new Date("11 Nov 2020").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 864e5;
    i++;
  }
  return series;
}
const bitcoinChartOptions = {
  chart: {
    type: "area",
    height: 350,
    foreColor: "#999",
    stacked: true,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06
    }
  },
  colors: [themeColors$2.green, themeColors$2.accent, themeColors$2.green],
  stroke: {
    curve: "smooth",
    width: 3
  },
  title: {
    text: "Bitcoin (BTC) Price Chart",
    align: "left"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Expected",
      data: generateDayWiseTimeSeries(0, 18)
    },
    {
      name: "Real",
      data: generateDayWiseTimeSeries(1, 18)
    }
  ],
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6
    }
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: -5
    },
    tooltip: {
      enabled: true
    }
  },
  grid: {
    show: false,
    padding: {
      left: -5,
      right: 5
    }
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy"
    },
    y: {
      formatter: function(val) {
        return val + "%";
      }
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};
const themeColors$1 = useThemeColors();
const evolutionRadialOptions = {
  series: [54],
  chart: {
    height: 220,
    type: "radialBar"
  },
  colors: [themeColors$1.accent, themeColors$1.orange, themeColors$1.orange],
  title: {
    text: "Bitcoin (BTC) Evolution",
    align: "left"
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 15,
          fontSize: "13px",
          fontFamily: "Roboto, sans-serif",
          color: themeColors$1.lightText,
          formatter: function() {
            return ["(30 days)"];
          }
        },
        value: {
          color: themeColors$1.accent,
          offsetY: -20,
          fontSize: "16px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500"
        }
      }
    }
  },
  labels: ["Median Ratio"]
};
const themeColors = useThemeColors();
const popularityGaugeOptions = {
  series: [67],
  title: {
    text: "Bitcoin (BTC) Popularity"
  },
  chart: {
    height: 225,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green, themeColors.secondary],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "13px",
          fontWeight: "600",
          color: themeColors.lightText,
          offsetY: 80
        },
        value: {
          offsetY: 40,
          fontSize: "18px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500",
          color: void 0,
          formatter: function(val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ["(30 days)"]
};
var BankingDashboardV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "banking-dashboard banking-dashboard-v3" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Latest Bitcoin (BTC) Price Chart"),
  /* @__PURE__ */ createBaseVNode("div", { class: "currency" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "amount is-positive dark-inverted" }, "$10584.30")
  ])
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Hour");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Day");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Week");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Month");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Year");
const _hoisted_11 = { class: "columns" };
const _hoisted_12 = { class: "column is-8" };
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<div class="dashboard-tiles"><div class="dashboard-tile"><span>Market Cap</span><span class="dark-inverted">$129,992,260,090</span></div><div class="dashboard-tile"><span>Volume 24h</span><span class="dark-inverted">$453,178 K</span></div><div class="dashboard-tile"><span>Low/high 24h</span><span class="dark-inverted">$10,212 - $10,584</span></div></div>', 1);
const _hoisted_14 = { class: "dashboard-card" };
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-6" };
const _hoisted_17 = { class: "dashboard-card" };
const _hoisted_18 = { class: "column is-6" };
const _hoisted_19 = { class: "dashboard-card" };
const _hoisted_20 = { class: "column is-4" };
const _hoisted_21 = { class: "dashboard-card is-side" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "currency-description" }, [
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide, quantum, inquam, fallare, Torquate. Quid censes in Latino fore? Optime, inquam. Ratio quidem vestra sic cogit. Prave, nequiter, turpiter cenabat; Duo Reges: constructio interrete. ")
], -1);
const _hoisted_23 = { class: "button-wrap" };
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Buy BTC");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("Compare");
const _hoisted_26 = { class: "dashboard-card is-side" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "subheading-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "subheading dark-inverted" }, "Followers"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _hoisted_28 = { class: "people" };
const _hoisted_29 = { class: "dashboard-card is-side" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "subheading-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "subheading dark-inverted" }, "Popular Coins"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAction = _sfc_main$1;
      const _component_VAvatar = _sfc_main$2;
      const _component_GraphDropdown = __unplugin_components_0;
      const _component_VBlock = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_UserPopoverContent = _sfc_main$5;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VIconButton = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }),
              createVNode(_component_VAction, {
                dark: "3",
                active: ""
              }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              }),
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              }),
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            _hoisted_13,
            createBaseVNode("div", _hoisted_14, [
              createVNode(unref(ApexChart), {
                id: "currency-chart",
                height: unref(bitcoinChartOptions).chart.height,
                type: unref(bitcoinChartOptions).chart.type,
                series: unref(bitcoinChartOptions).series,
                options: unref(bitcoinChartOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(unref(ApexChart), {
                    id: "radial-chart",
                    height: unref(evolutionRadialOptions).chart.height,
                    type: unref(evolutionRadialOptions).chart.type,
                    series: unref(evolutionRadialOptions).series,
                    options: unref(evolutionRadialOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createVNode(unref(ApexChart), {
                    id: "radial-gauge",
                    height: unref(popularityGaugeOptions).chart.height,
                    type: unref(popularityGaugeOptions).chart.type,
                    series: unref(popularityGaugeOptions).series,
                    options: unref(popularityGaugeOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              createVNode(_component_VBlock, {
                title: "Bitcoin",
                subtitle: "BTC",
                center: "",
                "m-responsive": ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "/images/icons/cryptocurrencies/btc.svg" })
                ]),
                action: withCtx(() => [
                  createVNode(_component_GraphDropdown)
                ]),
                _: 1
              }),
              _hoisted_22,
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_VButton, {
                  color: "primary",
                  elevated: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_24
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, { "dark-outlined": "" }, {
                  default: withCtx(() => [
                    _hoisted_25
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_26, [
              _hoisted_27,
              createBaseVNode("div", _hoisted_28, [
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user21
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "/demo/avatars/21.jpg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user120
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      initials: "SC",
                      color: "h-purple"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user7
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "/demo/avatars/7.jpg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user124
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      initials: "AT",
                      color: "success"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user31
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "/demo/avatars/31.jpg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_VAvatar, {
                  initials: "50K",
                  color: "h-yellow"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_29, [
              _hoisted_30,
              createVNode(_component_VBlock, {
                title: "Monero",
                subtitle: "XMR",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/xmr.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VBlock, {
                title: "Litecoin",
                subtitle: "LTC",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/ltc.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VBlock, {
                title: "ChainLink",
                subtitle: "LINK",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/link.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VBlock, {
                title: "Binance Coin",
                subtitle: "BNB",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/bnb.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
