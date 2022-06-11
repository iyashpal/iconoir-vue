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
      d: "M1.5 8.5V12M1.5 15.5V12M1.5 12H6M6 12L6 8.5M6 12L6 15.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.5 15.5V12.7M20.3571 12.7C21.0714 12.7 22.5 12.7 22.5 10.6C22.5 8.5 21.0714 8.5 20.3571 8.5L17.5 8.5V12.7M20.3571 12.7C19.2143 12.7 17.9762 12.7 17.5 12.7M20.3571 12.7L22.5 15.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.5 12V8.5C12 8.5 14.5 8.5 14.5 12C14.5 15.5 12 15.5 9.5 15.5V12Z"
    })
  ]))
}