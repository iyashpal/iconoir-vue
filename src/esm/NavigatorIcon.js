import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M17.8733 15.4753C18.3338 16.345 17.4362 17.3064 16.537 16.9067L11.9994 14.89L7.46178 16.9067C6.56256 17.3064 5.66499 16.345 6.12541 15.4753L11.0838 6.1095C11.4729 5.37447 12.5259 5.37448 12.915 6.1095L17.8733 15.4753Z",
      "clip-rule": "evenodd"
    })
  ]))
}