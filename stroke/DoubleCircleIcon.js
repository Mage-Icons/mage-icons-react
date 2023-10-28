"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DoubleCircleIcon = _ref => {
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "2.5",
    y: "2.5",
    width: "19",
    height: "19",
    rx: "9.5",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "7.89188",
    y: "7.89191",
    width: "8.21622",
    height: "8.21622",
    rx: "4.10811",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }));
};
var _default = DoubleCircleIcon;
exports.default = _default;