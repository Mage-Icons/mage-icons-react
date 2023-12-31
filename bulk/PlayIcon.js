"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PlayIcon = _ref => {
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
    d: "M19.1049 11.4462C19.1094 11.7909 19.0377 12.1324 18.8949 12.4462C18.7448 12.7775 18.5146 13.0662 18.2249 13.2862L8.57492 20.7962C8.2352 21.0552 7.83009 21.2145 7.40493 21.2562H7.17492C6.82718 21.2575 6.48421 21.1751 6.17492 21.0162C5.79914 20.8317 5.48113 20.5477 5.25546 20.195C5.02979 19.8424 4.90508 19.4347 4.89493 19.0162V5.01618C4.89285 4.60292 5.00724 4.19746 5.22494 3.84619C5.43562 3.49496 5.73739 3.20727 6.09829 3.01361C6.4592 2.81996 6.86578 2.72754 7.27493 2.74619C7.68722 2.7664 8.08709 2.89394 8.43493 3.11618L18.0949 9.55619C18.3891 9.76045 18.6348 10.0267 18.8149 10.3362C19.0055 10.6751 19.1053 11.0574 19.1049 11.4462Z",
    fill: "currentColor"
  }));
};
var _default = PlayIcon;
exports.default = _default;