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
        d: "M4 13L13.5 13M4 13L8 17.5M4 13L8 8.5M13.5 13L18.5 4M13.5 13L18.5 20M18.5 4L12.5 5M18.5 4L20 9.5M18.5 20L20 14.5M18.5 20L12.5 19.5"
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