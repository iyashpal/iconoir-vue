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
      d: "M23 10V14"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M1 16V8C1 6.89543 1.89543 6 3 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H3C1.89543 18 1 17.1046 1 16Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M4 14.4V9.6C4 9.26863 4.26863 9 4.6 9H9.4C9.73137 9 10 9.26863 10 9.6V14.4C10 14.7314 9.73137 15 9.4 15H4.6C4.26863 15 4 14.7314 4 14.4Z"
    })
  ]))
}