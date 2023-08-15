"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BatteryChargingIcon = _ref => {
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
    d: "M14.3331 5.86926H5.55584C4.00622 5.86926 2.75 7.12548 2.75 8.6751V15.3248C2.75 16.8744 4.00622 18.1307 5.55584 18.1307H14.3331C15.8827 18.1307 17.1389 16.8744 17.1389 15.3248V8.6751C17.1389 7.12548 15.8827 5.86926 14.3331 5.86926Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.6878 15.0885H20.2222C20.4948 15.0885 20.7562 14.9802 20.949 14.7875C21.1417 14.5947 21.25 14.3333 21.25 14.0607V9.94959C21.25 9.67701 21.1417 9.41559 20.949 9.22284C20.7562 9.0301 20.4948 8.92181 20.2222 8.92181H19.6878",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.9722 8.91663L7.88889 12H12L8.91667 15.0833",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = BatteryChargingIcon;
exports.default = _default;