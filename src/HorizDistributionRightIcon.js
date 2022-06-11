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
      d: "M5 17V7M5 17H10.4C10.7314 17 11 16.7314 11 16.4V7.6C11 7.26863 10.7314 7 10.4 7H5M5 17V20M5 7V4"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 17V7M15 17H18.4C18.7314 17 19 16.7314 19 16.4V7.6C19 7.26863 18.7314 7 18.4 7H15M15 17V20M15 7V4"
    })
  ]))
}