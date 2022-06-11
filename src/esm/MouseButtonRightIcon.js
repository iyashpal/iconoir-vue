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
      d: "M4 10V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V9C20 5.13401 16.866 2 13 2H12C7.58172 2 4 5.58172 4 10Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M12 2V8.4C12 8.73137 12.2686 9 12.6 9H20"
    })
  ]))
}