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
      d: "M6.23611 8C6.71115 7.46924 7 6.76835 7 6C7 4.34315 5.65685 3 4 3C2.34315 3 1 4.34315 1 6C1 7.65685 2.34315 9 4 9C4.8885 9 5.68679 8.61375 6.23611 8ZM6.23611 8L16 16"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17 12H17.5H18"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M22 12H22.5H23"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.23611 16C6.71115 16.5308 7 17.2316 7 18C7 19.6569 5.65685 21 4 21C2.34315 21 1 19.6569 1 18C1 16.3431 2.34315 15 4 15C4.8885 15 5.68679 15.3863 6.23611 16ZM6.23611 16L16 8"
    })
  ]))
}