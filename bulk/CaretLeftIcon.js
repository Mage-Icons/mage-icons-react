"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CaretLeftIcon = _ref => {
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
    d: "M16.7505 5.48352V18.4835C16.7512 18.73 16.6795 18.9713 16.5445 19.1775C16.4094 19.3837 16.2168 19.5457 15.9905 19.6435C15.8294 19.7122 15.6556 19.7463 15.4805 19.7435H15.2905C15.0473 19.7092 14.8203 19.601 14.6405 19.4335L7.88051 13.3535C7.69143 13.1875 7.53541 12.9874 7.42055 12.7635C7.31271 12.535 7.25472 12.2862 7.25051 12.0335C7.24174 11.7828 7.28961 11.5333 7.39052 11.3035C7.4853 11.0671 7.63235 10.8552 7.82058 10.6835L14.6405 4.57352C14.8236 4.41277 15.0494 4.30858 15.2905 4.27353C15.5309 4.2331 15.7778 4.2644 16.0005 4.36353C16.2231 4.46319 16.4111 4.62678 16.5405 4.83353C16.671 5.02578 16.7438 5.25128 16.7505 5.48352Z",
    fill: "currentColor"
  }));
};
var _default = CaretLeftIcon;
exports.default = _default;