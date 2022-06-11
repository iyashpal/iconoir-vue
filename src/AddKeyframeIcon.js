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
      d: "M15 5H18M21 5H18M18 5V2M18 5V8"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.8476 13.317L10.5052 18.2798C9.70833 19.1905 8.29167 19.1905 7.49485 18.2798L3.15238 13.317C2.49259 12.563 2.49259 11.437 3.15238 10.683L7.49485 5.72018C8.29167 4.80952 9.70833 4.80952 10.5052 5.72017L14.8476 10.683C15.5074 11.437 15.5074 12.563 14.8476 13.317Z"
    })
  ]))
}