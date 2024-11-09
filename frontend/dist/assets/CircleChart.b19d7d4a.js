import { d as defineComponent, o as openBlock, a as createElementBlock, f as createBaseVNode } from "./vendor.4d9c5eda.js";
var CircleChart_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("circle", {
  class: "circle-chart__background",
  "stroke-width": "5",
  fill: "none",
  cx: "50%",
  cy: "50%",
  r: "15.91549431"
}, null, -1);
const _hoisted_3 = ["stroke-dasharray"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: { default: 50 },
    size: { default: 60 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "circle-chart",
        viewBox: "0 0 45 45",
        width: props.size,
        height: props.size,
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        _hoisted_2,
        createBaseVNode("circle", {
          class: "circle-chart__circle",
          "stroke-width": "5",
          "stroke-dasharray": `${props.value},100`,
          "stroke-linecap": "round",
          fill: "none",
          cx: "50%",
          cy: "50%",
          r: "15.91549431"
        }, null, 8, _hoisted_3)
      ], 8, _hoisted_1);
    };
  }
});
export { _sfc_main as _ };
