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
    d: "M12.0002 9.40158C10.8906 6.88905 8.30933 6.66571 7.10728 7.76145C6.12869 8.64084 5.65866 10.7486 6.55249 12.6888C8.09357 16.0249 12.0002 17.7767 12.0002 17.7767C12.0002 17.7767 15.9069 16.0249 17.4479 12.6888C18.3418 10.7486 17.8718 8.64084 16.8932 7.76145C15.6911 6.66571 13.1098 6.88905 12.0002 9.40158Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "2.75",
    y: "2.75",
    width: "18.5",
    height: "18.5",
    rx: "6",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }));
};
var _default = HeartSquareIcon;
exports.default = _default;