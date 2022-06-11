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
      "stroke-width": "1.5",
      d: "M21 3.6V12H12V3H20.4C20.7314 3 21 3.26863 21 3.6Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M21 20.4V12H12V21H20.4C20.7314 21 21 20.7314 21 20.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M3 12V3.6C3 3.26863 3.26863 3 3.6 3H12V12H3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M3 12V20.4C3 20.7314 3.26863 21 3.6 21H12V12H3Z"
    })
  ]))
}