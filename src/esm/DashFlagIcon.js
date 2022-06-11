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
      d: "M5 15L5.95039 4.54568C5.97849 4.23663 6.23761 4 6.54793 4H20.343C20.6958 4 20.9725 4.30295 20.9405 4.65432L20.0496 14.4543C20.0215 14.7634 19.7624 15 19.4521 15H5ZM5 15L4.4 21"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 7.5L16 11.5"
    })
  ]))
}