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
      d: "M2.76923 13L2.13717 9.71331C2.06601 9.34327 2.34956 9 2.72638 9H21.2736C21.6504 9 21.934 9.34327 21.8628 9.71331L21.2308 13M2.76923 13H21.2308M2.76923 13L3.38462 17M21.2308 13L20.6154 17M20.6154 17L20.0783 20.4912C20.0332 20.7839 19.7814 21 19.4852 21H4.51475C4.21861 21 3.96676 20.7839 3.92173 20.4912L3.38462 17M20.6154 17H3.38462"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M8 9V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V9"
    })
  ]))
}