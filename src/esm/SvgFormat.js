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
      d: "M4.5 15H6.5C7.32843 15 8 14.3284 8 13.5V13.5C8 12.6716 7.32843 12 6.5 12H6C5.17157 12 4.5 11.3284 4.5 10.5V10.5C4.5 9.67157 5.17157 9 6 9H7.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 9L12 15L13.5 9"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 9H16.5V15L19.5 15V12.6"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M4 6V3.6C4 3.26863 4.26863 3 4.6 3H19.4C19.7314 3 20 3.26863 20 3.6V6"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M4 18V20.4C4 20.7314 4.26863 21 4.6 21H19.4C19.7314 21 20 20.7314 20 20.4V18"
    })
  ]))
}