"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DashboardBarIcon = _ref => {
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
    x: "2.74999",
    y: "2.75",
    width: "18.5",
    height: "18.5",
    rx: "6",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.67197 16.2224V11.1233",
    stroke: "currentColor",
    "stroke-width": "1.6",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.1233 16.2224L12.1233 7.77765",
    stroke: "currentColor",
    "stroke-width": "1.6",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.328 16.2224L16.328 9.8194",
    stroke: "currentColor",
    "stroke-width": "1.6",
    "stroke-linecap": "round"
  }));
};
var _default = DashboardBarIcon;
exports.default = _default;