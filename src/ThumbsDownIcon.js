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
      d: "M16.4724 3.5H4.1C3.76863 3.5 3.5 3.76863 3.5 4.1V13.9C3.5 14.2314 3.76863 14.5 4.1 14.5H6.86762C7.57015 14.5 8.22116 14.8686 8.5826 15.471L11.293 19.9884C11.8779 20.9631 13.2554 21.0558 13.9655 20.1681C14.3002 19.7497 14.4081 19.1937 14.2541 18.6804L13.2317 15.2724C13.1162 14.8874 13.4045 14.5 13.8064 14.5H18.3815C19.7002 14.5 20.658 13.246 20.311 11.9738L18.4019 4.97376C18.1646 4.10364 17.3743 3.5 16.4724 3.5Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7 14.5L7 3.5"
    })
  ]))
}