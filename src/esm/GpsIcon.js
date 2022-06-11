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
      d: "M22 8.5H19.75C18.7835 8.5 18 9.2835 18 10.25V10.25C18 11.2165 18.7835 12 19.75 12H21.25C22.2165 12 23 12.7835 23 13.75V13.75C23 14.7165 22.2165 15.5 21.25 15.5H18"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 15.5V12.7M10.5 12.7C10.9762 12.7 12.2143 12.7 13.3571 12.7C14.0714 12.7 15.5 12.7 15.5 10.6C15.5 8.5 14.0714 8.5 13.3571 8.5L10.5 8.5V12.7Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.5 9.12734C5.93308 8.73191 5.24362 8.5 4.5 8.5C2.567 8.5 1 10.067 1 12C1 13.933 2.567 15.5 4.5 15.5C6.433 15.5 8 14 8 12H5"
    })
  ]))
}