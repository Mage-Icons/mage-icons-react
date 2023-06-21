"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FileIcon = _ref => {
  let {
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.5298 7.96002L14.5298 2.96002C14.4263 2.85456 14.2942 2.78156 14.1498 2.75H6.49988C5.90314 2.75 5.33083 2.98704 4.90887 3.409C4.48692 3.83095 4.24988 4.40326 4.24988 5V19C4.24988 19.5967 4.48692 20.169 4.90887 20.591C5.33083 21.013 5.90314 21.25 6.49988 21.25H17.4999C17.7956 21.252 18.0886 21.1945 18.3618 21.0812C18.6349 20.9678 18.8825 20.8008 19.0898 20.59C19.5101 20.1672 19.7472 19.5961 19.7499 19V8.5C19.7523 8.3997 19.734 8.3 19.6961 8.20709C19.6583 8.11418 19.6017 8.03008 19.5298 7.96002ZM14.2999 4.89001L17.5599 8.15002H14.2999V4.89001Z",
    fill: "currentColor"
  }));
};
var _default = FileIcon;
exports.default = _default;