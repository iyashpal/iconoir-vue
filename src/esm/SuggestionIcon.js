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
      "stroke-width": "1.5",
      d: "M3 3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V17.4C21 17.7314 20.7314 18 20.4 18H16.2592C16.0938 18 15.9357 18.0683 15.8223 18.1888L12.4369 21.7858C12.2 22.0375 11.8 22.0375 11.5631 21.7858L8.17768 18.1888C8.06429 18.0683 7.90619 18 7.74076 18H3.6C3.26863 18 3 17.7314 3 17.4V3.6Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 7L13.4254 9.57457L16 11L13.4254 12.4254L12 15L10.5746 12.4254L8 11L10.5746 9.57457L12 7Z"
    })
  ]))
}