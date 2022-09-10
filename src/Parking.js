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
      d: "M10 15.5V12.7M10 12.7C10.4762 12.7 11.7143 12.7 12.8571 12.7C13.5714 12.7 15 12.7 15 10.6C15 8.5 13.5714 8.5 12.8571 8.5L10 8.5V12.7Z"
    }),
    _createElementVNode("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor"
    })
  ]))
}