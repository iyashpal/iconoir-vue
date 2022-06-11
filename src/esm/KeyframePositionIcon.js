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
      d: "M14.73 8.36L12.48 11.36C12.24 11.68 11.76 11.68 11.52 11.36L9.27 8.36C9.11 8.14667 9.11 7.85333 9.27 7.64L11.52 4.64C11.76 4.32 12.24 4.32 12.48 4.64L14.73 7.64C14.89 7.85333 14.89 8.14667 14.73 8.36Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 20H12L21 20M12 17V15"
    })
  ]))
}