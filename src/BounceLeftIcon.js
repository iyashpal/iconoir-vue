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
      d: "M6 7C4.89543 7 4 6.10457 4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5C8 6.10457 7.10457 7 6 7Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 15.5C18 14.5 15.5 15 13 20C12.5 17 11 12.5 9.5 10"
    })
  ]))
}