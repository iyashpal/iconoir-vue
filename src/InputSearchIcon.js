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
      d: "M21 12V10C21 7.23858 18.7614 5 16 5H8C5.23858 5 3 7.23858 3 10V10C3 12.7614 5.23858 15 8 15H12"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.1241 19.1185C20.6654 18.5758 21 17.827 21 17C21 15.3431 19.6569 14 18 14C16.3431 14 15 15.3431 15 17C15 18.6569 16.3431 20 18 20C18.8299 20 19.581 19.663 20.1241 19.1185ZM20.1241 19.1185L22 21"
    })
  ]))
}