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
      d: "M14 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V15"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2 7L22 7"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 5.01L5.01 4.99889"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8 5.01L8.01 4.99889"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5.01L11.01 4.99889"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      stroke: "currentColor",
      d: "M22.0822 18.3651C22.576 18.6689 22.5457 19.4082 22.0371 19.4658L19.4705 19.7568L18.3193 22.0691C18.0911 22.5273 17.386 22.3029 17.2695 21.735L16.0142 15.619C15.9157 15.139 16.3471 14.837 16.7644 15.0937L22.0822 18.3651Z",
      "clip-rule": "evenodd"
    })
  ]))
}