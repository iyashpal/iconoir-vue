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
      d: "M22 18V6C22 4.34315 20.6569 3 19 3H17C15.3431 3 14 4.34315 14 6V18C14 19.6569 15.3431 21 17 21H19C20.6569 21 22 19.6569 22 18Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H8"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14 12H6M6 12L9 9M6 12L9 15"
    })
  ]))
}