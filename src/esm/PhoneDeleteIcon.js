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
        d: "M17.1213 7.364L19.2426 5.24268M21.364 3.12136L19.2426 5.24268M19.2426 5.24268L17.1213 3.12136M19.2426 5.24268L21.364 7.364"
      }),
      _createElementVNode("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z"
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