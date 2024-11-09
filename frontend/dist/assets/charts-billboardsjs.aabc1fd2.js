import { _ as _sfc_main$1 } from "./BillboardJsDashboard.aa2f65ea.js";
import { d as defineComponent, S as useHead, o as openBlock, a as createElementBlock, h as createVNode } from "./vendor.4d9c5eda.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./VBillboardJS.71dfa111.js";
import "./index.e3db1ffa.js";
import "./splineSimple.f53c1d5d.js";
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Charts BillboardJS");
    useHead({
      title: "Charts BillboardJS - Navbar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_BillboardJsDashboard = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_BillboardJsDashboard)
      ]);
    };
  }
});
export { _sfc_main as default };
