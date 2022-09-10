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
      d: "M7.00009 20V9C7.00009 9 3.00004 4 9.50009 4H17.0001C24.0002 4 20.0001 9 20.0001 9V18C20.0001 19.1046 19.1047 20 18.0001 20H7.00009Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.00009 20H6.00009C4.89552 20 4.00009 19.1046 4.00009 18V9C4.00009 9 4.00543e-05 4 6.50009 4H10.0001"
    })
  ]))
}