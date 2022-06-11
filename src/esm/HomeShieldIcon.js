import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
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
      d: "M3 9.5L12 4L21 9.5"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12.5019 9.13013L14.5506 9.66126C14.8152 9.72987 15.0015 9.9695 14.9924 10.2427C14.8262 15.232 12 16 12 16C12 16 9.17375 15.232 9.00762 10.2427C8.99852 9.9695 9.18479 9.72987 9.44942 9.66126L11.4981 9.13013C11.8273 9.04479 12.1727 9.04479 12.5019 9.13013Z"
    })
  ]))
}