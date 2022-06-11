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
      d: "M8 21L8 16M8 16V3.57709C8 3.10699 8.5161 2.81949 8.91581 3.06693L17.7061 8.50854C18.0775 8.73848 18.0866 9.2756 17.7231 9.51793L8 16Z"
    })
  ]))
}