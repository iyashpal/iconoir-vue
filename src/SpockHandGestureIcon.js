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
      d: "M18 7.5L18.9187 7.65312C20.0497 7.84162 20.791 8.94046 20.5423 10.0598L20.0143 12.4357C20.0048 12.4784 20 12.5223 20 12.5661C20 15.1904 20 17.5 20 17.5C20 17.5 20 17.5 20 17.5C20 19.5 18.4 21.5 16 21.5C14.1259 21.5 11.0119 21.5 9.41979 21.5C8.83594 21.5 8.28132 21.2449 7.90136 20.8016L3.35288 15.495C2.85811 14.9178 2.84375 14.0703 3.31868 13.4767V13.4767C3.93438 12.707 5.09624 12.6814 5.74526 13.4231L8 16V12.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 5L8.20966 5.13172C7.03189 5.32802 6.28739 6.50588 6.61542 7.65395L8 12.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 12.5L8.92263 4.60598C8.69579 3.744 9.25886 2.87352 10.1381 2.72699V2.72699C10.9097 2.59838 11.6523 3.07873 11.8514 3.83526L14 12"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17 12.5L18 7.5L18.2475 6.01515C18.3869 5.17836 17.8216 4.38694 16.9848 4.24747V4.24747C16.16 4.11 15.3767 4.65763 15.2226 5.47955L14 12"
    })
  ]))
}