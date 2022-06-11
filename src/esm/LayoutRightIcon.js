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
      d: "M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M14.25 9.75V21"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M21 9.75H14.25H3"
    })
  ]))
}