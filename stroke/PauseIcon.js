"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PauseIcon = _ref => {
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
    d: "M8.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H8.5C9.05229 19.5 9.5 19.0523 9.5 18.5V5.5C9.5 4.94772 9.05229 4.5 8.5 4.5Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.5 4.5H15.5C14.9477 4.5 14.5 4.94772 14.5 5.5V18.5C14.5 19.0523 14.9477 19.5 15.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = PauseIcon;
exports.default = _default;