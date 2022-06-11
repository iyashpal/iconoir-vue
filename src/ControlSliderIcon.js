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
      d: "M6.75469 17.2828L5.32612 7.28284C5.154 6.07798 6.08892 5 7.30602 5H10.694C11.9111 5 12.846 6.07797 12.6739 7.28284L11.2453 17.2828C11.1046 18.2681 10.2607 19 9.26541 19H8.73459C7.73929 19 6.89545 18.2681 6.75469 17.2828Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2 12L6 12M22 12L12 12"
    })
  ]))
}