"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HeartSquareIcon = _ref => {
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
    d: "M15.25 2H8.75C6.9606 2.00265 5.24528 2.71468 3.97998 3.97998C2.71468 5.24528 2.00265 6.9606 2 8.75V15.25C2.00265 17.0394 2.71468 18.7547 3.97998 20.02C5.24528 21.2853 6.9606 21.9974 8.75 22H15.25C17.0394 21.9974 18.7547 21.2853 20.02 20.02C21.2853 18.7547 21.9974 17.0394 22 15.25V8.75C21.9974 6.9606 21.2853 5.24528 20.02 3.97998C18.7547 2.71468 17.0394 2.00265 15.25 2ZM16.9 13C15.8665 14.8792 14.2626 16.3814 12.3199 17.29C12.2195 17.3359 12.1104 17.3596 12 17.3596C11.8896 17.3596 11.7805 17.3359 11.6801 17.29C9.73738 16.3814 8.13351 14.8792 7.09998 13C6.71469 12.2478 6.56771 11.3961 6.67847 10.5583C6.78922 9.72046 7.15246 8.93623 7.71997 8.31C8.05645 8.0174 8.45801 7.80941 8.89111 7.70331C9.32422 7.59721 9.77633 7.59607 10.21 7.70001C10.8989 7.83147 11.5269 8.18227 12 8.70001C12.4745 8.18396 13.1018 7.83349 13.79 7.70001C14.2253 7.59688 14.6788 7.59837 15.1134 7.70441C15.548 7.81044 15.9512 8.01798 16.29 8.31C16.8451 8.9352 17.1999 9.71246 17.3086 10.5414C17.4173 11.3703 17.275 12.2128 16.9 12.96V13Z",
    fill: "currentColor"
  }));
};
var _default = HeartSquareIcon;
exports.default = _default;