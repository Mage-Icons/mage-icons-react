"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CoinAIcon = _ref => {
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
    d: "M12 3.25C6.41 3.25 2 6.06999 2 9.70999V14.29C2 17.91 6.39 20.75 12 20.75C17.61 20.75 22 17.91 22 14.29V9.72C22 6.09 17.57 3.25 12 3.25ZM20.5 14.25C20.5 16.94 16.61 19.25 12 19.25C7.39 19.25 3.5 16.98 3.5 14.25V13.1C5.28 14.97 8.5 16.1 12 16.1C15.5 16.1 18.73 14.92 20.5 13.1V14.25Z",
    fill: "currentColor"
  }));
};
var _default = CoinAIcon;
exports.default = _default;