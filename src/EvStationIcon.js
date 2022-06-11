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
      d: "M21 5V9"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M5 19V9C5 7.89543 5.89543 7 7 7H16C17.1046 7 18 7.89543 18 9V19C18 20.1046 17.1046 21 16 21H7C5.89543 21 5 20.1046 5 19Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M5 10V5C5 3.89543 5.89543 3 7 3H16C17.1046 3 18 3.89543 18 5V10"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.1667 11L9.5 14H13.5L11.8333 17"
    })
  ]))
}