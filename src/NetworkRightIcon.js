const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "matrix(0 -1 -1 0 22 21)"
    }),
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "matrix(0 -1 -1 0 7 15.5)"
    }),
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "matrix(0 -1 -1 0 22 10)"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M17 17.5H13.5C12.3954 17.5 11.5 16.6046 11.5 15.5V8.5C11.5 7.39543 12.3954 6.5 13.5 6.5H17"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M11.5 12H7"
    })
  ]))
}