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
      r: "8",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M19.812 12.9893C21.6252 14.5004 22.5667 15.8535 22.1738 16.6414C21.4428 18.1075 16.3687 17.0617 10.8406 14.3054C5.31236 11.5492 1.42346 8.12624 2.15445 6.6601C2.54636 5.87405 4.18666 5.81005 6.47602 6.34458"
    })
  ]))
}