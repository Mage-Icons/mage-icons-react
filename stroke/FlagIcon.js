"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FlagIcon = _ref => {
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
    d: "M4.38235 14.7206C4.38235 14.7206 5.47059 13.6324 8.7353 13.6324C12 13.6324 12 15.8088 15.2647 15.8088C16.774 15.742 18.2544 15.3719 19.6177 14.7206V3.83824C18.2544 4.48953 16.774 4.85963 15.2647 4.92647C12 4.92647 12 2.75 8.7353 2.75C5.47059 2.75 4.38235 3.83824 4.38235 3.83824",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.38235 21.25V3.83823",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = FlagIcon;
exports.default = _default;