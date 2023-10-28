"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HeartHealthIcon = _ref => {
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
    d: "M12 7.19401C10.27 3.27401 6.24 2.96401 4.36 4.63401C2.83 5.96401 2.1 9.29401 3.49 12.324C5.9 17.534 12 20.324 12 20.324C12 20.324 18.1 17.584 20.51 12.374C21.9 9.37401 21.17 6.05401 19.64 4.68401C17.76 2.96401 13.73 3.27401 12 7.19401Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.34003 11.964H8.00003L11 14.964L14 8.96402L16 11.964H20.66",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = HeartHealthIcon;
exports.default = _default;