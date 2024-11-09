import { _ as _sfc_main$8 } from "./VBlock.d82c11a6.js";
import { m as useThemeColors, d as _sfc_main$7 } from "./index.e3db1ffa.js";
import { _ as _sfc_main$6 } from "./UserPopoverContent.9248eb73.js";
import { _ as _sfc_main$5 } from "./UIWidget.3a798766.js";
import { _ as _sfc_main$4 } from "./VBillboardJS.71dfa111.js";
import { _ as _sfc_main$3 } from "./UIWidgetToolbarDropdown.f7bba343.js";
import { _ as _sfc_main$2 } from "./VSimpleDatatables.a1d04600.js";
import { _ as _sfc_main$1 } from "./VAvatar.25d303d4.js";
import { A as ApexChart } from "./vue3-apexcharts.common.3e3e3c1b.js";
import { y as reactive, d as defineComponent, I as onMounted, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, m as unref, i as createStaticVNode, j as createTextVNode } from "./vendor.4d9c5eda.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.c9720ff5.js";
import { p as popovers } from "./userPopovers.d6593550.js";
const themeColors$2 = useThemeColors();
const sharingOptions = {
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30, 35, 41, 36, 26]
    }
  ],
  chart: {
    height: 180,
    type: "bar",
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors$2.accent, themeColors$2.primary, themeColors$2.info],
  plotOptions: {
    bar: {
      columnWidth: "30px",
      distributed: true,
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    type: "numeric",
    lines: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      labels: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      }
    }
  ]
};
const themeColors$1 = useThemeColors();
const usersOptions = {
  series: [
    {
      name: "New Users",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "Renewals",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "Resigns",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ],
  chart: {
    height: 180,
    type: "area",
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors$1.primary, themeColors$1.accent, themeColors$1.info],
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2],
    curve: "smooth"
  },
  xaxis: {
    type: "numeric",
    lines: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      labels: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      }
    }
  ],
  tooltip: {
    x: {
      show: false,
      format: "dd/MM/yy HH:mm"
    }
  }
};
const themeColors = useThemeColors();
const barData = [
  {
    x: "Jan",
    y: 322
  },
  {
    x: "Feb",
    y: 459
  },
  {
    x: "Mar",
    y: 212
  },
  {
    x: "Apr",
    y: 345
  },
  {
    x: "May",
    y: 111
  },
  {
    x: "Jun",
    y: 189
  },
  {
    x: "Jul",
    y: 498
  },
  {
    x: "Aug",
    y: 612
  },
  {
    x: "Sep",
    y: 451
  },
  {
    x: "Oct",
    y: 248
  },
  {
    x: "Nov",
    y: 306
  },
  {
    x: "Dec",
    y: 366
  }
];
const barData2 = [
  {
    x: "Jan",
    y: 25
  },
  {
    x: "Feb",
    y: 49
  },
  {
    x: "Mar",
    y: 36
  },
  {
    x: "Apr",
    y: 84
  },
  {
    x: "May",
    y: 64
  },
  {
    x: "Jun",
    y: 131
  },
  {
    x: "Jul",
    y: 48
  },
  {
    x: "Aug",
    y: 144
  },
  {
    x: "Sep",
    y: 96
  },
  {
    x: "Oct",
    y: 11
  },
  {
    x: "Nov",
    y: 31
  },
  {
    x: "Dec",
    y: 8
  }
];
const usersBarOptions = reactive({
  series: [],
  chart: {
    height: 235,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.primary],
  dataLabels: {
    enabled: false
  },
  noData: {
    text: "Loading..."
  },
  xaxis: {
    type: "category",
    tickPlacement: "on",
    labels: {
      rotate: -45,
      rotateAlways: true
    }
  }
});
function renderPicture(data) {
  return `
          <div class="v-avatar">
              <img class="avatar" src="${data}" alt="">
          </div>
      `;
}
function renderName(data) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`;
}
function renderPosition(data) {
  return `<span class="light-text">${data}</span>`;
}
function renderStatus(data) {
  return `
          <div class="status is-${data}">
              <i aria-hidden="true" class="fas fa-circle"></i>
              <span class="is-capitalize">${data}</span>
          </div>
      `;
}
function renderButton(data, cell, row) {
  return `<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Manage</button></div>`;
}
const optionsCompany = {
  searchable: false,
  perPageSelect: false,
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderPosition },
    { select: 4, render: renderStatus },
    { select: 5, render: renderButton, sortable: false }
  ],
  data: {
    headings: ["ID", "Picture", "Name", "Position", "Status", "Actions"],
    data: [
      [
        0,
        "/images/avatars/svg/vuero-1.svg",
        "Erik Kovalsky",
        "Product Manager",
        "busy",
        true
      ],
      [1, "/demo/avatars/7.jpg", "Alice Carasca", "Software Engineer", "offline", true],
      [2, "/demo/avatars/13.jpg", "Tara Svenson", "UI/UX Designer", "offline", true],
      [3, "/demo/avatars/5.jpg", "Mary Lebowski", "Project Manager", "available", true],
      [5, "/demo/avatars/27.jpg", "Carmen Escudero", "HR Manager", "offline", true]
    ]
  }
};
var CompanyDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "business-dashboard company-dashboard" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="company-header is-dark-card-bordered is-dark-bg-6"><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-users-alt is-dark-primary"></i><span class="dark-inverted">162</span><p>New Users</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-diamond-alt is-dark-primary"></i><span class="dark-inverted">$1,835.41</span><p>Daily Income</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-briefcase-alt is-dark-primary"></i><span class="dark-inverted">378</span><p>Completed Projects</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-ticket is-dark-primary"></i><span class="dark-inverted">192</span><p>Active Tickets</p></div></div></div>', 1);
const _hoisted_3 = { class: "columns is-multiline" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "dashboard-card is-company" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("button", { class: "button icon-button is-circle is-dark-outlined" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:plus"
    })
  ])
], -1);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h3 class="dark-inverted">U Learning</h3><p>Online Courses</p><div class="description"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fac ista esse non inportuna. </p></div><div class="company-stats is-dark-bordered-12"><div class="company-stat"><div><span>Posts</span><span class="dark-inverted">864</span></div></div><div class="company-stat"><div><span>Projects</span><span class="dark-inverted">261</span></div></div><div class="company-stat"><div><span>Followers</span><span class="dark-inverted">32K</span></div></div></div>', 4);
const _hoisted_11 = { class: "column is-4" };
const _hoisted_12 = { class: "dashboard-card is-base-chart" };
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>New</span><span class="current">153</span></div><div class="revenue-stat"><span>Renewals</span><span class="dark-inverted">641</span></div><div class="revenue-stat"><span>Resigns</span><span class="dark-inverted">64</span></div></div></div>', 1);
const _hoisted_14 = { class: "chart-container" };
const _hoisted_15 = { class: "column is-4" };
const _hoisted_16 = { class: "dashboard-card is-base-chart" };
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>Facebook</span><span class="current">64K</span></div><div class="revenue-stat"><span>Instagram</span><span class="dark-inverted">78K</span></div><div class="revenue-stat"><span>Twitter</span><span class="dark-inverted">25K</span></div></div></div>', 1);
const _hoisted_18 = { class: "chart-container" };
const _hoisted_19 = { class: "column is-12" };
const _hoisted_20 = { class: "column is-3" };
const _hoisted_21 = { class: "gauge-wrap" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Your score has been calculated based on the latest metrics")
], -1);
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = { class: "dashboard-card" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Subscriptions")
], -1);
const _hoisted_26 = { class: "column is-3" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-left"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "center" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-right"
      })
    ])
  ])
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Mon"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Tue"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Wed"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Thu"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Fri"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Sat"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Sun")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "29"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "30"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "31"),
      /* @__PURE__ */ createBaseVNode("td", null, "1"),
      /* @__PURE__ */ createBaseVNode("td", null, "2"),
      /* @__PURE__ */ createBaseVNode("td", null, "3"),
      /* @__PURE__ */ createBaseVNode("td", null, "4")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "5"),
      /* @__PURE__ */ createBaseVNode("td", null, "6"),
      /* @__PURE__ */ createBaseVNode("td", null, "7"),
      /* @__PURE__ */ createBaseVNode("td", null, "8"),
      /* @__PURE__ */ createBaseVNode("td", null, "9"),
      /* @__PURE__ */ createBaseVNode("td", null, "10"),
      /* @__PURE__ */ createBaseVNode("td", null, "11")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "12"),
      /* @__PURE__ */ createBaseVNode("td", null, "13"),
      /* @__PURE__ */ createBaseVNode("td", null, "14"),
      /* @__PURE__ */ createBaseVNode("td", null, "15"),
      /* @__PURE__ */ createBaseVNode("td", null, "16"),
      /* @__PURE__ */ createBaseVNode("td", null, "17"),
      /* @__PURE__ */ createBaseVNode("td", { class: "current-day" }, "18")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "19"),
      /* @__PURE__ */ createBaseVNode("td", null, "20"),
      /* @__PURE__ */ createBaseVNode("td", null, "21"),
      /* @__PURE__ */ createBaseVNode("td", null, "22"),
      /* @__PURE__ */ createBaseVNode("td", null, "23"),
      /* @__PURE__ */ createBaseVNode("td", null, "24"),
      /* @__PURE__ */ createBaseVNode("td", null, "25")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "26"),
      /* @__PURE__ */ createBaseVNode("td", null, "27"),
      /* @__PURE__ */ createBaseVNode("td", null, "28"),
      /* @__PURE__ */ createBaseVNode("td", null, "29"),
      /* @__PURE__ */ createBaseVNode("td", null, "30"),
      /* @__PURE__ */ createBaseVNode("td", null, "31"),
      /* @__PURE__ */ createBaseVNode("td", { class: "next-month" }, "1")
    ])
  ])
], -1);
const _hoisted_29 = { class: "column is-12" };
const _hoisted_30 = { class: "dashboard-card is-tickets" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Pending Tickets"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _hoisted_32 = { class: "ticket-list" };
const _hoisted_33 = /* @__PURE__ */ createTextVNode("Manage");
const _hoisted_34 = /* @__PURE__ */ createTextVNode("Manage");
const _hoisted_35 = /* @__PURE__ */ createTextVNode("Manage");
const _hoisted_36 = /* @__PURE__ */ createTextVNode("Manage");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    onMounted(async () => {
      setTimeout(() => {
        usersBarOptions.series = [
          {
            name: "Orders",
            data: barData
          }
        ];
      }, 1e3);
      setTimeout(() => {
        usersBarOptions.series = [
          ...usersBarOptions.series,
          {
            name: "Abandonned",
            data: barData2
          }
        ];
      }, 2500);
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VSimpleDatatables = _sfc_main$2;
      const _component_UIWidgetToolbarDropdown = _sfc_main$3;
      const _component_VBillboardJS = _sfc_main$4;
      const _component_UIWidget = _sfc_main$5;
      const _component_UserPopoverContent = _sfc_main$6;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VButton = _sfc_main$7;
      const _component_VBlock = _sfc_main$8;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VAvatar, {
                size: "big",
                picture: "/demo/photos/brands/udemy.svg",
                "picture-dark": "/demo/photos/brands/udemy-dark.svg"
              }, {
                badge: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              _hoisted_7
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createBaseVNode("div", _hoisted_14, [
                createVNode(unref(ApexChart), {
                  id: "users-chart",
                  height: unref(usersOptions).chart.height,
                  type: unref(usersOptions).chart.type,
                  series: unref(usersOptions).series,
                  options: unref(usersOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              _hoisted_17,
              createBaseVNode("div", _hoisted_18, [
                createVNode(unref(ApexChart), {
                  id: "shares-chart",
                  height: unref(sharingOptions).chart.height,
                  type: unref(sharingOptions).chart.type,
                  series: unref(sharingOptions).series,
                  options: unref(sharingOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createVNode(_component_VSimpleDatatables, { options: unref(optionsCompany) }, null, 8, ["options"])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createVNode(_component_UIWidget, {
              class: "gauge-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarDropdown, { title: "Gauge Widget" })
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_21, [
                  createVNode(_component_VBillboardJS, {
                    class: "gauge-holder",
                    options: unref(personalScoreGaugeOptions),
                    onReady: unref(onPersonalScoreGaugeReady)
                  }, null, 8, ["options", "onReady"])
                ]),
                _hoisted_22
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              _hoisted_25,
              createVNode(unref(ApexChart), {
                id: "bar-chart",
                height: unref(usersBarOptions).chart.height,
                type: unref(usersBarOptions).chart.type,
                series: unref(usersBarOptions).series,
                options: unref(usersBarOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createVNode(_component_UIWidget, {
              class: "picker-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                _hoisted_27
              ]),
              body: withCtx(() => [
                _hoisted_28
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("div", _hoisted_30, [
              _hoisted_31,
              createBaseVNode("div", _hoisted_32, [
                createVNode(_component_VBlock, {
                  title: "[#45651] Cannot save changes to user profile",
                  subtitle: "Iam not able to save changes I make to my user profile. When\n                  I click on the save button, it simply says failed.",
                  infratitle: "Updated 5 hours ago",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user31
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/31.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_33
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "[#45783] Cannot create a new opportunity",
                  subtitle: "when I try to create a new opportunity, Iam redirected to a\n                  404 page after clicking the action button.",
                  infratitle: "Updated 2 hours ago",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user23
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/23.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_34
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "[#45723] Payment fails when using PayPal",
                  subtitle: "When I try to use PayPal as a payment method, it spins\n                  forever and I get an error message after that.",
                  infratitle: "Updated 30 minutes ago",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user32
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/32.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_35
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "[#45862] Cannot find the assets in the theme folder",
                  subtitle: "I followed the documentation but Iam not able to locate the\n                  assets in the main folder. Can I get some help?",
                  infratitle: "Updated 6 hours ago",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user13
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/13.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_36
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
