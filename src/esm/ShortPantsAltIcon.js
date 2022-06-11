import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 16.8H18.9662C19.2706 16.8 19.5267 16.5721 19.5621 16.2698L20.9215 4.66983C20.9633 4.31323 20.6846 4 20.3256 4H3.65888C3.30539 4 3.02851 4.30406 3.0615 4.65601L4.449 19.456C4.47791 19.7643 4.73671 20 5.04638 20H11.4C11.7314 20 12 19.7314 12 19.4V12"
    })
  ]))
}