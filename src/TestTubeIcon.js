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
      d: "M6.1414 19.995C8.59885 21.7157 10.4224 19.9831 11.4592 18.5025L18.7592 8.07692L20.7255 7.0122L14.1723 2.42358L5.7251 14.4875C4.68838 15.9681 3.68394 18.2743 6.1414 19.995Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.091 11.0194C13.2146 10.1673 11.6877 11.801 8.81128 10.9489"
    })
  ]))
}