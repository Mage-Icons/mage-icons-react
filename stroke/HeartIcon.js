"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HeartIcon = _ref => {
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
    d: "M12 7.2294C10.2671 3.30561 6.23596 2.95683 4.35874 4.66804C2.83049 6.04137 2.09645 9.33298 3.49233 12.363C5.89902 17.573 12 20.3087 12 20.3087C12 20.3087 18.101 17.573 20.5076 12.363C21.9036 9.33298 21.1695 6.04137 19.6413 4.66804C17.764 2.95683 13.7328 3.30561 12 7.2294Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = HeartIcon;
exports.default = _default;