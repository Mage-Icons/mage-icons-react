"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FlagIcon = _ref => {
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
    d: "M4.89746 14.6974C4.89746 14.6974 5.8764 13.7184 8.8132 13.7184C11.75 13.7184 11.75 15.6763 14.6868 15.6763C16.0445 15.6162 17.3762 15.2832 18.6025 14.6974V4.90801C17.3762 5.49389 16.0445 5.82682 14.6868 5.88695C11.75 5.88695 11.75 3.92908 8.8132 3.92908C5.8764 3.92908 4.89746 4.90801 4.89746 4.90801V14.6974Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.89746 20.571V4.90802",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = FlagIcon;
exports.default = _default;