"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HeartIcon = _ref => {
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
    d: "M21.19 12.6832C18.69 18.0932 12.57 20.8832 12.31 21.0032C12.2116 21.0434 12.1062 21.0638 12 21.0632C11.8938 21.0628 11.7886 21.0424 11.69 21.0032C11.44 20.8832 5.30996 18.0932 2.80996 12.6832C1.25996 9.31324 2.11996 5.68324 3.80996 4.12324C4.40192 3.61597 5.10576 3.2563 5.86367 3.07377C6.62158 2.89125 7.41194 2.89108 8.16994 3.07325C9.72094 3.42582 11.0755 4.36465 11.95 5.69325C12.8261 4.3618 14.1848 3.42248 15.7399 3.07325C16.4979 2.89108 17.2883 2.89125 18.0462 3.07377C18.8041 3.2563 19.508 3.61597 20.0999 4.12324C21.8799 5.68324 22.75 9.31324 21.19 12.6832Z",
    fill: "currentColor"
  }));
};
var _default = HeartIcon;
exports.default = _default;