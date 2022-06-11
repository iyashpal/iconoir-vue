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
      d: "M12 13.1538V21"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M17 8.38452V11.1538C17 12.2583 16.1046 13.1538 15 13.1538H9C7.89543 13.1538 7 12.2583 7 11.1538V8.38452C7 7.27995 7.89543 6.38452 9 6.38452H15C16.1046 6.38452 17 7.27995 17 8.38452Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M15.3334 6.38462V3"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M8.66663 6.38462V3"
    })
  ]))
}