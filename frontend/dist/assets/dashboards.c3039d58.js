import { d as defineComponent, ak as useRoute, k as resolveComponent, o as openBlock, U as createBlock, w as withCtx, h as createVNode, $ as Transition, a0 as resolveDynamicComponent, m as unref, aw as normalizeProps, ax as guardReactiveProps } from "./vendor.4d9c5eda.js";
import { u as useLayoutSwitcher } from "./layoutSwitcher.656272c8.js";
import "./index.e3db1ffa.js";
var block0 = {};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const layoutSwitcher = useLayoutSwitcher();
    const route = useRoute();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(resolveDynamicComponent(unref(layoutSwitcher).dynamicLayoutComponent), normalizeProps(guardReactiveProps(unref(layoutSwitcher).dynamicLayoutProps)), {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "fade-fast",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: unref(route).fullPath
                  }))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
