"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NoteIcon = _ref => {
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
    d: "M21.25 6.86111V13.2025C21.2502 13.4737 21.1967 13.7423 21.0927 13.9928C20.9886 14.2433 20.836 14.4707 20.6436 14.6619L14.6619 20.6436C14.4707 20.836 14.2433 20.9886 13.9928 21.0927C13.7423 21.1967 13.4737 21.2502 13.2025 21.25H6.86111C5.77078 21.25 4.7251 20.8169 3.95412 20.0459C3.18313 19.2749 2.75 18.2292 2.75 17.1389V6.86111C2.75 5.77078 3.18313 4.7251 3.95412 3.95412C4.7251 3.18313 5.77078 2.75 6.86111 2.75H17.1389C18.2292 2.75 19.2749 3.18313 20.0459 3.95412C20.8169 4.7251 21.25 5.77078 21.25 6.86111Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.0556 21.0753L13.5417 16.9642C13.4832 16.4981 13.532 16.0248 13.6844 15.5804C13.8367 15.1361 14.0886 14.7324 14.4208 14.4002C14.753 14.0681 15.1566 13.8162 15.601 13.6638C16.0453 13.5115 16.5186 13.4626 16.9847 13.5211L21.0958 14.035",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = NoteIcon;
exports.default = _default;