"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BookmarkIcon = _ref => {
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
    d: "M10.94 18.339L7.51 20.8869C7.26537 21.0782 6.9732 21.1993 6.66487 21.2372C6.35654 21.2751 6.0437 21.2284 5.75995 21.102C5.4762 20.9757 5.23225 20.7745 5.05432 20.5201C4.87638 20.2656 4.77118 19.9676 4.75 19.6579V6.34928C4.78647 5.35977 5.21452 4.42518 5.94014 3.75077C6.66575 3.07636 7.6296 2.71726 8.62 2.75235H15.38C16.3704 2.71726 17.3342 3.07636 18.0599 3.75077C18.7855 4.42518 19.2135 5.35977 19.25 6.34928V19.6579C19.2288 19.9676 19.1236 20.2656 18.9457 20.5201C18.7677 20.7745 18.5238 20.9757 18.24 21.102C17.9563 21.2284 17.6435 21.2751 17.3351 21.2372C17.0268 21.1993 16.7346 21.0782 16.49 20.8869L13.06 18.339C12.7521 18.1149 12.381 17.9941 12 17.9941C11.619 17.9941 11.2479 18.1149 10.94 18.339Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = BookmarkIcon;
exports.default = _default;