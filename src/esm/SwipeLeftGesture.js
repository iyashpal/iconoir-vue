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
      d: "M10 12C10 15.3137 12.6863 18 16 18C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6C12.6863 6 10 8.68629 10 12ZM10 12H2M2 12L5 9M2 12L5 15"
    })
  ]))
}