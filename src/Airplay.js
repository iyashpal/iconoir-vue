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
      d: "M6 17L3 17L3 4L21 4L21 17L18 17"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M8.62188 19.0672L11.5008 14.7488C11.7383 14.3926 12.2617 14.3926 12.4992 14.7488L15.3781 19.0672C15.6439 19.4659 15.3581 20 14.8789 20H9.12111C8.64189 20 8.35606 19.4659 8.62188 19.0672Z"
    })
  ]))
}