"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ArrowDownIcon = _ref => {
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
    d: "M12 20L12 4",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.33941 12.9675L10.9123 19.5404C11.0546 19.6839 11.224 19.7979 11.4108 19.8757C11.5975 19.9535 11.7977 19.9936 12 19.9936C12.2023 19.9936 12.4025 19.9535 12.5892 19.8757C12.776 19.7979 12.9454 19.6839 13.0878 19.5404L19.6606 12.9675",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = ArrowDownIcon;
exports.default = _default;