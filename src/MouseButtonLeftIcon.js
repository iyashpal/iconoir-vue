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
      d: "M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V9C4 5.13401 7.13401 2 11 2H12C16.4183 2 20 5.58172 20 10Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M12 2V8.4C12 8.73137 11.7314 9 11.4 9H4"
    })
  ]))
}