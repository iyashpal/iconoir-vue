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
      x: "2",
      y: "21",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "rotate(-90 2 21)"
    }),
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      x: "17",
      y: "15.5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "rotate(-90 17 15.5)"
    }),
    _createElementVNode("rect", {
      width: "7",
      height: "5",
      x: "2",
      y: "10",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6",
      transform: "rotate(-90 2 10)"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M7 17.5H10.5C11.6046 17.5 12.5 16.6046 12.5 15.5V8.5C12.5 7.39543 11.6046 6.5 10.5 6.5H7"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M12.5 12H17"
    })
  ]))
}