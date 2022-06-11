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
      d: "M7 16.2485C7 16.0894 6.93679 15.9368 6.82426 15.8243L3.17574 12.1757C3.06321 12.0632 3 11.9106 3 11.7515V4C3 2.89543 3.89543 2 5 2H12H19C20.1046 2 21 2.89543 21 4V11.7515C21 11.9106 20.9368 12.0632 20.8243 12.1757L17.1757 15.8243C17.0632 15.9368 17 16.0894 17 16.2485V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V16.2485Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.5 11.5L10 10.4M14.5 11.5L14 10.4M14 10.4L12 6L10 10.4M14 10.4H10"
    })
  ]))
}