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
      d: "M19 9.5C15.5 9.5 12.5 9.5 9 9.5C8.83847 9.5 5 9.5 5 13.5C5 18 8.70237 18 9 18C12 18 14 18 17 18"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.5 13C16.8668 11.6332 17.6332 10.8668 19 9.5C17.6332 8.13317 16.8668 7.36683 15.5 6"
    })
  ]))
}