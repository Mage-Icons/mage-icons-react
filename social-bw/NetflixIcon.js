"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NetflixIcon = _ref => {
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
    d: "M10.5184 13.1866V21.5C9.94047 21.3286 9.3362 21.2635 8.73502 21.3079C8.09341 21.2778 7.45087 21.3425 6.82816 21.5V2.5L10.5184 13.1866Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.1718 2.5V21.3628L13.7834 11.7599V2.5H17.1718Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.82816 2.5H10.5184L17.1718 21.3903C15.913 21.262 14.6444 21.262 13.3856 21.3903C12.8368 19.9361 6.82816 2.5 6.82816 2.5Z",
    fill: "currentColor"
  }));
};
var _default = NetflixIcon;
exports.default = _default;