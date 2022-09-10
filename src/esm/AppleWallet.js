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
      d: "M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      d: "M3 15H9.4C9.73137 15 10.0053 15.2783 10.1504 15.5762C10.3564 15.9991 10.8442 16.5 12 16.5C13.1558 16.5 13.6436 15.9991 13.8496 15.5762C13.9947 15.2783 14.2686 15 14.6 15H21"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      d: "M3 7H21"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      d: "M3 11H21"
    })
  ]))
}