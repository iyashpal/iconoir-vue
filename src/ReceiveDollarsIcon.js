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
      d: "M10 8.23077C9.20085 7.49308 7.79346 6.97998 6.5 6.94785M3 15.2308C3.75189 16.1562 5.1499 16.684 6.5 16.7288M6.5 6.94785C4.96102 6.90962 3.58333 7.55229 3.58333 9.3077C3.58333 12.5385 10 10.9231 10 14.1538C10 15.9965 8.2922 16.7882 6.5 16.7288M6.5 6.94785V5M6.5 16.7288V19"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 12H13M13 12L16.84 8M13 12L16.84 16"
    })
  ]))
}