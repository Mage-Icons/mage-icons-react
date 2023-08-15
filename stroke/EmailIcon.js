"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EmailIcon = _ref => {
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
    d: "M18.9375 3.90622H5.0625C3.78534 3.90622 2.75 4.94156 2.75 6.21872V17.7812C2.75 19.0584 3.78534 20.0938 5.0625 20.0938H18.9375C20.2147 20.0938 21.25 19.0584 21.25 17.7812V6.21872C21.25 4.94156 20.2147 3.90622 18.9375 3.90622Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.95814 6.21872L12 12L21.146 6.32278",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = EmailIcon;
exports.default = _default;