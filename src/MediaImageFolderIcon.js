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
      d: "M22 12.6V20.4C22 20.7314 21.7314 21 21.4 21H13.6C13.2686 21 13 20.7314 13 20.4V12.6C13 12.2686 13.2686 12 13.6 12H21.4C21.7314 12 22 12.2686 22 12.6Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.51L19.51 14.4989"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 18.2L16.5 17L22 19"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2 10V3.6C2 3.26863 2.26863 3 2.6 3H8.77805C8.92127 3 9.05977 3.05124 9.16852 3.14445L12.3315 5.85555C12.4402 5.94876 12.5787 6 12.722 6H21.4C21.7314 6 22 6.26863 22 6.6V9M2 10V18.4C2 18.7314 2.26863 19 2.6 19H10M2 10H10"
    })
  ]))
}