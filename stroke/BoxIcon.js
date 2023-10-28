"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BoxIcon = _ref => {
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
    d: "M4.38232 8.8125V17.3125C4.38232 18.1579 4.72628 18.9686 5.33853 19.5664C5.95079 20.1642 6.78118 20.5 7.64703 20.5H16.3529C17.2188 20.5 18.0492 20.1642 18.6614 19.5664C19.2737 18.9686 19.6176 18.1579 19.6176 17.3125V8.8125",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.6176 3.5H4.38235C3.48083 3.5 2.75 4.21355 2.75 5.09375V7.21875C2.75 8.09895 3.48083 8.8125 4.38235 8.8125H19.6176C20.5192 8.8125 21.25 8.09895 21.25 7.21875V5.09375C21.25 4.21355 20.5192 3.5 19.6176 3.5Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = BoxIcon;
exports.default = _default;