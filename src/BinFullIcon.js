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
      d: "M19.2616 17.0378L20.9383 4.46293C20.9746 4.19069 20.8214 3.92855 20.5664 3.82655L16 2H10.5L9.81818 3.5L5 2L3.20966 3.79034C3.07751 3.92249 3.01449 4.10866 3.03919 4.2939L4.73838 17.0378C4.90325 18.2744 5.6356 19.3632 6.71873 19.9821L7.03861 20.1649C10.1129 21.9217 13.8871 21.9217 16.9614 20.1649L17.2813 19.9821C18.3644 19.3632 19.0968 18.2744 19.2616 17.0378Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M16 2L14 7"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M9 6.5L9.81818 3.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      d: "M3 5.00002C5.57143 7.66668 18.4286 7.66664 21 5.00002"
    })
  ]))
}