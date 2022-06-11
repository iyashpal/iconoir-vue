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
      d: "M1 16V4H19"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16 8H22.4C22.7314 8 23 8.26863 23 8.6V19.4C23 19.7314 22.7314 20 22.4 20H16M16 8V20M16 8H12M16 20H12M12 20H5.6C5.26863 20 5 19.7314 5 19.4V8.6C5 8.26863 5.26863 8 5.6 8H12M12 20V8"
    })
  ]))
}