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
      d: "M2 19.4V4.6C2 4.26863 2.26863 4 2.6 4H17.4C17.7314 4 18 4.26863 18 4.6V19.4C18 19.7314 17.7314 20 17.4 20H2.6C2.26863 20 2 19.7314 2 19.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M22 6V18"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M11 14.5C11 15.3284 10.3284 16 9.5 16C8.67157 16 8 15.3284 8 14.5C8 13.6716 8.67157 13 9.5 13C10.3284 13 11 13.6716 11 14.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M11 14.5C11 15.3284 10.3284 16 9.5 16C8.67157 16 8 15.3284 8 14.5C8 13.6716 8.67157 13 9.5 13C10.3284 13 11 13.6716 11 14.5ZM11 14.5V8.6C11 8.26863 11.2686 8 11.6 8H13"
    })
  ]))
}