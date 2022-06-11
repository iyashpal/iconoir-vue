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
      d: "M9.14286 3.00375L14.8571 3M9.14286 3.00375L2 15.0038M9.14286 3.00375L18.4321 21M14.8571 3L22 15.0038M14.8571 3L5.575 21M18.4321 21H5.575M18.4321 21L22 15.0038M5.575 21L2 15.0038M22 15.0038L2 15.0038"
    })
  ]))
}