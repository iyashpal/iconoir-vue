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
      d: "M13.3895 10.1109L5.61133 2.33275C1.31556 6.62852 1.31556 13.5933 5.61133 17.8891C9.9071 22.1849 16.8719 22.1849 21.1677 17.8891L13.3895 10.1109ZM13.3895 10.1109L13.7431 18.2427M13.3895 10.1109H5.61133M13.3895 10.1109L8.0862 15.4142"
    })
  ]))
}