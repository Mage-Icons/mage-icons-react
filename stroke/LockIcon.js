"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LockIcon = _ref => {
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
    d: "M17 9.6875H7C5.61929 9.6875 4.5 10.7228 4.5 12V18.9375C4.5 20.2147 5.61929 21.25 7 21.25H17C18.3807 21.25 19.5 20.2147 19.5 18.9375V12C19.5 10.7228 18.3807 9.6875 17 9.6875Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.375 9.6875V7.375C7.375 6.14837 7.86228 4.97199 8.72963 4.10463C9.59699 3.23728 10.7734 2.75 12 2.75C13.2266 2.75 14.403 3.23728 15.2704 4.10463C16.1377 4.97199 16.625 6.14837 16.625 7.375V9.6875",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.53128 17.7812H15.4688",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = LockIcon;
exports.default = _default;