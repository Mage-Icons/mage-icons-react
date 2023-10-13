"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DashboardCircleBarIcon = _ref => {
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
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.54993 14.6214V9.37854",
    stroke: "currentColor",
    "stroke-width": "1.6",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.0499 16.3414L12.0499 7.65857",
    stroke: "currentColor",
    "stroke-width": "1.6",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.5499 14.6214V9.37854",
    stroke: "currentColor",
    "stroke-width": "1.6",
    "stroke-linecap": "round"
  }));
};
var _default = DashboardCircleBarIcon;
exports.default = _default;