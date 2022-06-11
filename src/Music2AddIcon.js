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
      d: "M16 10H19M22 10H19M19 10V7M19 10V13"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7 16V19C7 20.1046 6.10457 21 5 21H4C2.89543 21 2 20.1046 2 19V18C2 16.8954 2.89543 16 4 16H7ZM7 16V8M7 8V4L12 3V7L7 8Z"
    })
  ]))
}