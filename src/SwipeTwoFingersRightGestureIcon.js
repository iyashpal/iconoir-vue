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
      d: "M12 17.5C12 19.433 10.433 21 8.5 21C6.567 21 5 19.433 5 17.5C5 15.567 6.567 14 8.5 14C10.433 14 12 15.567 12 17.5ZM12 17.5H19M19 17.5L16.6 15M19 17.5L16.6 20"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6.5C12 8.433 10.433 10 8.5 10C6.567 10 5 8.433 5 6.5C5 4.567 6.567 3 8.5 3C10.433 3 12 4.567 12 6.5ZM12 6.5H19M19 6.5L16.6 4M19 6.5L16.6 9"
    })
  ]))
}