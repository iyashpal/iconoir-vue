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
      d: "M18 19V22"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18 16C18 15 17 14 15 14C14.6978 14 14.355 14 14.0002 14C12.3434 14 11 12.6569 11 11V8.5C11 7.11929 12.1193 6 13.5 6V6H14"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M22 16C22 11.5 20 10.5 18 10C20 9.5 22 9 22 6C22 3 19.5 2 18 2"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M22 19V22"
    }),
    _createElementVNode("rect", {
      width: "12",
      height: "3",
      x: "2",
      y: "19",
      stroke: "currentColor",
      "stroke-width": "1.5",
      rx: "0.6"
    })
  ]))
}