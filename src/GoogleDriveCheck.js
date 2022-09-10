const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
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
        d: "M9.14286 3.00375L14.8571 3M9.14286 3.00375L2 15.0038M9.14286 3.00375L14.0446 12.5M14.8571 3L5.575 21M14.8571 3L21.5 14M5.575 21L2 15.0038M5.575 21H12.0036M2 15.0038H12.5"
      }),
      _createElementVNode("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15 19L18 22L23 17"
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