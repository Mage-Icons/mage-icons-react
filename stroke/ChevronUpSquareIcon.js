"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ChevronUpSquareIcon = _ref => {
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
    d: "M16.414 13.8223L12.7357 10.1439C12.6331 10.0411 12.5113 9.95935 12.3772 9.9037C12.243 9.848 12.0992 9.81934 11.9539 9.81934C11.8087 9.81934 11.6649 9.848 11.5308 9.9037C11.3967 9.95935 11.2749 10.0411 11.1723 10.1439L7.58594 13.8223",
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
var _default = ChevronUpSquareIcon;
exports.default = _default;