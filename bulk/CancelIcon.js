"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CancelIcon = _ref => {
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
    d: "M11.9999 1.75012C9.97261 1.75012 7.9909 2.35127 6.30529 3.47755C4.61969 4.60384 3.30591 6.20468 2.53012 8.07762C1.75432 9.95056 1.55134 12.0115 1.94683 13.9998C2.34233 15.9881 3.31855 17.8145 4.75204 19.248C6.18553 20.6815 8.0119 21.6577 10.0002 22.0532C11.9885 22.4487 14.0494 22.2457 15.9224 21.4699C17.7953 20.6941 19.3962 19.3803 20.5225 17.6947C21.6487 16.0091 22.2499 14.0274 22.2499 12.0001C22.2592 10.6515 22.0004 9.31442 21.4886 8.06663C20.9768 6.81884 20.2221 5.68519 19.2685 4.73154C18.3148 3.77788 17.1812 3.02321 15.9334 2.5114C14.6856 1.99958 13.3485 1.74081 11.9999 1.75012ZM18.6899 17.6401L6.3699 5.31012C8.04757 3.9095 10.1886 3.18741 12.3719 3.2859C14.5551 3.3844 16.6225 4.29635 18.1672 5.84234C19.712 7.38833 20.6222 9.45644 20.719 11.6398C20.8157 13.8231 20.0919 15.9636 18.6899 17.6401Z",
    fill: "currentColor"
  }));
};
var _default = CancelIcon;
exports.default = _default;