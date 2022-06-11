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
      d: "M12 14.5C15 19 21 18.9706 21 14C21 10 17 7 12 2C7 7 3 10 3 14C3 18.9706 9 19 12 14.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M11.4706 15.4926L8.47059 21.1176C8.25743 21.5173 8.54705 22 9 22H15C15.453 22 15.7426 21.5173 15.5294 21.1176L12.5294 15.4926C12.3035 15.0691 11.6965 15.0691 11.4706 15.4926Z"
    })
  ]))
}