"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ArrowUpIcon = _ref => {
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
    d: "M12 4L12 20",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.6606 11.0325L13.0877 4.45962C12.9454 4.31608 12.776 4.20207 12.5892 4.12433C12.4025 4.04647 12.2023 4.00642 12 4.00642C11.7977 4.00642 11.5975 4.04647 11.4108 4.12433C11.224 4.20207 11.0546 4.31608 10.9122 4.45962L4.3394 11.0325",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = ArrowUpIcon;
exports.default = _default;