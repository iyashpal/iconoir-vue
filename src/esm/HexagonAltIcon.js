import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("g", { "clip-path": "url(#clip0)" }, [
      _createElementVNode("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M6.32677 2.77363C6.43395 2.58799 6.63202 2.47363 6.84638 2.47363L17.1536 2.47363C17.3679 2.47363 17.566 2.58799 17.6732 2.77363L22.8268 11.6999C22.9339 11.8856 22.9339 12.1143 22.8268 12.2999L17.6732 21.2262C17.566 21.4118 17.3679 21.5262 17.1536 21.5262L6.84638 21.5262C6.63202 21.5262 6.43395 21.4118 6.32677 21.2262L1.17318 12.2999C1.066 12.1143 1.066 11.8856 1.17318 11.6999L6.32677 2.77363Z"
      })
    ]),
    _createElementVNode("defs", null, [
      _createElementVNode("clipPath", { id: "clip0" }, [
        _createElementVNode("rect", {
          width: "24",
          height: "24",
          fill: "white",
          "stroke-width": "1.5"
        })
      ])
    ])
  ]))
}