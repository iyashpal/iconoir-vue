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
      d: "M4 8.5H5.75M5.75 8.5C6.7165 8.5 7.5 9.2835 7.5 10.25C7.5 11.2165 6.7165 12 5.75 12H3M5.75 8.5C6.7165 8.5 7.5 7.7165 7.5 6.75C7.5 5.7835 6.7165 5 5.75 5H3"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 15C21 18.3137 16.9706 21 12 21C7.02944 21 3 18.3137 3 15"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14 5H13C11.3431 5 10 6.34315 10 8V10M14.5 9.5L14.5 10C14.5 11.1046 13.6046 12 12.5 12H12C10.8954 12 10 11.1046 10 10V9.5C10 8.39543 10.8954 7.5 12 7.5H12.5C13.6046 7.5 14.5 8.39543 14.5 9.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17 8.5V7C17 5.89543 17.8954 5 19 5H19.5C20.6046 5 21.5 5.89543 21.5 7V8.5V10C21.5 11.1046 20.6046 12 19.5 12H19C17.8954 12 17 11.1046 17 10V8.5Z"
    })
  ]))
}