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
      d: "M7 22L17 22"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      d: "M2 17V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12.4851 6.12127L15.5455 6.88638C15.8126 6.95316 16.0011 7.19646 15.9937 7.47168C15.8176 13.9997 12 15 12 15C12 15 8.18239 13.9997 8.00629 7.47168C7.99886 7.19646 8.18738 6.95316 8.45448 6.88638L11.5149 6.12127C11.8334 6.04165 12.1666 6.04165 12.4851 6.12127Z"
    })
  ]))
}