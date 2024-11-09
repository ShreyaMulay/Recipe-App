import _sfc_main$1 from "./SidebarLayout.303238ec.js";
import { d as defineComponent, k as resolveComponent, o as openBlock, U as createBlock, w as withCtx, h as createVNode, $ as Transition, a0 as resolveDynamicComponent, m as unref } from "./vendor.4d9c5eda.js";
import { u as useLayoutSwitcher } from "./layoutSwitcher.656272c8.js";
import "./NotificationsMobileDropdown.db045a6b.js";
import "./viewWrapper.09cfcbc2.js";
import "./index.e3db1ffa.js";
import "./VProgress.3b664865.js";
import "./VAvatar.25d303d4.js";
import "./via-placeholder.9af8280d.js";
import "./fastpizza.4a1e6ce7.js";
import "../../../../demo/avatars/7.jpg";
import "./panels.01df010b.js";
import "./VDropdown.88a14b17.js";
import "./VIcon.5f648d83.js";
import "./useDropdown.49444a32.js";
import "./VPageContent.c0c7defd.js";
import "./Toolbar.a6233278.js";
import "./ToolbarNotification.12593d01.js";
import "../../../../demo/avatars/12.jpg";
import "../../../../demo/avatars/13.jpg";
import "../../../../demo/avatars/25.jpg";
import "./LayoutsMobileSubsidebar.5b895d8d.js";
import "./video.37cdb0dd.js";
import "./VModal.6a1f3e0a.js";
import "./VTabs.60a13f9c.js";
import "./VMessage.638e7596.js";
import "./VTag.1bcb31d5.js";
import "./SearchPanel.6ec1068a.js";
import "./UserPopoverContent.9248eb73.js";
import "./VBlock.d82c11a6.js";
import "./VIconBox.0539b6af.js";
import "./userPopovers.d6593550.js";
import "./ProjectsQuickDropdown.36063200.js";
import "./Sidebar.461c88a6.js";
import "./CircularMenu.32676d19.js";
var elements_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const layoutSwitcher = useLayoutSwitcher();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      const _component_SidebarLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_SidebarLayout, {
        theme: unref(layoutSwitcher).sidebarLayoutTheme,
        "open-on-mounted": "",
        "default-sidebar": "elements"
      }, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "translate-page-y",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
});
export { _sfc_main as default };
