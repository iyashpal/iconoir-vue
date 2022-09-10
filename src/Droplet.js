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
      "stroke-width": "1.5",
      d: "M19 13.8C19 9.82355 12 3 12 3C12 3 5 9.82355 5 13.8C5 17.7765 8.13401 21 12 21C15.866 21 19 17.7765 19 13.8Z"
    })
  ]))
}