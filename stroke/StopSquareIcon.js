"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StopSquareIcon = _ref => {
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
    d: "M15.0077 7.98999H8.99273C8.43907 7.98999 7.99023 8.43882 7.99023 8.99249V15.0075C7.99023 15.5611 8.43907 16.01 8.99273 16.01H15.0077C15.5614 16.01 16.0102 15.5611 16.0102 15.0075V8.99249C16.0102 8.43882 15.5614 7.98999 15.0077 7.98999Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "2.75",
    y: "2.75",
    width: "18.5",
    height: "18.5",
    rx: "6",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }));
};
var _default = StopSquareIcon;
exports.default = _default;