"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CoinAIcon = _ref => {
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
    d: "M21.25 9.71429C21.2308 10.5693 20.9537 11.3845 20.473 12C19.0578 14.0114 15.7925 15.4286 12 15.4286C8.2075 15.4286 4.94225 14.0114 3.527 12C3.04631 11.3845 2.76918 10.5693 2.75 9.71429C2.75 6.56 6.894 4 12 4C17.106 4 21.25 6.56 21.25 9.71429Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.25 9.71428V14.2857C21.25 17.44 17.106 20 12 20C6.894 20 2.75 17.44 2.75 14.2857V9.71428",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = CoinAIcon;
exports.default = _default;