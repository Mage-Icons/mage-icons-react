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
    d: "M12.15 3.13H11.85C10.1407 3.16916 8.51444 3.87512 7.3186 5.09711C6.12277 6.3191 5.45211 7.96023 5.44995 9.66998V14.32C5.44995 15.1802 5.61944 16.0319 5.94861 16.8266C6.27778 17.6213 6.76018 18.3433 7.36841 18.9515C7.97663 19.5598 8.69873 20.0422 9.49341 20.3714C10.2881 20.7006 11.1398 20.87 12 20.87C12.8602 20.87 13.7119 20.7006 14.5066 20.3714C15.3013 20.0422 16.0232 19.5598 16.6315 18.9515C17.2397 18.3433 17.7222 17.6213 18.0514 16.8266C18.3806 16.0319 18.5499 15.1802 18.5499 14.32V9.67999C18.5504 7.9685 17.8809 6.32485 16.6848 5.10071C15.4887 3.87657 13.8611 3.1692 12.15 3.13ZM11.25 10.13H6.94995V9.72003C6.93801 8.50677 7.36768 7.33051 8.15881 6.41058C8.94995 5.49066 10.0486 4.88984 11.25 4.72003V10.13ZM17.0499 10.13H12.75V4.72998C13.947 4.90974 15.0396 5.51349 15.8289 6.43121C16.6181 7.34893 17.0514 8.51957 17.0499 9.72998V10.13Z",
    fill: "currentColor"
  }));
};
var _default = MouseIcon;
exports.default = _default;