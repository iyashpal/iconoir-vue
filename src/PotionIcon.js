const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
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
      d: "M10 3.99996L14 3.99997V6.56773C14 6.82599 14.1709 7.05522 14.4125 7.14658C22.9367 10.3708 20.9066 22 15 22L9.00001 22C3.09346 22 1.06328 10.3708 9.58754 7.14658C9.8291 7.05521 10 6.82598 10 6.56772V3.99996Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      d: "M6 10L18 10"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M9 2H15"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.6667 13L10 16H14L12.3333 19"
    })
  ]))
}