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
      d: "M2 15.5V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V15.5M2 15.5V17.4C2 17.7314 2.26863 18 2.6 18H21.4C21.7314 18 22 17.7314 22 17.4V15.5M2 15.5H22M9 22H10.5M10.5 22V18M10.5 22H13.5M13.5 22H15M13.5 22L13.5 18"
    })
  ]))
}