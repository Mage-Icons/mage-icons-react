"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MouseIcon = _ref => {
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
    d: "M19.7452 11.3058V15.1154C19.7452 18.9363 16.3029 22 12 22C7.69708 22 4.25475 18.9019 4.25475 15.1154V11.3058H19.7452Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.1394 2V9.58461H4.25475V8.88467C4.34619 7.08834 5.10089 5.38982 6.37273 4.11798C7.64457 2.84614 9.34309 2.09144 11.1394 2Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.7452 8.88467V9.58461H12.8606V2C14.6561 2.09396 16.3531 2.84947 17.6245 4.1208C18.8958 5.39213 19.6513 7.0892 19.7452 8.88467Z",
    fill: "currentColor"
  }));
};
var _default = MouseIcon;
exports.default = _default;