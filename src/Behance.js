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
      d: "M8.19718 11.2174C13.2676 11.2174 13.2676 18 8.19718 18C5.33701 18 2 18 2 18V11.2174M8.19718 11.2174C5.33701 11.2174 2 11.2174 2 11.2174M8.19718 11.2174C13.2676 11.2174 13.2676 5.00001 8.19718 5C5.94366 5 2 5 2 5V11.2174"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18 9C15.7909 9 14 11.0147 14 13.5H22C22 11.0147 20.2091 9 18 9Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14 13.5C14 15.9853 15.7909 18 18 18C20.7552 18 21.5 16 21.5 16"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.5 6L15.5 6"
    })
  ]))
}