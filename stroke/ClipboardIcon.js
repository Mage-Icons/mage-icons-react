"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ClipboardIcon = _ref => {
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
    d: "M7.375 5.0625H6.79688C6.33689 5.0625 5.89575 5.24523 5.57049 5.57049C5.24523 5.89575 5.0625 6.33689 5.0625 6.79688V18.9375C5.0625 19.5508 5.30614 20.139 5.73982 20.5727C6.17349 21.0064 6.76169 21.25 7.375 21.25H16.625C17.2383 21.25 17.8265 21.0064 18.2602 20.5727C18.6939 20.139 18.9375 19.5508 18.9375 18.9375V6.79688C18.9375 6.33689 18.7548 5.89575 18.4295 5.57049C18.1043 5.24523 17.6631 5.0625 17.2031 5.0625H16.625",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.4688 2.75H8.53129C7.89271 2.75 7.37504 3.26767 7.37504 3.90625V5.0625C7.37504 5.70108 7.89271 6.21875 8.53129 6.21875H15.4688C16.1074 6.21875 16.625 5.70108 16.625 5.0625V3.90625C16.625 3.26767 16.1074 2.75 15.4688 2.75Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = ClipboardIcon;
exports.default = _default;