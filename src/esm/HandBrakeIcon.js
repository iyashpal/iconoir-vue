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
      d: "M12 16V14V12"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9V8.5V8"
    }),
    _createElementVNode("circle", {
      cx: "12",
      cy: "12",
      r: "8",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.9532 4.5C2.12105 6.46488 1 9.10152 1 12C1 14.8985 2.12105 17.5351 3.9532 19.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.0468 4.5C21.8789 6.46488 23 9.10152 23 12C23 14.8985 21.8789 17.5351 20.0468 19.5"
    })
  ]))
}