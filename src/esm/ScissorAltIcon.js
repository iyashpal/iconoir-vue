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
      d: "M10.2361 8C10.7111 7.46924 11 6.76835 11 6C11 4.34315 9.65685 3 8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9C8.8885 9 9.68679 8.61375 10.2361 8ZM10.2361 8L20 16"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.2361 16C10.7111 16.5308 11 17.2316 11 18C11 19.6569 9.65685 21 8 21C6.34315 21 5 19.6569 5 18C5 16.3431 6.34315 15 8 15C8.8885 15 9.68679 15.3863 10.2361 16ZM10.2361 16L20 8"
    })
  ]))
}