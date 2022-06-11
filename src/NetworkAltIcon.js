const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "matrix(1 0 0 -1 3 22)"
    }),
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "matrix(1 0 0 -1 8.5 7)"
    }),
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "matrix(1 0 0 -1 14 22)"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M6.5 17V13.5C6.5 12.3954 7.39543 11.5 8.5 11.5H15.5C16.6046 11.5 17.5 12.3954 17.5 13.5V17"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M12 11.5V7"
    })
  ]))
}