const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.5829 9.66667C15.8095 8.09697 14.043 7 11.9876 7C9.38854 7 7.25148 8.75408 7 11"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.4939 9.72222H16.4001C16.7315 9.72222 17.0001 9.45359 17.0001 9.12222V7.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.41707 13.6667C8.19054 15.6288 9.95698 17 12.0124 17C14.6115 17 16.7485 14.8074 17 12"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.5061 13.6222H7.59992C7.26855 13.6222 6.99992 13.8909 6.99992 14.2222V16.4"
    })
  ]))
}