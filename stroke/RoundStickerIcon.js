"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RoundStickerIcon = _ref => {
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
    d: "M21.5 12L12 21.5C10.1211 21.5 8.28434 20.9428 6.72208 19.8989C5.15982 18.8551 3.94218 17.3714 3.22315 15.6355C2.50412 13.8996 2.31598 11.9895 2.68254 10.1466C3.0491 8.30382 3.95389 6.61108 5.28249 5.28249C6.61108 3.95389 8.30382 3.0491 10.1466 2.68254C11.9895 2.31598 13.8996 2.50412 15.6355 3.22315C17.3714 3.94218 18.8551 5.15982 19.8989 6.72208C20.9428 8.28434 21.5 10.1211 21.5 12Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 21.5C11.584 20.4612 11.3933 19.3458 11.4405 18.2278C11.4489 16.4332 12.1677 14.715 13.4396 13.449C14.7115 12.183 16.4331 11.4722 18.2277 11.4723C19.3455 11.4295 20.4599 11.62 21.4999 12.0317",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = RoundStickerIcon;
exports.default = _default;