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
      d: "M12 7L13.5307 8.30448L15.5355 8.46447L15.6955 10.4693L17 12L15.6955 13.5307L15.5355 15.5355L13.5307 15.6955L12 17L10.4693 15.6955L8.46447 15.5355L8.30448 13.5307L7 12L8.30448 10.4693L8.46447 8.46447L10.4693 8.30448L12 7Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M10.4693 15.6955L12 17V7L10.4693 8.30448L8.46447 8.46447L8.30448 10.4693L7 12L8.30448 13.5307L8.46447 15.5355L10.4693 15.6955Z"
    }),
    _createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
    })
  ]))
}