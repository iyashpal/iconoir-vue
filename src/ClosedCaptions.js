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
      d: "M1 15V9C1 5.68629 3.68629 3 7 3H17C20.3137 3 23 5.68629 23 9V15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M10.5 10L10.3284 9.82843C9.79799 9.29799 9.07857 9 8.32843 9V9C6.76633 9 5.5 10.2663 5.5 11.8284V12.1716C5.5 13.7337 6.76633 15 8.32843 15V15C9.07857 15 9.79799 14.702 10.3284 14.1716L10.5 14"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M18.5 10L18.3284 9.82843C17.798 9.29799 17.0786 9 16.3284 9V9C14.7663 9 13.5 10.2663 13.5 11.8284V12.1716C13.5 13.7337 14.7663 15 16.3284 15V15C17.0786 15 17.798 14.702 18.3284 14.1716L18.5 14"
    })
  ]))
}