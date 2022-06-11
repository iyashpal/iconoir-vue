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
      d: "M19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5C21 6.10457 20.1046 7 19 7Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 15.5C7 14.5 9.5 15 12 20C12.5 17 14 12.5 15.5 10"
    })
  ]))
}