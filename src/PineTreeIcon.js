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
      d: "M12 2L7 6.64286C7 6.64286 10.0424 7 12 7C13.9576 7 17 6.64286 17 6.64286L12 2Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.5 7L5 10.9394C5 10.9394 7.625 12 12 12C16.375 12 19 10.9394 19 10.9394L15.5 7"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.5 11.5L3 15.5231C3 15.5231 5.7 18 12 18C18.3 18 21 15.5231 21 15.5231L17.5 11.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 22L12 19"
    })
  ]))
}