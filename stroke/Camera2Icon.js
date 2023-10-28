"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Camera2Icon = _ref => {
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
    x: "2.75",
    y: "4",
    width: "18.5",
    height: "16",
    rx: "4",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12.5",
    r: "3.75",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 7.00281L17.5 7.00281",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round"
  }));
};
var _default = Camera2Icon;
exports.default = _default;