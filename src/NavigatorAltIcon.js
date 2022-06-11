const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M13.9304 17.869C13.6084 18.7988 12.2931 18.798 11.9721 17.8678L10.3524 13.1739L5.78287 11.2307C4.87733 10.8456 4.96832 9.53344 5.91837 9.27705L16.1497 6.51591C16.9526 6.29922 17.6707 7.0693 17.3986 7.85518L13.9304 17.869Z",
      "clip-rule": "evenodd"
    })
  ]))
}