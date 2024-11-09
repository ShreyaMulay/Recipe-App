import { _ as _sfc_main$4 } from "./VAvatar.25d303d4.js";
import { e as __unplugin_components_1, f as _sfc_main$1, d as _sfc_main$2, j as _sfc_main$3 } from "./index.e3db1ffa.js";
import { d as defineComponent, e as ref, v as computed, k as resolveComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, D as withDirectives, E as vModelText, n as normalizeClass, m as unref, F as Fragment, l as renderList, q as createCommentVNode, t as toDisplayString, U as createBlock, aj as mergeProps, aL as TransitionGroup } from "./vendor.4d9c5eda.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
const projects = [
  {
    id: "1",
    name: "Delivery App Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "3 months",
    image: "/demo/photos/apps/1.jpg",
    badge: "/images/icons/stacks/illustrator.svg",
    lockable: true,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "Betty T.",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        name: "Esteban C.",
        initials: "EC",
        color: "h-purple"
      },
      {
        id: 159,
        picture: void 0,
        name: "John D.",
        initials: "JD",
        color: "info"
      },
      {
        id: 7,
        picture: "/demo/avatars/7.jpg",
        name: "Alice C.",
        initials: "AC",
        color: "success"
      }
    ]
  },
  {
    id: "2",
    name: "Health and Fitness Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "2 months",
    image: "/demo/photos/apps/2.png",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "Elizabet F.",
        initials: "EF",
        color: "warning"
      },
      {
        id: 189,
        picture: void 0,
        name: "Alan T.",
        initials: "AT",
        color: "success"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "Alejandro B.",
        initials: "AB",
        color: "danger"
      }
    ]
  },
  {
    id: "3",
    name: "Learning Tracker Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "4 months",
    image: "/demo/photos/apps/3.png",
    badge: "/images/icons/stacks/angular.svg",
    lockable: true,
    locked: true,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "Elizabet F.",
        initials: "EF",
        color: "warning"
      },
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "Alejandro B.",
        initials: "AB",
        color: "danger"
      }
    ]
  },
  {
    id: "4",
    name: "Banking and Finance Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "2 weeks",
    image: "/demo/photos/apps/4.png",
    badge: "/images/icons/stacks/js.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 28,
        picture: "/demo/avatars/28.jpg",
        name: "Edouard F.",
        initials: "EF",
        color: "info"
      },
      {
        id: 33,
        picture: "/demo/avatars/33.jpg",
        name: "Harvey M.",
        initials: "HM",
        color: "warning"
      }
    ]
  },
  {
    id: "5",
    name: "Resume Management Mobile App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "1 month",
    image: "/demo/photos/apps/5.png",
    badge: "/images/icons/stacks/csharp.svg",
    lockable: true,
    locked: false,
    team: [
      {
        id: 189,
        picture: void 0,
        name: "Alan T.",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        picture: "/demo/avatars/23.jpg",
        name: "Irina V.",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: "6",
    name: "Banking Landing Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "3 weeks",
    image: "/demo/photos/apps/6.png",
    badge: "/images/icons/stacks/vuejs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "Betty T.",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        name: "Esteban C.",
        initials: "EC",
        color: "h-purple"
      },
      {
        id: 159,
        picture: void 0,
        name: "John D.",
        initials: "JD",
        color: "info"
      }
    ]
  },
  {
    id: "7",
    name: "Learning App Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "5 months",
    image: "/demo/photos/apps/7.png",
    badge: "/images/icons/stacks/swift.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        name: "Carmen E.",
        initials: "CE",
        color: "info"
      }
    ]
  },
  {
    id: "8",
    name: "Educational App Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "2 months",
    image: "/demo/photos/apps/8.png",
    badge: "/images/icons/stacks/android.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        name: "Carmen E.",
        initials: "CE",
        color: "info"
      }
    ]
  },
  {
    id: "9",
    name: "Banking Solution Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "2 months",
    image: "/demo/photos/apps/9.png",
    badge: "/images/icons/stacks/html5.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 189,
        picture: void 0,
        name: "Alan T.",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        picture: "/demo/avatars/23.jpg",
        name: "Irina V.",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: "10",
    name: "HR Webapp Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "2 months",
    image: "/demo/photos/apps/10.png",
    badge: "/images/icons/stacks/photoshop.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 189,
        picture: void 0,
        name: "Alan T.",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        picture: "/demo/avatars/23.jpg",
        name: "Irina V.",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: "11",
    name: "Ice Cream Delivery Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "1 week",
    image: "/demo/photos/apps/11.png",
    badge: "/images/icons/stacks/js.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "Betty T.",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        name: "Esteban C.",
        initials: "EC",
        color: "h-purple"
      },
      {
        id: 159,
        picture: void 0,
        name: "John D.",
        initials: "JD",
        color: "info"
      },
      {
        id: 7,
        picture: "/demo/avatars/7.jpg",
        name: "Alice C.",
        initials: "AC",
        color: "success"
      }
    ]
  },
  {
    id: "12",
    name: "Mobile App Landing Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "3 months",
    image: "/demo/photos/apps/12.jpg",
    badge: "/images/icons/stacks/css3.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "Elizabet F.",
        initials: "EF",
        color: "warning"
      },
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "Alejandro B.",
        initials: "AB",
        color: "danger"
      }
    ]
  },
  {
    id: "13",
    name: "Web Marketing Landing Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "4 months",
    image: "/demo/photos/apps/13.png",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "Betty T.",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 31,
        picture: "/demo/avatars/31.jpg",
        name: "Yasseen A.",
        initials: "YA",
        color: "h-purple"
      }
    ]
  },
  {
    id: "14",
    name: "Startup Landing Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "1 month",
    image: "/demo/photos/apps/14.jpg",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 33,
        picture: "/demo/avatars/33.jpg",
        name: "Harvey M.",
        initials: "HM",
        color: "warning"
      },
      {
        id: 26,
        picture: "/demo/avatars/26.jpg",
        name: "Courtney W.",
        initials: "CW",
        color: "info"
      }
    ]
  },
  {
    id: "15",
    name: "Expense Management System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? At certe gravius.",
    remaining: "1 month",
    image: "/demo/photos/apps/15.png",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "Elizabet F.",
        initials: "EF",
        color: "warning"
      },
      {
        id: 189,
        picture: void 0,
        name: "Alan T.",
        initials: "AT",
        color: "success"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "Alejandro B.",
        initials: "AB",
        color: "danger"
      }
    ]
  }
];
var CardsGridV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "New Project", -1);
const _hoisted_5 = { class: "card-grid card-grid-v3" };
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
const _hoisted_9 = {
  key: 0,
  class: "h-toggle"
};
const _hoisted_10 = ["checked"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "toggler" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "active" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:lock"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "inactive" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_12 = { class: "dark-inverted" };
const _hoisted_13 = { class: "description" };
const _hoisted_14 = { class: "people" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:eye"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "View")
  ]),
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:edit-2"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "Edit")
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return projects;
      } else {
        return projects.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.remaining.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "All Projects",
      "Web Apps",
      "Mobile Apps",
      "Dashboards",
      "Landing Pages"
    ];
    function getAvatarData(user) {
      return {
        picture: user == null ? void 0 : user.picture,
        initials: user == null ? void 0 : user.initials,
        color: user == null ? void 0 : user.color
      };
    }
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
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
            class: "columns is-multiline is-flex-tablet-p is-half-tablet-p"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "column is-4"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    item.lockable ? (openBlock(), createElementBlock("label", _hoisted_9, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        checked: item.locked
                      }, null, 8, _hoisted_10),
                      _hoisted_11
                    ])) : createCommentVNode("", true),
                    createVNode(_component_VAvatar, {
                      size: "large",
                      picture: item.image,
                      badge: item.badge,
                      squared: ""
                    }, null, 8, ["picture", "badge"]),
                    createBaseVNode("h3", _hoisted_12, toDisplayString(item.name), 1),
                    createBaseVNode("p", null, toDisplayString(item.remaining) + " remaining", 1),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("p", null, toDisplayString(item.description), 1)
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.team, (user) => {
                        return openBlock(), createBlock(_component_VAvatar, mergeProps({
                          key: user.id,
                          size: "small"
                        }, getAvatarData(user)), null, 16);
                      }), 128))
                    ]),
                    _hoisted_15
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
