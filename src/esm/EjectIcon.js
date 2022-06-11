import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-width": "1.5",
    viewBox: "0 0 24 24"
  }, [
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M5 14L4.40799 13.5395C4.23212 13.7657 4.20041 14.0722 4.32626 14.3295C4.45212 14.5868 4.71355 14.75 5 14.75V14ZM19 14V14.75C19.2865 14.75 19.5479 14.5868 19.6737 14.3295C19.7996 14.0722 19.7679 13.7657 19.592 13.5395L19 14ZM5 14.75H19V13.25H5V14.75ZM10.6186 5.55443L4.40799 13.5395L5.59201 14.4605L11.8027 6.47534L10.6186 5.55443ZM19.592 13.5395L13.3814 5.55442L12.1973 6.47534L18.408 14.4605L19.592 13.5395ZM11.8027 6.47534C11.9028 6.34665 12.0972 6.34665 12.1973 6.47534L13.3814 5.55442C12.6807 4.65362 11.3193 4.65362 10.6186 5.55443L11.8027 6.47534Z"
    }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M5 17.25C4.58579 17.25 4.25 17.5858 4.25 18C4.25 18.4142 4.58579 18.75 5 18.75V17.25ZM19 18.75C19.4142 18.75 19.75 18.4142 19.75 18C19.75 17.5858 19.4142 17.25 19 17.25V18.75ZM5 18.75H19V17.25H5V18.75Z"
    })
  ]))
}