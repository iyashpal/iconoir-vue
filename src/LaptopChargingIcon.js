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
      "stroke-width": "1.5",
      d: "M3.2 14.2222V4C3.2 2.89543 4.09543 2 5.2 2H18.8C19.9046 2 20.8 2.89543 20.8 4V14.2222M3.2 14.2222H20.8M3.2 14.2222L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.6667 5L10 8H14L12.3333 11"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 19L13 19"
    })
  ]))
}