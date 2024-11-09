import { _ as _sfc_main$1 } from "./ApexDashboard.48e9d118.js";
import { d as defineComponent, S as useHead, o as openBlock, a as createElementBlock, h as createVNode } from "./vendor.4d9c5eda.js";
import { u as useViewWrapper } from "./viewWrapper.09cfcbc2.js";
import "./dayjs.min.d6ba5f12.js";
import "./index.e3db1ffa.js";
import "./apex-formatters.cc861992.js";
import "./vue3-apexcharts.common.3e3e3c1b.js";
import "./vue.runtime.esm-bundler.03cd2007.js";
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Charts Apex");
    useHead({
      title: "Charts Apex - Navbar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ApexDashboard = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ApexDashboard)
      ]);
    };
  }
});
export { _sfc_main as default };
