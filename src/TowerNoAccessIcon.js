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
      d: "M19.8566 15.2C19.1306 14.4595 18.119 14 17 14C14.7909 14 13 15.7909 13 18C13 19.0902 13.4361 20.0785 14.1434 20.8M19.8566 15.2C20.5639 15.9215 21 16.9098 21 18C21 20.2091 19.2091 22 17 22C15.881 22 14.8694 21.5405 14.1434 20.8M19.8566 15.2L14.1434 20.8"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 22H7C5.89543 22 5 21.1046 5 20V11.1817C5 11.0632 4.96494 10.9474 4.89923 10.8488L3.10077 8.15115C3.03506 8.05259 3 7.93679 3 7.81833V2.6C3 2.26863 3.26863 2 3.6 2H5.4C5.73137 2 6 2.26863 6 2.6V4.4C6 4.73137 6.26863 5 6.6 5H9.4C9.73137 5 10 4.73137 10 4.4V2.6C10 2.26863 10.2686 2 10.6 2H13.4C13.7314 2 14 2.26863 14 2.6V4.4C14 4.73137 14.2686 5 14.6 5H17.4C17.7314 5 18 4.73137 18 4.4V2.6C18 2.26863 18.2686 2 18.6 2H20.4C20.7314 2 21 2.26863 21 2.6V7.81833C21 7.93679 20.9649 8.05259 20.8992 8.15115L20 9.5"
    })
  ]))
}