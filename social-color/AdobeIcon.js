"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AdobeIcon = _ref => {
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
    d: "M9.44343 3.10352L2 20.8965V3.10352H9.44343Z",
    fill: "#E83E1D"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.0069 9.66965L16.7224 20.8965H13.6381L12.2399 17.3461H8.74438L12.0069 9.66965Z",
    fill: "#E83E1D"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 3.10352V20.8965L14.6525 3.10352H22Z",
    fill: "#E83E1D"
  }));
};
var _default = AdobeIcon;
exports.default = _default;