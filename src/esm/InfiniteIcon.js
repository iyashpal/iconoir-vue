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
      d: "M14 9L13.75 9.375M10 9C9.08779 7.78565 7.63574 7 6 7C3.23858 7 1 9.23858 1 12C1 14.7614 3.23858 17 6 17C7.63582 17 9.08816 16.2144 10.0004 15L10.3337 14.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10 9L13.9996 15C14.9118 16.2144 16.3642 17 18 17C20.7614 17 23 14.7614 23 12C23 9.23858 20.7614 7 18 7C16.3642 7 14.9118 7.78555 13.9996 9"
    })
  ]))
}