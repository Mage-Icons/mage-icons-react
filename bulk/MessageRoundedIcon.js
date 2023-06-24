"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageRoundedIcon = _ref => {
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
    d: "M21.5716 11.9755C21.5799 13.0942 21.3622 14.203 20.9316 15.2355C20.5016 16.2654 19.8769 17.2025 19.0916 17.9955C17.4977 19.5835 15.3415 20.4783 13.0916 20.4855C11.9716 20.4878 10.8626 20.2633 9.83161 19.8256L6.83161 20.2755C6.55675 20.3218 6.27458 20.2978 6.01154 20.2056C5.73909 20.1151 5.49226 19.9608 5.29157 19.7556C5.09611 19.5464 4.95537 19.2922 4.88166 19.0156C4.81182 18.7399 4.81182 18.4512 4.88166 18.1755L5.29157 15.1755C4.4448 13.1193 4.4448 10.8118 5.29157 8.75555C5.71885 7.7213 6.34395 6.78036 7.13166 5.98553C8.72743 4.40269 10.884 3.51453 13.1317 3.51453C15.3793 3.51453 17.5359 4.40269 19.1317 5.98553C19.9194 6.78036 20.5444 7.7213 20.9716 8.75555C21.3853 9.77785 21.5894 10.8728 21.5716 11.9755Z",
    fill: "currentColor"
  }));
};
var _default = MessageRoundedIcon;
exports.default = _default;