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
      d: "M5 9.5C8.5 9.5 11.5 9.5 15 9.5C15.1615 9.5 19 9.5 19 13.5C19 18 15.2976 18 15 18C12 18 10 18 7 18"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.5 13C7.13317 11.6332 6.36683 10.8668 5 9.5C6.36683 8.13317 7.13317 7.36683 8.5 6"
    })
  ]))
}