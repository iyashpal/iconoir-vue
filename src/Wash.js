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
      d: "M22 5L20.0455 17.3135C19.8913 18.2849 19.0538 19 18.0702 19H5.92981C4.94628 19 4.10872 18.2849 3.95454 17.3135L2 5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 11C19 11 16.5 8 16.5 8C16.5 8 14.3513 11 12 11C9.64873 11 7.5 8 7.5 8C7.5 8 5 11 3 11"
    })
  ]))
}