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
      d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 22V12M12 2V12M12 12L17 17.5M12 12L17 7M12 12H19"
    })
  ]))
}