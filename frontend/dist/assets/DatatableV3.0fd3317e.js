import { _ as _sfc_main$2 } from "./VSimpleDatatables.a1d04600.js";
import { _ as __unplugin_components_2 } from "./WidgetDropdown.f8bffc93.js";
import { _ as _sfc_main$1 } from "./VAvatar.25d303d4.js";
import { e as __unplugin_components_1 } from "./index.e3db1ffa.js";
import { d as defineComponent, o as openBlock, U as createBlock, w as withCtx, f as createBaseVNode, h as createVNode, a as createElementBlock, l as renderList, t as toDisplayString, m as unref, F as Fragment } from "./vendor.4d9c5eda.js";
const datatableV3 = [
  [
    "/images/icons/files/pdf.svg",
    "Company UX Guide",
    "4.7 mb",
    "1.5.2",
    "/images/avatars/svg/vuero-1.svg",
    "Erik K.",
    "2 weeks ago"
  ],
  [
    "/images/icons/files/sheet.svg",
    "Tech Summit Expenses",
    "34 kb",
    "1.1.3",
    "/demo/avatars/7.jpg",
    "Alice C.",
    "3 days ago"
  ],
  [
    "/images/icons/files/doc-2.svg",
    "Project Outline",
    "77 kb",
    "1.0.0",
    "/demo/avatars/18.jpg",
    "Esteban C.",
    "5 days ago"
  ],
  [
    "/images/icons/files/ppt.svg",
    "UX Presentation",
    "2.3 mb",
    "1.0.0",
    "/demo/avatars/13.jpg",
    "Tara S.",
    "2 weeks ago"
  ],
  [
    "/images/icons/files/ai.svg",
    "Website Homepage Redesign",
    "4.8 mb",
    "1.0.0",
    "/demo/avatars/5.jpg",
    "Mary L.",
    "2 weeks ago"
  ],
  [
    "/images/icons/files/doc-2.svg",
    "UX Ramp Up for Interns",
    "1.8 mb",
    "1.2.0",
    "/images/avatars/svg/vuero-1.svg",
    "Erik K.",
    "2 months ago"
  ],
  [
    "/images/icons/files/pdf.svg",
    "2020 Projects Digest",
    "8.9 mb",
    "1.3.4",
    "/demo/avatars/27.jpg",
    "Carmen E.",
    "3 weeks ago"
  ],
  [
    "/images/icons/files/doc-2.svg",
    "Financial Report - 2020",
    "1.2 mb",
    "1.0.4",
    "/demo/avatars/10.jpg",
    "Henry G.",
    "5 days ago"
  ],
  [
    "/images/icons/files/doc-2.svg",
    "2020 Supplier Expenses",
    "250 kb",
    "1.0.0",
    "/demo/avatars/38.jpg",
    "Christie D.",
    "6 days ago"
  ],
  [
    "/images/icons/files/ai.svg",
    "Website About Page Redesign",
    "3.9 mb",
    "1.2.1",
    "/demo/avatars/5.jpg",
    "Mary L.",
    "4 days ago"
  ],
  [
    "/images/icons/files/ai.svg",
    "Website Pricing Page Redesign",
    "2.6 mb",
    "1.1.0",
    "/demo/avatars/5.jpg",
    "Mary L.",
    "3 days ago"
  ],
  [
    "/images/icons/files/doc-2.svg",
    "Financial Report - 2019",
    "1.1 mb",
    "1.3.2",
    "/demo/avatars/10.jpg",
    "Henry G.",
    "1 year ago"
  ],
  [
    "/images/icons/files/doc-2.svg",
    "2019 Supplier Expenses",
    "34 kb",
    "1.2.1",
    "/demo/avatars/38.jpg",
    "Christie D.",
    "1 year ago"
  ],
  [
    "/images/icons/files/ai.svg",
    "Website Contact Page Redesign",
    "5.8 mb",
    "1.4.1",
    "/demo/avatars/5.jpg",
    "Mary L.",
    "1 week ago"
  ],
  [
    "/images/icons/files/pdf.svg",
    "Company Brand Book",
    "5.3 mb",
    "1.6.3",
    "/images/avatars/svg/vuero-1.svg",
    "Erik K.",
    "3 months ago"
  ],
  [
    "/images/icons/files/pdf.svg",
    "2019 Projects Digest",
    "4.7 mb",
    "1.2.1",
    "/demo/avatars/27.jpg",
    "Carmen E.",
    "1 year ago"
  ]
];
const _hoisted_1 = {
  scope: "col",
  "data-sortable": "false"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox is-primary is-outlined is-circle" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "head-checkbox",
    type: "checkbox"
  }),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, "Type", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Name", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Size", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Version", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Last Updated", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, null, -1);
const _hoisted_9 = { class: "checkbox is-primary is-outlined is-circle" };
const _hoisted_10 = ["id"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_12 = ["src"];
const _hoisted_13 = { class: "has-dark-text dark-inverted is-font-alt is-weight-600 rem-90" };
const _hoisted_14 = { class: "light-text" };
const _hoisted_15 = { class: "light-text" };
const _hoisted_16 = { class: "flex-media" };
const _hoisted_17 = { class: "meta" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VAvatar = _sfc_main$1;
      const _component_WidgetDropdown = __unplugin_components_2;
      const _component_VSimpleDatatables = _sfc_main$2;
      return openBlock(), createBlock(_component_VSimpleDatatables, null, {
        default: withCtx(() => [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", _hoisted_1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                })
              ]),
              _hoisted_3,
              _hoisted_4,
              _hoisted_5,
              _hoisted_6,
              _hoisted_7,
              _hoisted_8
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datatableV3), (row, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", null, [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("label", _hoisted_9, [
                        createBaseVNode("input", {
                          id: `row-checkbox-${index}`,
                          type: "checkbox"
                        }, null, 8, _hoisted_10),
                        _hoisted_11
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("img", {
                    class: "file-icon",
                    src: row[0],
                    alt: ""
                  }, null, 8, _hoisted_12)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_13, toDisplayString(row[1]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_14, toDisplayString(row[2]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_15, toDisplayString(row[3]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(_component_VAvatar, {
                      picture: row[4],
                      size: "small"
                    }, null, 8, ["picture"]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("span", null, toDisplayString(row[5]), 1),
                      createBaseVNode("span", null, toDisplayString(row[6]), 1)
                    ])
                  ])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_WidgetDropdown)
                ])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as _ };
