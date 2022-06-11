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
      d: "M6.87172 3.42759L4.23172 12.2276C4.11623 12.6126 4.4045 13 4.80642 13L19.1936 13C19.5955 13 19.8838 12.6126 19.7683 12.2276L17.1283 3.42759C17.0521 3.1738 16.8185 3 16.5536 3L7.44642 3C7.18145 3 6.94786 3.1738 6.87172 3.42759Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8 15L8 13"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8 21H16M12 15L12 21"
    })
  ]))
}