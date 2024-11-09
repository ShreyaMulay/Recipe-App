import { _ as _sfc_main$5 } from "./VFlexTable.b0071d7f.js";
import { _ as _sfc_main$4 } from "./VAction.d6daabf4.js";
import { _ as _sfc_main$3 } from "./VTag.1bcb31d5.js";
import { _ as __unplugin_components_4 } from "./FileTileDropdown.429c99f9.js";
import { _ as _sfc_main$2 } from "./VAvatar.25d303d4.js";
import { d as _sfc_main$1 } from "./index.e3db1ffa.js";
import { d as defineComponent, o as openBlock, a as createElementBlock, f as createBaseVNode, h as createVNode, w as withCtx, F as Fragment, l as renderList, n as normalizeClass, t as toDisplayString, U as createBlock, m as unref, j as createTextVNode, i as createStaticVNode } from "./vendor.4d9c5eda.js";
const courses = [
  {
    id: 1,
    category: "Anatomy",
    title: "ANA118 - Anatomy and physiology of young subjects",
    summary: "This week features a deeper approach of young subject anatomy and basic physiological properties. It also focuses on the latest released articles.",
    students: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        initials: "EF",
        color: "h-purple"
      },
      {
        id: 33,
        picture: "/demo/avatars/33.jpg",
        initials: "HM",
        color: "h-yellow"
      },
      {
        id: 25,
        picture: "/demo/avatars/25.jpg",
        initials: "MW",
        color: "info"
      }
    ],
    participants: 49,
    duration: "45min",
    comments: 25,
    week: 6,
    actionLabel: "Week 6 assessment tasks",
    actionText: "feb 3, 2021"
  },
  {
    id: 2,
    category: "Immunology",
    title: "IMM107 - Immunology and treatment of human disease",
    summary: "This unit has a strong focus on significal clinical problems in immunology and the scientific background to these problems.",
    students: [
      {
        id: 19,
        picture: "/demo/avatars/19.jpg",
        initials: "GK",
        color: "h-purple"
      },
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        initials: "CE",
        color: "h-yellow"
      },
      {
        id: 5,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "info"
      }
    ],
    participants: 26,
    duration: "95min",
    comments: 0,
    week: 6,
    actionLabel: "Written Examination",
    actionText: "9:00-12:00 feb 8, 2021"
  },
  {
    id: 3,
    category: "Cardiology",
    title: "CAR112 - Cardiovascular Metabolic Management",
    summary: "This unit has a strong focus on significal clinical problems in immunology and the scientific background to these problems.",
    students: [
      {
        id: 36,
        picture: "/demo/avatars/36.jpg",
        initials: "BL",
        color: "h-purple"
      },
      {
        id: 15,
        picture: "/demo/avatars/15.jpg",
        initials: "HV",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        initials: "EC",
        color: "info"
      }
    ],
    participants: 54,
    duration: "95min",
    comments: 0,
    week: 6,
    actionLabel: "Written Examination",
    actionText: "9:00-12:00 feb 8, 2021"
  }
];
const files = [
  {
    id: 1,
    icon: "/images/icons/files/pdf.svg",
    name: "Holtz - Complete Anatomy",
    uploaded: "2 days ago",
    size: "94.7 MB"
  },
  {
    id: 2,
    icon: "/images/icons/files/sheet.svg",
    name: "Assessing doses Pt. 2",
    uploaded: "1 week ago",
    size: "79 KB"
  },
  {
    id: 3,
    icon: "/images/icons/files/doc-2.svg",
    name: "Written exam template",
    uploaded: "2 weeks ago",
    size: "42 KB"
  }
];
const students = [
  {
    id: 0,
    username: "Erik K.",
    position: "Product Manager",
    picture: "/images/avatars/svg/vuero-1.svg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "Las Vegas, NV",
    industry: "Software",
    status: "Online",
    attendance: "On Time",
    progress: 76
  },
  {
    id: 1,
    username: "Jimmy H.",
    position: "Project Manager",
    picture: "/demo/avatars/22.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "Los Angeles, CA",
    industry: "Business",
    status: "Offline",
    attendance: "Late (10min)",
    progress: 79
  },
  {
    id: 2,
    username: "Melany W.",
    position: "Web Developer",
    picture: "/demo/avatars/25.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "San Jose, CA",
    industry: "Design",
    status: "Online",
    attendance: "On Time",
    progress: 58
  },
  {
    id: 3,
    username: "Joshua S.",
    position: "Backend Developer",
    picture: "/demo/avatars/12.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "Las Vegas, NV",
    industry: "Accounting",
    status: "Online",
    attendance: "On Time",
    progress: 66
  },
  {
    id: 4,
    username: "Tara S.",
    position: "UI/UX Designer",
    picture: "/demo/avatars/13.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "Los Angeles, CA",
    industry: "Finance",
    status: "Busy",
    attendance: "On Time",
    progress: 87
  }
];
var CourseDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "business-dashboard course-dashboard" };
const _hoisted_2 = { class: "dashboard-title is-main" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Week 6 Classes"),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile" }, "Classes from January 6 to 10")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Open Schedule");
const _hoisted_6 = { class: "course-grid" };
const _hoisted_7 = { class: "columns is-multiline" };
const _hoisted_8 = { class: "course-card" };
const _hoisted_9 = { class: "dark-inverted" };
const _hoisted_10 = { class: "students" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("a", { class: "link is-dark-primary" }, "Class discussion", -1);
const _hoisted_12 = { class: "attached-block" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "Week 6 lecture recording", -1);
const _hoisted_14 = { class: "block-stats" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_17 = { class: "attached-block" };
const _hoisted_18 = { class: "is-dark-primary" };
const _hoisted_19 = { class: "block-stats" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:calendar"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "action-block" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button h-button is-primary is-raised is-fullwidth" }, " View Class ")
], -1);
const _hoisted_22 = { class: "columns is-multiline tile-grid tile-grid-v2" };
const _hoisted_23 = { class: "column is-4" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "dashboard-title" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Week 6 Files"),
    /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile" }, "Files you will need for this week")
  ])
], -1);
const _hoisted_25 = { class: "tile-grid-item-inner" };
const _hoisted_26 = ["src"];
const _hoisted_27 = { class: "meta" };
const _hoisted_28 = { class: "dark-inverted" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_30 = { class: "column is-8" };
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<div class="dashboard-title"><div class="left"><h2 class="dark-inverted">Students</h2><p class="h-hidden-mobile">Summary of attending students</p></div><div class="right"><div class="field"><div class="control has-icon"><input type="text" class="input is-rounded" placeholder="Search students..."><div class="form-icon"><i aria-hidden="true" class="iconify" data-icon="feather:search"></i></div></div></div></div></div>', 1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_33 = { class: "item-name dark-inverted" };
const _hoisted_34 = { class: "item-meta" };
const _hoisted_35 = /* @__PURE__ */ createTextVNode("Chat");
const _hoisted_36 = {
  key: 3,
  class: "light-text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VAvatar = _sfc_main$2;
      const _component_FileTileDropdown = __unplugin_components_4;
      const _component_VTag = _sfc_main$3;
      const _component_VAction = _sfc_main$4;
      const _component_VFlexTable = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VButton, {
              color: "primary",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(courses), (course) => {
              return openBlock(), createElementBlock("div", {
                key: course.id,
                class: "column is-4"
              }, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("span", {
                    class: normalizeClass(["tag is-elevated", [
                      course.category === "Anatomy" && "is-green",
                      course.category === "Immunology" && "is-purple",
                      course.category === "Cardiology" && "is-danger"
                    ]])
                  }, toDisplayString(course.category), 3),
                  createBaseVNode("h3", _hoisted_9, toDisplayString(course.title), 1),
                  createBaseVNode("p", null, toDisplayString(course.summary), 1),
                  createBaseVNode("div", _hoisted_10, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(course.students, (student) => {
                      return openBlock(), createBlock(_component_VAvatar, {
                        key: student.id,
                        picture: student.picture,
                        size: "small"
                      }, null, 8, ["picture"]);
                    }), 128)),
                    createVNode(_component_VAvatar, {
                      size: "small",
                      initials: `+${course.participants - 3}`
                    }, null, 8, ["initials"]),
                    _hoisted_11
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    _hoisted_13,
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("span", null, [
                        _hoisted_15,
                        createBaseVNode("small", null, toDisplayString(course.duration), 1)
                      ]),
                      createBaseVNode("span", null, [
                        _hoisted_16,
                        createBaseVNode("small", null, toDisplayString(course.comments), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("a", _hoisted_18, toDisplayString(course.actionLabel), 1),
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("span", null, [
                        _hoisted_20,
                        createBaseVNode("small", null, toDisplayString(course.actionText), 1)
                      ])
                    ])
                  ]),
                  _hoisted_21
                ])
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            _hoisted_24,
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(files), (file) => {
              return openBlock(), createElementBlock("div", {
                key: file.id,
                class: "tile-grid-item"
              }, [
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("img", {
                    src: file.icon,
                    alt: ""
                  }, null, 8, _hoisted_26),
                  createBaseVNode("div", _hoisted_27, [
                    createBaseVNode("span", _hoisted_28, toDisplayString(file.name), 1),
                    createBaseVNode("span", null, [
                      createBaseVNode("span", null, toDisplayString(file.size), 1),
                      _hoisted_29,
                      createBaseVNode("span", null, "Uploaded " + toDisplayString(file.uploaded), 1)
                    ])
                  ]),
                  createVNode(_component_FileTileDropdown)
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_30, [
            _hoisted_31,
            createVNode(_component_VFlexTable, {
              rounded: "",
              data: unref(students),
              columns: {
                picture: {
                  label: "Picture",
                  media: true,
                  grow: true
                },
                location: "Location",
                status: "Status",
                attendance: "Schedule",
                actions: {
                  label: "Actions",
                  align: "end"
                }
              }
            }, {
              header: withCtx(() => [
                _hoisted_32
              ]),
              "body-cell": withCtx(({ row, column, value }) => [
                column.key === "picture" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(_component_VAvatar, {
                    picture: row.picture,
                    size: "medium"
                  }, null, 8, ["picture"]),
                  createBaseVNode("div", null, [
                    createBaseVNode("span", _hoisted_33, toDisplayString(row.username), 1),
                    createBaseVNode("span", _hoisted_34, [
                      createBaseVNode("span", null, toDisplayString(row.progress) + "% completed", 1)
                    ])
                  ])
                ], 64)) : column.key === "status" ? (openBlock(), createBlock(_component_VTag, {
                  key: 1,
                  class: "tag is-rounded",
                  color: row.status === "Online" ? "green" : row.status === "Busy" ? "orange" : void 0
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(row.status), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])) : column.key === "actions" ? (openBlock(), createBlock(_component_VAction, {
                  key: 2,
                  class: "action-button is-dark-outlined is-pushed-mobile"
                }, {
                  default: withCtx(() => [
                    _hoisted_35
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_36, toDisplayString(value), 1))
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
