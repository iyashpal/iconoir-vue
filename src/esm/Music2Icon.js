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
      d: "M12 16V19C12 20.1046 11.1046 21 10 21H9C7.89543 21 7 20.1046 7 19V18C7 16.8954 7.89543 16 9 16H12ZM12 16V8M12 8V4L17 3V7L12 8Z"
    })
  ]))
}