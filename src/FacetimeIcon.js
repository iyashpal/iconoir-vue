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
      d: "M2 16V8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      d: "M6 13V11C6 9.89543 6.89543 9 8 9H11C12.1046 9 13 9.89543 13 11V13C13 14.1046 12.1046 15 11 15H8C6.89543 15 6 14.1046 6 13Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.0399 9.22L13.9733 11.52C13.6533 11.76 13.6533 12.24 13.9733 12.48L17.0399 14.78C17.4355 15.0767 17.9999 14.7944 17.9999 14.3V9.7C17.9999 9.20557 17.4355 8.92334 17.0399 9.22Z"
    })
  ]))
}