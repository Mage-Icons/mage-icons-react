"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CaretUpIcon = _ref => {
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
    d: "M19.66 16.01C19.5548 16.229 19.3924 16.4156 19.19 16.55C18.9871 16.6804 18.7511 16.7498 18.51 16.75H5.50995C5.26565 16.75 5.02643 16.6807 4.82001 16.55C4.61785 16.4161 4.45785 16.2275 4.35871 16.0062C4.25957 15.7849 4.22531 15.54 4.25995 15.3C4.29841 15.058 4.40613 14.8322 4.57001 14.65L10.66 7.88C10.8185 7.68979 11.0164 7.53627 11.2401 7.43002C11.4683 7.32014 11.7169 7.25883 11.97 7.25C12.223 7.25276 12.4735 7.30017 12.71 7.39001C12.9401 7.49114 13.1475 7.63735 13.32 7.82001L19.43 14.65C19.5927 14.8318 19.6973 15.0582 19.73 15.3C19.7768 15.5384 19.7524 15.7853 19.66 16.01Z",
    fill: "currentColor"
  }));
};
var _default = CaretUpIcon;
exports.default = _default;