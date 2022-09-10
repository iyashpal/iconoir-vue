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
      d: "M12 8L12 16M12 8H8M12 8H16"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linejoin": "round",
      d: "M2 20.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V20.4C22 20.7314 21.7314 21 21.4 21H2.6C2.26863 21 2 20.7314 2 20.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linejoin": "round",
      d: "M1 13V11H3V13H1Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linejoin": "round",
      d: "M21 13V11H23V13H21Z"
    })
  ]))
}