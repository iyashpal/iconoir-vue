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
      d: "M4.36463 19.787L11.6678 13.2953C11.8573 13.1269 12.1427 13.1269 12.3322 13.2953L19.6354 19.787C20.0155 20.1249 19.707 20.7486 19.2078 20.6515L12.0954 19.2686C12.0324 19.2563 11.9676 19.2563 11.9046 19.2686L4.79225 20.6515C4.29295 20.7486 3.98446 20.1249 4.36463 19.787Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 10.5V4M12 4L8 6.5M12 4L16 6.5"
    })
  ]))
}