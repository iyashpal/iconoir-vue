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
      d: "M16.9922 19H19.9922H22.9922"
    }),
    _createElementVNode("rect", {
      width: "6",
      height: "12",
      x: "5",
      y: "2",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "3"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1 10V11C1 14.866 4.13401 18 8 18V18V18C11.866 18 15 14.866 15 11V10"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8 18V22M8 22H5M8 22H11"
    })
  ]))
}