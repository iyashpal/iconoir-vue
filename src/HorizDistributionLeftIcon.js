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
      d: "M19 17V7M19 17H13.6C13.2686 17 13 16.7314 13 16.4V7.6C13 7.26863 13.2686 7 13.6 7H19M19 17V20M19 7V4"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 17V7M9 17H5.6C5.26863 17 5 16.7314 5 16.4V7.6C5 7.26863 5.26863 7 5.6 7H9M9 17V20M9 7V4"
    })
  ]))
}