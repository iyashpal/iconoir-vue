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
      d: "M5.3328 16C5.11669 15.3065 5 14.5673 5 13.8C5 9.82355 12 3 12 3C12 3 15.7476 6.65312 17.7586 10.1711M5.3328 16C6.23671 18.9004 8.87998 21 12 21C15.866 21 19 17.7765 19 13.8C19 12.7331 18.4961 11.4612 17.7586 10.1711M5.3328 16L17.7586 10.1711"
    })
  ]))
}