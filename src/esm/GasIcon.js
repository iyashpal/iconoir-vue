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
      d: "M9 8C9 6.34315 10.3431 5 12 5V5C13.6569 5 15 6.34315 15 8V21.4C15 21.7314 14.7314 22 14.4 22H9.6C9.26863 22 9 21.7314 9 21.4V8Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M9 11H15"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M12 5V2M12 2H11M12 2H13"
    })
  ]))
}