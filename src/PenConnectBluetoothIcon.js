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
        d: "M6.50006 17.4999L5.5 21.5L9.23128 20.5672C9.40711 20.5232 9.56769 20.4323 9.69585 20.3041L21.5 8.5C22.3284 7.67157 22.3284 6.32843 21.5 5.5V5.5C20.6716 4.67157 19.3284 4.67157 18.5 5.5L14.5 9.5"
      }),
      _createElementVNode("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M17.5 6.5L20.5 9.5"
      }),
      _createElementVNode("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M5 6.6L12 11.7L8.33333 15V3L12 6.3L5 11.4"
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