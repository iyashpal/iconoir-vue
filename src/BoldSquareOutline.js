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
      d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M12 12H9M12 12C12 12 14.5 12 14.5 9.5C14.5 7.00001 12 7 12 7C12 7 12 7 12 7H9.6C9.26863 7 9 7.26863 9 7.6V12M12 12C12 12 15 12 15 14.75C15 17.5 12 17.5 12 17.5C12 17.5 12 17.5 12 17.5H9.6C9.26863 17.5 9 17.2314 9 16.9V12"
    })
  ]))
}